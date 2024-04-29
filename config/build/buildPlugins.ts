import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
  return [new webpack.ProgressPlugin(), new HtmlWebpackPlugin({ template: paths.html })].concat(
    isDev
      ? []
      : [
          new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: '[id].css',
            ignoreOrder: false,
          }),
        ]
  );
}
