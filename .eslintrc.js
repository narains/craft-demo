module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'complexity': 'error',
		// es6
		'arrow-body-style': ['error', 'as-needed'],
		'arrow-parens': ['error', 'as-needed'],
		'arrow-spacing': ['error'],
		'no-duplicate-imports': ['error', { 'includeExports': true }],
		'no-useless-computed-key': ['error'],
		'object-shorthand': ['error', 'always'],

		// spacing
		'indent': ['error', 'tab'],
		'array-bracket-spacing': ['error', 'never'],
		'object-curly-spacing': ['error', 'always'],
		'spaced-comment': ['error', 'always'],
		'no-multi-spaces': ['error'],
		'no-irregular-whitespace': ['error'],
		'block-spacing': ['error', 'always'],
		'computed-property-spacing': ['error', 'never'],
		'eol-last': ['error', 'always'],
		'func-call-spacing': ['error', 'never'],
		'brace-style': ['error', '1tbs'],
		'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true, 'mode': 'strict' }],
		'keyword-spacing': ['error', { 'before': true, 'after': true }],
		'space-before-blocks': ['error', 'always'],
		'no-multiple-empty-lines': ['error', { 'max': 1 }],
		'no-trailing-spaces': ['error'],
		'no-whitespace-before-property': ['error'],
		'padding-line-between-statements': [
			'error',
			{ 'blankLine': 'always', 'prev': ['const', 'let', 'var'], 'next': '*' },
			{ 'blankLine': 'any', 'prev': ['const', 'let', 'var'], 'next': ['const', 'let', 'var'] },
			{ 'blankLine': 'always', 'prev': ['function'], 'next': '*' }
		],
		'space-before-function-paren': ['error', 'always'],
		'space-in-parens': ['error', 'never'],
		'space-infix-ops': ['error'],
		'space-unary-ops': ['error', { 'words': true, 'nonwords': false }],
		'switch-colon-spacing': ['error', { 'after': true, 'before': false }],
		'template-tag-spacing': ['error', 'never'],
		'padded-blocks': ['off'],
		'strict': ['off'],

		// functions
		'func-names': ['off'],

		// commas
		'comma-dangle': ['error', 'never'],
		'comma-style': ['error', 'last'],
		'comma-spacing': ['error', { 'before': false, 'after': true }],

		// semicolons
		'semi': ['error', 'always'],
		'semi-spacing': ['error', { 'before': false, 'after': true }],
		'semi-style': ['error', 'last'],

		// variables
		'no-var': ['error'],
		'one-var': ['error', 'never'],
		'camelcase': ['error', { 'properties': 'never' }],
		'no-multi-assign': ['error'],
		'quote-props': ['error', 'consistent'],
		'quotes': ['error', 'single'],
		'no-const-assign': ['error'],
		'jsx-quotes': ['error', 'prefer-double'],
		'vars-on-top': ['off'],

		// statements
		'no-lonely-if': ['error'],
		'no-unneeded-ternary': ['error'],
		'nonblock-statement-body-position': ['error', 'beside'],
		'operator-linebreak': ['error', 'before'],
		'no-else-return': ['off'],

		// react
		'react/sort-prop-types': ['error'],
		'react/display-name': ['off'],
		'react/no-did-mount-set-state': ['error'],
		'react/no-did-update-set-state': ['error'],
		'react/no-multi-comp': ['error', { 'ignoreStateless': true }],
		'react/no-unknown-property': ['error'],
		'react/prop-types': ['off'],
		'react/react-in-jsx-scope': ['error'],
		'react/self-closing-comp': ['error'],
		'react/sort-comp': ['error'],
		'react/prefer-stateless-function': ['error', { 'ignorePureComponents': true }],
		'react/no-array-index-key': ['error']

    }
};