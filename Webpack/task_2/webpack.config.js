const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
  mode: 'production', // Set webpack mode to production
  entry: './src/index.js', // Entry point of your application
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      // Configuration for processing CSS files
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      // Configuration for processing images
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    // HTML Webpack Plugin for generating HTML file
    new HtmlWebpackPlugin({
      template: './src/index.html', // Path to your HTML template
    }),
    // Mini CSS Extract Plugin for extracting CSS into separate files
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    // Image Minimizer Plugin for optimizing images
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          ['imagemin-mozjpeg', { quality: 50 }],
          ['imagemin-pngquant', { quality: [0.5, 0.7] }],
        ],
      },
      deleteOriginalAssets: false, // Keep the original images after optimization
    }),
  ],
};
