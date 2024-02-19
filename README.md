<<<<<<< HEAD
# latmatt-fe
=======
# Mantine React Template

## Getting Started

First, run the development server:

```bash
    npm run dev
```

## Structure

```
App
└── src
    ├── assets
    │   ├── styles
    │   ├── images
    │   ├── locales   (i18n locales)
    │   └── other     (other resource files like fonts, video, audio or etc)
    ├── components
    │   ├── core      (core component dir)
    │   └── other
    ├── config
    │   ├── i18n      (react 18n next config)
    │   ├── router    (router config)
    │   └── other
    ├── hooks         (custom hooks)
    ├── layouts       (layout components)
    ├── pages
    │   ├── home
    │   ├── crud
    │   │   ├── list
    │   │   ├── form
    │   │   │   ├── create
    │   │   │   └── edit
    │   │   └── detail
    │   └── settings
    ├── services
    └── utils
```

## Testing

```
    npm test
```

Tests with UI

```
    npm test:ui
```

Code coverage

```
    npm test:cov
```

Use [Playwright](https://playwright.dev) for e2e tests. Install [vscode ext](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright).

```
    npm test:e2e
```
>>>>>>> master
