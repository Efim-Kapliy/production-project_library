import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import { BuildOptions } from './types/config';

export function buildPlugins({ paths }: BuildOptions): webpack.WebpackPluginInstance[] {
  return [new webpack.ProgressPlugin(), new HtmlWebpackPlugin({ template: paths.html })];
}
