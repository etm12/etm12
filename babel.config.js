module.exports = {
  sourceType: "module",
  ignore: [
    /.*__tests__.*/i
  ],
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
