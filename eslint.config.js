import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import {defineConfig, globalIgnores} from 'eslint/config'
import eslintPluginTailwindcss from "eslint-plugin-tailwindcss";

export default defineConfig([
    globalIgnores(['dist']),
    {
        files: ['**/*.{ts,tsx}'],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite,
            eslintPluginTailwindcss.configs.recommended
        ],
        languageOptions: {
            globals: globals.browser,
        },
        settings: {
            tailwindcss: {
                cssConfigPath: "./src/index.css",
            },
        },
        rules: {
            "tailwindcss/classnames-order": "warn",
            "tailwindcss/no-arbitrary-value": "warn",
            "tailwindcss/no-custom-classname": [
                "warn",
                {whitelist: ["custom\\-*"]},
            ],
            "tailwindcss/no-contradicting-classname": "warn",
        },

    },
])
