# i18n Demo

A sample app to demonstrate i18n & l10n concepts using some popular libraries.

> Note: only English and German translations are currently working. For some
> reason, Arabic, Spanish, Hindi & Italian translations are not working.

#### Screenshot - English

![Screenshot - English](assets/screenshot-en.png)

#### Screenshot - German

![Screenshot - German](assets/screenshot-de.png)

#### Screenshot - Arabic

![Screenshot - Arabic](assets/screenshot-ar.png)

## Prerequisites for development

1. [Node Version Manager](https://github.com/nvm-sh/nvm) (nvm) - allows using
   different versions of node via the command line

## Getting Started

```shell
nvm use        # use the required version of node
npm ci         # install dependencies
npm run dev    # run apps and storybook
```

Open browser windows at the following URLs to see the respective apps:

1. http://localhost:3000/: driverless using i18next

## Production build

To build all packages and apps for production, run the following command:

```shell
npm ci
npm run build
```

## Clean build

Removes all build artifacts and performs a clean build.

```shell
npm run clean
npm ci
npm run dev
```
