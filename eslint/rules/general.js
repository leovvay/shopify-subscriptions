module.exports = {
  rules: {
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'styled-components',
            message: 'Please import from styled-components/macro.',
          },
        ],
        patterns: ['!styled-components/macro'],
      },
    ],

    '@typescript-eslint/no-unused-expressions': 'error',
    'import/no-default-export': 'warn', // should be error
    // should be error
    // should be error
    'no-debugger': 'warn',
    'react/boolean-prop-naming': 'error',
    'react/no-array-index-key': 'warn', // should be error
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': ['error', { ignoreStateless: true }],
    'react/no-typos': 'error',
    'no-lone-blocks': 'warn', // should be errror
    '@typescript-eslint/no-empty-interface': 'warn', // should be error
    'react/no-string-refs': 'warn', // should be error
    '@typescript-eslint/no-array-constructor': 'warn',
    eqeqeq: 'warn', // should be error
    'react/no-unknown-property': 'error',
    'react/no-unused-state': 'warn', // should be error
    'react/no-will-update-set-state': 'error',
    //since react 17
    'react/react-in-jsx-scope': 'off',
    'react/prefer-es6-class': ['error', 'always'],
    // should be error
    'react/prefer-stateless-function': ['warn', { ignorePureComponents: true }],
    'react/void-dom-elements-no-children': 'error',
    'react/no-direct-mutation-state': 'warn', // should be error
    'no-empty-pattern': 'warn',
    'react/no-unescaped-entities': 'warn',
    'react/jsx-boolean-value': 'warn', // should be error
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.tsx'] }],
    'react/jsx-handler-names': 'warn', // should be error
    'react/jsx-key': 'warn', // should be error
    '@typescript-eslint/no-inferrable-types': 'warn',
    '@typescript-eslint/prefer-as-const': 'warn',
    'react-hooks/rules-of-hooks': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'unicorn/no-array-callback-reference': 'off',
    '@typescript-eslint/no-use-before-define': 'warn',
    'unicorn/no-zero-fractions': 'warn',
    'unicorn/no-array-reduce': 'off',
    'react/prop-types': 'warn',
    'sonarjs/prefer-immediate-return': 'warn',
    'unicorn/prefer-query-selector': 'warn',
    'unicorn/no-abusive-eslint-disable': 'warn',
    'react/self-closing-comp': 'warn',
    'react/no-unused-prop-types': 'warn',
    'react/default-props-match-prop-types': 'warn',
    'unicorn/prefer-starts-ends-with': 'warn',
    'sonarjs/no-inverted-boolean-check': 'warn', // should be error?
    'unicorn/no-unreadable-array-destructuring': 'warn',
    'unicorn/prefer-node-append': 'warn',
    'unicorn/prefer-node-remove': 'warn',
    'react/display-name': 'warn', // should be error as in original FE
    'react/sort-comp': 'warn', // should be error as in original FE
    '@typescript-eslint/ban-types': 'warn',
    'import/named': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    'import/export': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'unicorn/prefer-add-event-listener': 'off',
    'sonarjs/no-duplicated-branches': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/state-in-constructor': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/destructuring-assignment': 'off',
    'react/static-property-placement': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-wrap-multilines': 'off',
    'no-mixed-operators': 'off',
    'arrow-parens': 'off',
    'object-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'function-paren-newline': 'off',
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off', // required for ts
    'no-continue': 'off',
    'no-bitwise': 'off', // we won't make it without
    'max-classes-per-file': ['error', 3],
    'import/extensions': 'off', // no needs
    semi: ['warn', 'always'],
    '@typescript-eslint/no-namespace': 'warn', // Let's use no namespace
    'import/prefer-default-export': 'off', // We prefer named exports
    // If we do not have this reference then we do
    // not need to keep function as a part of the class
    //
    // Although sometimes it is convenient to keep
    // it as a part of class to encapsulate logic
    'class-methods-use-this': 'off',
    // This is indeed great rule but we can not use it as we use
    // class parameters defining within constructor
    'no-useless-constructor': 'off',
    // Still check for unresolved paths but ignore fancy @
    'import/no-unresolved': ['error', { ignore: ['^@'] }],
    // eslint-disable-next-line max-len
    // By default they have removed max length rule but
    // suggestion is to keep it at least in a form of warning
    'max-len': [
      'warn',
      100,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ], // must enable error
    'import/no-extraneous-dependencies': ['warn', { devDependencies: true }],
    'prefer-destructuring': [
      'warn',
      {
        object: true,
        array: false,
      },
    ], // must enable error
    'prefer-template': 'warn',
    'operator-linebreak': 'warn',
    'sonarjs/no-duplicate-string': 'warn', // must enable error
    'no-unused-expressions': 'warn',
    'arrow-body-style': ['warn', 'as-needed'],
    'unicorn/no-fn-reference-in-iterator': 0,
    'unicorn/catch-error-name': 'warn', // must enable error
    'no-await-in-loop': 'warn', // must enable error
    'no-secrets/no-secrets': ['warn', { tolerance: 4.4 }], // must enable error
    'unicorn/filename-case': 'off',
    'unicorn/prefer-array-find': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/consistent-function-scoping': 'warn', // must enable error
    'unicorn/no-null': 'off',
    'array-callback-return': [
      'warn',
      {
        allowImplicit: true,
      },
    ], // must enable error
    'unicorn/no-useless-undefined': 'off', // Off as it is in conflict with consistent return
    'sonarjs/cognitive-complexity': ['warn', 20], // must enable error
    indent: 'warn', // must enable error
    'no-sequences': 'warn', // must enable error
    'no-undef': 'warn', // must enable error
    'no-restricted-syntax': 'off',
    'lines-between-class-members': 'warn', // must enable error
    'sonarjs/no-identical-functions': 'warn', // must enable error
    'import/order': 'off',
    'unicorn/no-reduce': 'off',
    'import/newline-after-import': 'warn',
    'no-extra-boolean-cast': 'warn',
    'no-new': 'off',
    'space-infix-ops': 'warn',
    'no-multiple-empty-lines': 'warn',
    'object-curly-spacing': ['error', 'always'],
    'comma-dangle': 'warn',
    'unicorn/prefer-number-properties': 'off',
    'import/no-duplicates': 'warn', // must enable error
    'no-param-reassign': ['warn', { props: true }], // must enable error
    quotes: ['warn', 'single'], // must enable error
    'no-lonely-if': 'warn',
    'padded-blocks': ['warn', { blocks: 'never' }],
    'no-multi-spaces': 'warn', // must enable error
    'space-in-parens': 'warn', // must enable error
    'no-else-return': 'warn', // must enable error
    'no-trailing-spaces': 'warn',
    'no-useless-return': 'off',
    'sonarjs/no-redundant-jump': 'off',
    'unicorn/explicit-length-check': 'off',
    'unicorn/import-index': 'off',
    'unicorn/prefer-spread': 'off',
    'no-confusing-arrow': ['warn', { allowParens: true }],
    'new-cap': 'warn', // must enable error
    camelcase: 'off',
    'import/first': 'off',
    'unicorn/no-for-loop': 'off',
    'semi-style': ['warn', 'last'], // must enable error
    'no-inner-declarations': ['warn', 'both'], // must enable error
    'unicorn/no-nested-ternary': 'warn', // must enable error
    'no-shadow': 'warn', // must enable error
    'unicorn/no-console-spaces': 'off',
    'prefer-const': 'warn', // must enable error
    curly: 'warn',
    'nonblock-statement-body-position': 'warn',
    'object-shorthand': 'warn',
    'no-return-await': 'warn', // must enable error
    'consistent-return': 'warn', // must enable error
    'unicorn/new-for-builtins': 'warn', // must enable error
    'unicorn/throw-new-error': 'warn', // must enable error
    'unicorn/prefer-set-has': 'off',
    'keyword-spacing': 'warn', // must enable error
    'unicorn/no-process-exit': 'off',
    'unicorn/better-regex': 'warn',
    'no-useless-escape': 'off',
    'global-require': 'off',
    'sonarjs/no-collapsible-if': 'warn',
    'unicorn/prefer-optional-catch-binding': 'off',
    'unicorn/prefer-includes': 'warn',
    'no-unneeded-ternary': 'warn', // must enable error
    'no-array-constructor': 'warn', // must enable error
    'no-return-assign': 'warn', // must enable error
    'unicorn/no-new-buffer': 'warn',
    'no-buffer-constructor': 'warn',
    'no-case-declarations': 'warn', // must enable error
    'no-extra-semi': 'warn',
    'no-fallthrough': 'warn',
    'no-void': 'warn',
    'import/no-mutable-exports': 'warn', // must enable error
    'unicorn/prefer-string-slice': 'warn',
    'operator-assignment': 'warn',
    'no-irregular-whitespace': 'warn',
    'sonarjs/no-small-switch': 'off',
    'no-restricted-globals': 'warn', // must enable error
    'import/no-useless-path-segments': 'warn',
    'brace-style': 'warn',
    'no-multi-str': 'warn',
    /**
     * We want to have end of file new line
     */
    'eol-last': [ 'error', 'always' ],
    'comma-spacing': 'warn',
    'unicorn/no-object-as-default-parameter': 'warn',
    'key-spacing': 'warn',
    'spaced-comment': 'warn',
    'unicorn/error-message': 'warn',
    'prefer-spread': 'off',
    'getter-return': 'off',
    'sonarjs/prefer-single-boolean-return': 'warn',
    'unicorn/prefer-negative-index': 'warn',
    'no-prototype-builtins': 'warn',
    /**
     * Do not quote props if not needed
     */
    'quote-props': ['error', 'as-needed'],
    /**
     * Workaround to keep parameters in constructor for typescript
     */
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 2,
    /**
     * Do not make useless concatenations
     */
    'no-useless-concat': 'error',
    /**
     * No tabs allowed
     */
    'no-tabs': 'error',
    /**
     * Prevent valid TS imports to be marked as errors
     */
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    /**
     * As we use TS shortcuts (init variables in the constructor)
     * it is a ok to have empty constructor
     */
    'no-empty-constructor': 'off',
    /**
     * In conflict with tslint parser
     */
    'no-use-before-define': 'off',
  },
};
