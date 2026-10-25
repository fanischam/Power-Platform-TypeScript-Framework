const path = require('path');

module.exports = {
  entry: {
    'account/accountFormLogic': './src/account/accountFormLogic.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
    library: {
      name: 'Pub',
      type: 'window',
      export: 'Pub',
    },
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'ts',
          target: 'es2015',
        },
        exclude: /node_modules/,
      },
    ],
  },
};
