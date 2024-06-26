# Production-project library

## Взаимодействие с проектом

### Версионирование Node.js

При работе над проектом используется версия Node.js 17.4.0.
Для установки версий `node` и управления ими рекомендуем использовать [`nvm`](https://github.com/nvm-sh/nvm), а не `npm`

Чтобы установить определенную версию `node` с помощью `nvm`, просто выполните:

```sh
nvm install node # "node" — это alias для последней версии
```

Для установки определенной версии `node`:

```sh
nvm install 17.4.0 # либо иную
```

Для переключения между версиями `node`:

```sh
nvm use 17.4.0 # либо иную
```

---

### Сборка/запуск проекта

Версия для запуска webpack-dev-server:

```sh
npm run start
```

Версия для разработки:

```sh
npm run build:dev
```

Версия для производства:

```sh
npm run build:prod
```

## Требования к именам коммитов

- Названия коммитов должны быть согласно [гайдлайну](https://www.conventionalcommits.org/en/v1.0.0/)
- Должен использоваться present tense ("add feature" not "added feature")
- Должен использоваться imperative mood ("move cursor to..." not "moves cursor to...")

---

#### Примеры имен коммитов

##### init: - используется для начала проекта/таска. Примеры:

- init: start youtube-task
- init: start mentor-dashboard task

---

##### feat: - это реализованная новая функциональность из технического задания (добавил поддержку зуммирования, добавил footer, добавил карточку продукта). Примеры:

- feat: add basic page layout
- feat: implement search box
- feat: implement request to youtube API
- feat: implement swipe for horizontal list
- feat: add additional navigation button
- feat: add banner
- feat: add social links
- feat: add physical security section
- feat: add real social icons

---

##### fix: - исправил ошибку в ранее реализованной функциональности. Примеры:

- fix: implement correct loading data from youtube
- fix: change layout for video items to fix bugs
- fix: relayout header for firefox
- fix: adjust social links for mobile

---

##### refactor: - новой функциональности не добавлял / поведения не менял. Файлы в другие места положил, удалил, добавил. Изменил форматирование кода (white-space, formatting, missing semi-colons, etc). Улучшил алгоритм, без изменения функциональности. Примеры:

- refactor: change structure of the project
- refactor: rename vars for better readability
- refactor: apply eslint
- refactor: apply prettier

---

##### docs: - используется при работе с документацией/readme проекта. Примеры:

- docs: update readme with additional information
- docs: update description of run() method
