module.exports = {
   root: true,
   env: { browser: true, es2020: true, node: true },
   parser: '@typescript-eslint/parser',
   extends: [
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:@typescript-eslint/stylistic-type-checked',
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'prettier',
   ],
   ignorePatterns: ['dist', '.eslintrc.cjs'],
   plugins: [
      'react-refresh',
      'react-hooks',
      'react',
      // 'i18next',
      '@typescript-eslint',
      'simple-import-sort',
      'unused-imports',
      'prettier',
   ],
   rules: {
      // Упорядочивание импортов
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      // Проверка на неиспользуемые импорты
      'unused-imports/no-unused-imports': 'error',
      // Предупреждение о неиспользуемых переменных
      'unused-imports/no-unused-vars': [
         'warn',
         {
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'after-used',
            argsIgnorePattern: '^_',
         },
      ],
      // Проверка, что JSX используется только в файлах с указанными расширениями
      'react/jsx-filename-extension': [
         2,
         {
            extensions: ['.js', '.jsx', '.tsx'],
         },
      ],
      // Предупреждение при распространении пропсов
      'react/jsx-props-no-spreading': 'warn',
      // Проверка на максимальную длину строки (125 символов), игнорируя комментарии
      'max-len': [
         'error',
         {
            ignoreComments: true,
            code: 125,
         },
      ],
      // Проверка на правильность использования хуков React
      'react-hooks/rules-of-hooks': 'error',
      // Проверка на наличие зависимостей в эффектах React
      'react-hooks/exhaustive-deps': 'error',
      // Проверка форматирования кода с использованием Prettier
      'prettier/prettier': 'error',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
   },
   settings: {
      react: {
         version: 'detect', // Automatically detect the version of React to use
      },
   },
   parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: ['./tsconfig.json', './tsconfig.node.json'],
      tsconfigRootDir: __dirname,
   },
};
