module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: 'rtablada',
  env: {
    browser: true,
    jquery: true
  },
  rules: {
    "comma-dangle": ["error", "always-multiline"],
    "no-underscore-dangle": ["error", { "allow": ["_super"] }]
  }
};
