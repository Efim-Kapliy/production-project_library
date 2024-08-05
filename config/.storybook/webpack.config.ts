import { Configuration, RuleSetRule } from 'webpack';
import path from 'path';

import { buildScssLoader } from '../build/loaders/buildScssLoader';
import { BuildPaths } from '../build/types/config';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export default ({ config }: { config: Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    i18nFrom: '',
    i18nTo: '',
  };
  config.resolve!.modules!.push(paths.src);
  config.resolve!.extensions!.push('.ts', '.tsx');

  const rules = config.module!.rules as RuleSetRule[];
  const processedRules = rules.map((rule: RuleSetRule) => {
    if (/.svg/.test(rule.test as string)) {
      return {...rule, exclude: /.svg$/i}
    }

    return rule;
  })
  config.module!.rules = processedRules;

  config.module!.rules.push(buildSvgLoader());
  config.module?.rules?.push(buildScssLoader(true));

  return config;
};
