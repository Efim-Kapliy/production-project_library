import { lazy } from 'react';

export const AboutPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-ignore
      //Для тестов Suspense
      setTimeout(() => resolve(import('./AboutPage')), 1500);
    })
);
