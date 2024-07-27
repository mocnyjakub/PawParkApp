// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "plugin:jest/recommended", "prettier"],
  plugins: ["jest", "testing-library", "prettier"],
  env: {
    "jest/globals": true,
  },
  rules: {},
};
