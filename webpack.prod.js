const path = require("path");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); 

module.exports = merge(common,{
    mode: "production",
    output: {
      filename: "[name].[contenthash].bundle.js",
      path: path.resolve(__dirname,"dist"),
      assetModuleFilename: 'assets/[hash][ext][query]',
      clean: true,
    },
    plugins:[new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
    })],
    module: {
      rules:[
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
     ],
    },
    optimization: {
      minimizer: [
        new CssMinimizerPlugin(),
      ],
    },
});