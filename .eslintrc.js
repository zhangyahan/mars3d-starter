module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],

  parserOptions: {
    parser: "babel-eslint",
  },

  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "linebreak-style": ["error", "unix"],
    "prettier/prettier": [
      "warn",
      {
        singleQuote: true,
        printWidth: 120,
        semi: false,
        arrowParens: "always",
        trailingComma: "es5",
        tabWidth: 2,
        useTabs: false,
      },
    ],
  },
};
