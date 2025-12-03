import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactNative from "eslint-plugin-react-native";
import babelParser from "@babel/eslint-parser";
import globals from "globals";
import jest from 'eslint-plugin-jest'


export default [
  {
    files: ["**/*.{js,jsx}"],
    ignores: ["node_modules/"],

    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        allowImportExportEverywhere: true,
        sourceType: "module",
        babelOptions: {
          presets: ["@babel/preset-react"],
        },
      },

      ecmaVersion: "latest",
      sourceType: "module",

      // ✔ Replace `env` with globals (React Native environment)
      globals: {
        ...globals.browser,
        ...globals.node,
        ...reactNative.environments["react-native"].globals,
        ...jest.environments.globals,
      },
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    plugins: {
      react,
      "react-native": reactNative,
      jest
    },

    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...jest.configs.recommended.rules,

      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": 'off'
    },
  },
];
