# Vaporware Places - Web
> Vaporware front-end engineer interview app

## Introduction

Places is a recommendations app that will allow you and your friends to share
recommendations with each other so when you're traveling to a different city,
you'll have `Places` to go! 

## Folder Structure

We're using the [Ducks Pattern](https://github.com/erikras/ducks-modular-redux)
for our Redux logic. 

```
places
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.js
    App.test.js
    index.js
    index.css
    registerServiceWorker.js
    components/
      ...components
    containers/
      ...connected components
    redux/
      store.js
      modules/
        index.js
        ...duck modules
```

## Getting Started

### Installation

`yarn install`

### Running Dev Server

`yarn start`
