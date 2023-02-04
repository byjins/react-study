const path = require('path');

module.exports = {
  name: 'word-relay-setting',
  mode: 'development', // 실 서비스 : production
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  // 입력(중요)
  entry: {
    app: ['./client'],
  },

  // 들어온 입력을 module를 적용 한다.
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  },
  // 확장프로그램
  plugins: [],

  // 출력(중요)
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },
  devServer: {
    devMiddleware: { publicPath: '/dist/' },
    static: { directory: path.resolve(__dirname) },
    hot: true,
  },
};
