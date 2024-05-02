const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Import HtmlWebpackPlugin

module.exports = {
  mode: 'production',
  entry: './js/dashboard_main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Specify the path to your HTML template
      inject: false, // Optional: Specify if the script tags should be injected into the HTML file
    }),
    new MiniCssExtractPlugin({
      filename: './css/main.css',
    }),
  ],
};
