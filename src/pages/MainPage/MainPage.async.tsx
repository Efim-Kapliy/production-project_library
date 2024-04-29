import { lazy } from 'react';

export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-ignore
      //Для тестов Suspense
      setTimeout(() => resolve(import('./MainPage')), 1500);
    })
);
