module.exports = {
  overrides: [
    {
      files: ['**.json'],
      extends: ['plugin:json/recommended-with-comments'],
      plugins: ['json'],
      rules: {
        'comma-dangle': 0,
        'no-var': 0,
        'no-unused-vars': 0,
        quotes: 0,
        'quote-props': 0,
        semi: 0,
      },
    },
  ],
}
