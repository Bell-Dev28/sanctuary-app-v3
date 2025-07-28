import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';

export default [
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': ts
    },
    languageOptions: {
      parser: ts.parser
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn'
    }
  }
];
