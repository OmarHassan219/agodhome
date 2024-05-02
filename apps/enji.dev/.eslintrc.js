/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['next-typescript'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  rules: {
    "react/self-closing-comp": "off"
  }
};
