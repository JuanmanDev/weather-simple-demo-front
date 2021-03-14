module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'adidas-env/browser',
    'adidas-env/module',
    'adidas-es6',
    'adidas-babel',
    'adidas-react',
    'adidas-typescript',
    'plugin:css-modules/recommended'
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    tsconfigRootDir: __dirname,

    // project: [ './tsconfig.eslint.json' ], // could be tsconfig.json too
    ecmaFeatures: {
      jsx: true
    },
    createDefaultProgram: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: [ 'css-modules' ],
  rules: {
    '@typescript-eslint/comma-dangle': [ 'error' ]
  }
};
