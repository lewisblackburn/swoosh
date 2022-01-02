module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['plugin:react/recommended', 'xo', 'xo-typescript', 'xo-react'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
		project: 'tsconfig.json',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'@typescript-eslint/comma-dangle': 'off',
		'@typescript-eslint/triple-slash-reference': 'off',
		'react/function-component-definition': 'off',
		'react/jsx-tag-spacing': 'off',
		"react/no-array-index-key": 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',
		"@typescript-eslint/no-confusing-void-expression": 'off'
	},
	ignorePatterns: ['**/*.js'],
};
