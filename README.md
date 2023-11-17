# Vue 3 facebook login

[![npm](https://img.shields.io/npm/v/@healerlab/vue3-facebook-login?style=flat-square)](https://www.npmjs.com/package/@healerlab/vue3-facebook-login)
[![npm](https://img.shields.io/npm/dw/@healerlab/vue3-facebook-login?style=flat-square)](https://www.npmjs.com/package/@healerlab/vue3-facebook-login)
[![GitHub](https://img.shields.io/github/license/healerlab/vue3-facebook-login?style=flat-square)](https://github.com/healerlab/vue3-facebook-login/blob/main/LICENSE)

## Demo
[Demo and docs](https://healerlab.github.io/vue3-facebook-login)

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) version 16 or higher.
- Text Editor.
  - [VSCode](https://code.visualstudio.com/) is recommended, along with the [official Vue extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar).

To get started, you can install `vue3-facebook-login` with:

```bash
npm i @healerlab/vue3-facebook-login
```

with pnpm:

```bash
pnpm add @healerlab/vue3-facebook-login
```

with yarn:

```bash
yarn add @healerlab/vue3-facebook-login
```



## Usage
See the [FaceBook Graph API](https://developers.facebook.com/tools/explorer) for more information about scope.

Import the component and register it locally in your Vue component:

```vue
<script setup>
import { HFaceBookLogin } from '@healerlab/vue3-facebook-login';

const onSuccess = (response) => {
  // get your auth token and info
}

const onFailure = () => {
  // logic if auth failed
}
</script>
```

Use the component in your template:

```vue
<HFaceBookLogin 
  v-slot="fbLogin" 
  app-id="391069538168549" 
  @onSuccess="onSuccess" 
  @onFailure="onFailure"
  scope="id,name,email,first_name,last_name,birthday"
>
  <span @click="fbLogin.initFBLogin" class="fb-button">Login with facebook</span>
</HFaceBookLogin>
```

This is style for this example and not required, you can change and customize it to match your use-case:
```scss
.fb-button {
  display: inline-block;
  margin: 10px 0 10 0;
  color: white;
  background-color: #1967d2;
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;
}
```

See the [Vue3 FaceBook Login](https://healerlab.github.io/vue3-facebook-login) page for more information.
