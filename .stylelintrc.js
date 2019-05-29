module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-idiomatic-sass'],
  rules: {
    'color-no-hex': true,
    'function-name-case': [
      'lower',
      {
        ignoreFunctions: [
          'colorLuminance',
          'findColorInvert',
          'mergeColorMaps',
          'powerNumber',
        ],
      },
    ],
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],
  },
};
