// eslint-disable-next-line import/no-extraneous-dependencies
import { RuleSetRule } from 'webpack';

import { BuildOptions } from './types/config';
import { buildScssLoader } from './loaders/buildScssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const svgLoader = buildSvgLoader();

  const babelLoader = {
    test: /\.(tsx?|js)$/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env', { targets: 'defaults' }]],
          plugins: [isDev && 'react-refresh/babel'].filter(Boolean),
        },
      },
    ],
    exclude: /node_modules/,
  };

  // Если не используем TypeScript, тогда нужен babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const scssLoader = buildScssLoader(isDev);

  return [fileLoader, svgLoader, babelLoader, typescriptLoader, scssLoader];
}
