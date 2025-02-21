# Angular16LintingHusky

## Project Creation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.16.
`npx @angular/cli@16 new angular16_linting_husky`

## Add angular-eslint

ng add angular-eslint or ng add @angular-eslint/schematics
`ng add angular-eslint`

To run the linting process in project using npm, you can use the following command:
`npm run lint`

- Included built-in rules
- Added custom linting rules to the Angular app:
  - trackby-rule
  - forbidden-comment-rule
  - deprecated-getPaymentsType-rule
  - explicit-access-modifier

## Add prettier

install prettier
`npm install --save-dev prettier`

Create a Prettier configuration file: You can create a .prettierrc file
`{`
`  "singleQuote": true,`
`  "trailingComma": "all"`
`}`

Add a Prettier ignore file: Create a .prettierignore file
`node_modules`
`dist`

Format your code: You can format your code using Prettier by running the following command:
`npx prettier --write .`


## Adding husky and lint-staged
To add Husky and lint-staged to project, you can use the following command:
`npm install husky lint-staged --save-dev`
- Package.json changes as below
    - add `"prepare": "npx husky install"` in "scripts" section
    - add 
    ```javascript
        "lint-staged": {
        "src/**/*.{html,ts,scss}": "prettier --write",
        "src/**/*.ts": "eslint"
        }

command will execute the linting tasks defined in your lint-staged configuration. 
`npx lint-staged`

To set up Husky in your project, you can use the following command:
`npx husky-init && npm install`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
