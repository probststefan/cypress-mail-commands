# Cypress Mail Commands

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

## TypeScript

The definition for `cy.linkFromMail` command is in [index.d.ts](index.d.ts) file. If you are using JavaScript, include the following line in our spec files

```js
// cypress/integration/my-spec.js
/// <reference types="@probststefan/cypress-mail-commands" />
```

With this line, you should have Intelligent Code Completion working in most IDEs and the TypeScript compiler should understand the `cy.linkFromMail` command.

## Usage

```ts
cy.linkFromMail({
  email: "tom.hanks@mail.com",
  subject: "Activate your account",
  identifier: "a.activationlink",
  begin: Cypress.moment().unix()
}).then((link: string) => {
  cy.visit(link);
});
```
