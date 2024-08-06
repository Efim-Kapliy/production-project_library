import { addDecorator } from '@storybook/react';
import { RouterDecorator, StyleDecorator, ThemeDecorator, i18nDecorator } from '../../src/shared/config/story';
import { Theme } from '../../src/app/providers/ThemeProvider';
import i18n from '../../src/shared/config/i18n/i18nForStory';

// When changing the language, sets the direction of text display in the document
i18n.on('languageChanged', (locale) => {
  const direction = i18n.dir(locale);
  document.dir = direction;
});

// Adds a menu to the Storybook toolbar to change your language
export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'ru', title: 'Russian' },
        { value: 'en', title: 'English' },
        { value: 'ar', title: 'عربي' },
      ],
      showName: true,
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
addDecorator(i18nDecorator);
