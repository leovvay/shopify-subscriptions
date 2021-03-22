module.exports = {
  rules: {
    'max-len': ['warn', { code: 80, ignoreUrls: true }],
    quotes: [
      'warn',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
  },
};
