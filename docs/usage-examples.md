# Getting Started

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) version 16 or higher.
- Text Editor.
  - [VSCode](https://code.visualstudio.com/) is recommended, along with the [official Vue extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar).

To get started, you can install it with:

::: code-group

```sh [npm]
$ npm i @healerlab/vue3-facebook-login
```

```sh [pnpm]
$ pnpm add @healerlab/vue3-facebook-login
```

```sh [yarn]
$ yarn add @healerlab/vue3-facebook-login
```

:::


## Usage
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
  scope="email,public_profile"
  fields="id,name,email,first_name,last_name,birthday"
>
  <span @click="fbLogin.initFBLogin" class="fb-button">Login with facebook</span>
</HFaceBookLogin>
```

This is minimal style for your input, you can change it to match your use-case:


```scss
<style scoped lang="scss">
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
```

In next section, you can explore more about props, event within this component