import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  {
    ignores: [
      'dist/**',
      'src/assets/**',
      'src/base64font.ts',
      'src/base64image.ts',
    ],
  },
  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  eslintPluginPrettierRecommended,
  {
    rules: {
      '@typescript-eslint/no-misused-promises': 'off',
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
  },
);
