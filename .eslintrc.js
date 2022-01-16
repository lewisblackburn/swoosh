module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'plugin:react/recommended',
		'prettier',
		'xo',
		'xo-typescript',
		'xo-react',
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
		project: 'tsconfig.json',
	},
	plugins: ['react', 'prettier', '@typescript-eslint'],
	rules: {
		'no-console': 1, // Means warning
		'prettier/prettier': 1, // Means warning
		'new-cap': 'off',
		curly: 'off',
		// https://github.com/typescript-eslint/typescript-eslint/blob/v4.33.0/packages/eslint-plugin/docs/rules/indent.md
		indent: 'off',
		'@typescript-eslint/indent': ['error'],
		'@typescript-eslint/comma-dangle': 'off',
		'@typescript-eslint/triple-slash-reference': 'off',
		'react/function-component-definition': 'off',
		'react/jsx-tag-spacing': 'off',
		'react/no-array-index-key': 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',
		'@typescript-eslint/no-confusing-void-expression': 'off',
	},
	ignorePatterns: ['**/*.js'],
};
