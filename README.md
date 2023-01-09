![Build Status](https://github.com/internetarchive/iaux-toast-manager/actions/workflows/ci.yml/badge.svg) [![codecov](https://codecov.io/gh/internetarchive/iaux-toast-manager/branch/master/graph/badge.svg)](https://codecov.io/gh/internetarchive/iaux-toast-manager)

# Toast Manager Component

A Toast manager built on LitElement with support for custom content and light DOM elements.

![Toast Manager](./assets/toast-screenshot.png "Toast Manager Demo")

## Installation
```bash
npm install --save @internetarchive/toast-manager
```

## Usage
```html
<!-- index.html -->
<script type="module">
  import '@internetarchive/toast-manager';
  import { ToastConfig } from '@internetarchive/toast-manager';
</script>

<toast-template></toast-template>

```
### Config Options

All of the config options:

```javascript
const config = new ToastConfig();
config.texts = 'Thank you for your support!1111';
config.showCloseButton = true;
config.dismisOnClick = false;
```

# Development

## Prerequisite
```bash
npm install
```

## Start Development Server
```bash
npm start
```

## Testing
```bash
npm test
```

## Linting
```bash
npm lint
```
