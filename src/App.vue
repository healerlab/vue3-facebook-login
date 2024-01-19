<template>
  <div>
    <HFaceBookLogin 
      v-slot="fbLogin" 
      app-id="xyz" 
      @onSuccess="onSuccess"
      scope="email,public_profile"
      fields="id,name,email,first_name,last_name,birthday"
      @onFailure="onFailure"
    >
      <span @click="fbLogin.initFBLogin" class="fb-button">Login with facebook</span>
    </HFaceBookLogin>
  </div>
</template>
<script setup>
import { HFaceBookLogin } from '@healerlab/vue3-facebook-login';

const onSuccess = (response) => {
  // get your auth token and info
}

const onFailure = (error) => {
  // logic if auth failed
}
</script>
<style lang="scss" scoped>
.fb-button {
  display: inline-block;
  margin: 10px 0 10 0;
  color: white;
  background-color: #1967d2;
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;
}
</style>
