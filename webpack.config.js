const path = require('path');

module.exports = {
  entry: {
    'account/accountFormLogic': {
      import: './src/account/accountFormLogic.ts',
      library: {
        name: ['Pub', 'AccountFormLogic'],
        type: 'window',
        export: ['Pub', 'AccountFormLogic'],
      },
    },
    'opportunity/opportunityFormLogic': {
      import: './src/opportunity/opportunityFormLogic.ts',
      library: {
        name: ['Pub', 'OpportunityFormLogic'],
        type: 'window',
        export: ['Pub', 'OpportunityFormLogic'],
      },
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
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
