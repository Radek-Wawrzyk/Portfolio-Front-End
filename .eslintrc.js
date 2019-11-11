module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-tabs': 0,
    'linebreak-style': 0,
    'function-paren-newline': 0,
    'import/no-cycle': 0,
		'no-unused-expressions': 0,
		'indent': 0,
		'no-confusing-arrow': ['error', { allowParens: true }],
    'no-param-reassign': 0,
    'max-len': ['error', {
			code: 128,
			ignoreComments: true,
			ignoreTrailingComments: true,
			ignoreUrls: true,
			ignoreTemplateLiterals: true,
			ignoreRegExpLiterals: true,
    }],
	},
}
