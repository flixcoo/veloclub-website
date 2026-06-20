import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import eslintPluginTailwindcss from "eslint-plugin-tailwindcss";
import { fixupPluginRules } from '@eslint/compat';

export default tseslint.config(
    {
        ignores: ['dist', 'build', 'node_modules'],
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ['**/*.{ts,tsx}'],
        plugins: {
            'react-hooks': fixupPluginRules(reactHooks),
            'react-refresh': reactRefresh,
            'tailwindcss': eslintPluginTailwindcss,
        },
        languageOptions: {
            globals: globals.browser,
        },
        settings: {
            tailwindcss: {
                config: './tailwind.config.js',
                cssFiles: ['./src/style.css'],
            },
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            'tailwindcss/classnames-order': 'warn',
            'tailwindcss/no-arbitrary-value': 'warn',
            'tailwindcss/no-custom-classname': [
                'warn',
                { whitelist: ['App', 'custom\\-*', 'text-md', 'md:text-md', 'align-start'] },
            ],
            'tailwindcss/no-contradicting-classname': 'error',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                { argsIgnorePattern: '^_' },
            ],
        },
    }
)
