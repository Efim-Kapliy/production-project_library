import { RuleSetRule } from 'webpack';

export function buildLoaders(): RuleSetRule[] {
  // Если не используем TypeScript, тогда нужен babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: ['style-loader', 'css-loader', 'sass-loader'],
  };

  return [typescriptLoader, scssLoader];
}
