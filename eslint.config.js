// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');

module.exports = tseslint.config(
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    plugins: {
      'local-eslint-rules': require('./local-eslint-rules'),
    },
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
      '@angular-eslint/sort-lifecycle-methods': ['error'],

      'consistent-return': 'error',
      eqeqeq: 'error',
      'no-self-compare': 'off',
      'accessor-pairs': 'error',
      'capitalized-comments': 'off',

      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/class-literal-property-style': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',

      'local-eslint-rules/forbidden-comment-rule': [
        'warn',
        { forbiddenTexts: ['forbiddenText1', 'forbiddenText2'] },
      ],
      'local-eslint-rules/deprecated-getPaymentsType-rule': 'warn',
      'local-eslint-rules/explicit-access-modifier': 'error',
    },
  },
  {
    files: ['**/*.html'],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    plugins: {
      'local-eslint-rules': require('./local-eslint-rules'),
    },
    rules: {
      'local-eslint-rules/trackby-rule': 'error',
    },
  },
);
