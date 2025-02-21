# Angular 16 Project with Linting, Prettier, Husky, and lint-staged

This project demonstrates how to set up Linting, Prettier, Husky, and lint-staged in an Angular 16 project. Follow the steps below to replicate the setup.

## Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)
- Angular CLI (>= 12.x)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/angular16_linting_husky.git
cd angular16_linting_husky
```

### 2. Install Dependencies

```bash
npm install
```

## Setting Up Linting

### 1. Install ESLint

```bash
ng add @angular-eslint/schematics
```

### 2. Configure ESLint

Update `.eslintrc.json` with your preferred rules. Example:

```json
{
  "root": true,
  "overrides": [
    {
      "files": ["*.ts"],
      "parserOptions": {
        "project": ["tsconfig.json"]
      },
      "extends": [
        "plugin:@angular-eslint/recommended",
        "eslint:recommended"
      ],
      "rules": {
        // ...your rules
      }
    },
    {
      "files": ["*.html"],
      "extends": ["plugin:@angular-eslint/template/recommended"],
      "rules": {
        // ...your rules
      }
    }
  ]
}
```

## Setting Up Prettier

### 1. Install Prettier

```bash
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

### 2. Configure Prettier

Create a `.prettierrc` file:

```json
{
  "singleQuote": true,
  "printWidth": 80
}
```

Update `.eslintrc.json` to include Prettier:

```json
{
  // ...existing code...
  "extends": [
    // ...existing code...
    "plugin:prettier/recommended"
  ],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

## Setting Up Husky

### 1. Install Husky

```bash
npm install husky --save-dev
npx husky install
```

### 2. Add Husky Hooks

```bash
npx husky add .husky/pre-commit "npx lint-staged"
```

## Setting Up lint-staged

### 1. Install lint-staged

```bash
npm install lint-staged --save-dev
```

### 2. Configure lint-staged

Add the following to `package.json`:

```json
"lint-staged": {
  "*.{ts,html,css,scss}": [
    "ng lint",
    "prettier --write"
  ]
}
```

## Running the Project

### 1. Start the Development Server

```bash
ng serve
```

### 2. Running Linting

```bash
ng lint
```

### 3. Formatting Code

```bash
npx prettier --write .
```

## Contributing

Feel free to submit issues and pull requests.

## License

This project is licensed under the MIT License.