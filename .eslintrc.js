module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: "airbnb-base",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["jest"],
  rules: {
    quotes: [2, "double", { avoidEscape: true }],
    "comma-dangle": "off",
    "max-len": [
      "error",
      {
        ignoreComments: true,
      },
    ],
    "import/prefer-default-export": "off",
    "no-plusplus": "off",
    "no-unused-expressions": "off",
    "func-names": "off",
    "no-console": "off",
    "no-param-reassign": "off",
  },
};
