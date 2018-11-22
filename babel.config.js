module.exports = {
  sourceType: "module",
  babelrcRoots: [
    '.',
    'packages/*',
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: false,
        targets: {
          node: true,
        },
      },
    ],
  ],
};
