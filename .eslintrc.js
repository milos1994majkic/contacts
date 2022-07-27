module.exports = {
  extends: [
    "eslint-config-react-app",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  globals: {
    cy: true,
    context: true,
    assert: true,
    describe: true,
    before: true,
    VoidFunction: true,
    JSX: true,
  },
  plugins: ["jest", "prettier"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    "jest/globals": true,
  },
  rules: {
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        aspects: ["invalidHref"],
      },
    ],
    "no-lonely-if": ["error"],
    "no-console": "off",
    "no-prototype-builtins": "off",
    "react/jsx-uses-vars": ["error"],
    "react/prop-types": "off",
    "no-use-before-define": "off",
    "react/jsx-no-undef": "error",
    "no-fallthrough": "off",
    "react-hooks/exhaustive-deps": "off",
    "jest/no-export": "off",
    "no-else-return": "error",
    "no-var": "error",
    "prefer-const": [
      "error",
      {
        destructuring: "all",
      },
    ],
    "import/no-anonymous-default-export": "off",
  },
};
