const path = require("path");

module.exports = {
  mode: "production",
  entry: './js/dashboard_main',
  performance: {
    maxAssetSize: 1000000,
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        // add css-loader ========
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        // add the file-loader =======
        test: /\.(gif|png|jpg|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            // add image-webpack-loader =====0
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
    ],
  },
};