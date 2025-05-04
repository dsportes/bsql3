import path from 'path'
export default {
  entry: './src/app.ts',
  target: 'node',
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve('../tmp/test'),
  }, 

  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  }
}
