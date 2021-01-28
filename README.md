# NPM TypeScript Module Boilerplate

[![npm version](https://badge.fury.io/js/cypress-mail-commands.svg)](https://badge.fury.io/js/cypress-mail-commands)

## Installing

Install the module.

```bash
npm install cypress-mail-commands --save-dev
```

Add the following line to `cypress/support/index.js`.

```javascript
require('cypress-mail-commands');
```

### Type definitions

Import typescript definitions by adding them to your `tsconfig.json`. Add the cypress-mail-commands types before the Cypress types so intellisense will prefer the cypress-commands versions.

```json
"types": [
    "cypress-mail-commands",
    "cypress"
]
```
