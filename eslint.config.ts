import { Linter } from 'eslint'
import js from '@eslint/js'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import * as tseslint from 'typescript-eslint'

import prettierPlugin from 'eslint-plugin-prettier'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const config: Linter.FlatConfig[] = [
  {
    ignores: ['**/dist/**', '**/build/**', '**/.next/**'],
  },

  js.configs.recommended,
  ...(tseslint.configs.recommended as Linter.FlatConfig[]),

  {
    plugins: {
      prettier: prettierPlugin,
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parser: tseslint.parser as any,
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      quotes: ['warn', 'single', { avoidEscape: true }],
      semi: ['warn', 'never'],
      indent: ['warn', 2],

      '@next/next/no-img-element': 'off',

      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/no-unescaped-entities': 'off',
      'react/no-unknown-property': 'off',

      'jsx-a11y/anchor-is-valid': 'off',
      'jsx-a11y/alt-text': 'off',

      'prettier/prettier': 'off',
      '@typescript-eslint/no-explicit-any': 'off',

      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },
]

export default config
