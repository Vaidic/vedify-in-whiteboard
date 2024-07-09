module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  plugins: ['unused-imports', 'eslint-comments'],
  rules: {
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    // If you need to report unused disable directives:
    'eslint-comments/no-unused-disable': 'error',
  },
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
    },
  ],
};
