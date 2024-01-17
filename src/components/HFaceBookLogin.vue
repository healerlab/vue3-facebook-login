<template>
  <div>
    <slot :initFBLogin="initFacebookLogin" />
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
import axios from 'axios'

const props = defineProps({
  appId: {
    type: String,
    required: true
  },
  version: {
    type: String,
    default: 'v18.0'
  },
  scope: {
    type: String,
    default: ''
  }
})

const emits = defineEmits(['onSuccess', 'onFailure'])

onMounted(() => {
  loadFacebookSDK(document, "script", "facebook-jssdk");
  initFacebook();
})

const initFacebookLogin = async () => {
  logInWithFacebook()
}

const logInWithFacebook = async () => {
  try {
    if (props.appId) {
      await loadFacebookSDK(document, "script", "facebook-jssdk");
      await initFacebook(props.appId, props.version);

      // Check the current login status
      window.FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
          // User is already connected
          return extractInfo(response);
        } else {
          // User is not connected, trigger the login flow
          window.FB.login(function(response) {
            if (response.authResponse) {
              // User successfully logged in
              return extractInfo(response);
            } else {
              // Login failed
              return emits('onFailure');
            }
          });
        }
      });

      return false;
    } else {
      return emits('onFailure', 'appId is required')
    }
  } catch (error) {
    return emits('onFailure')
  }
}
const initFacebook = async () => {
  window.fbAsyncInit = function () {
    window.FB.init({
      appId: props.appId,
      cookie: true,
      xfbml: true,
      version: props.version,
    });
    window.FB.AppEvents.logPageView();
  };
}
const loadFacebookSDK = async (d, s, id) => {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}
const getAuthInfo = async (accessToken) => {
  const response = await axios.get(`https://graph.facebook.com/v18.0/me?fields=${props.scope}&access_token=${accessToken}`)
  return response?.data
}

const extractInfo = async (response) => {
  if (props.scope) {
    let authInfo = {}
    if (props.scope) {
      authInfo = await getAuthInfo(response.authResponse.accessToken)
    }
    return emits('onSuccess', {...response, authInfo})
  } else {
    return emits('onSuccess', {...response})    
  }
}
</script>
