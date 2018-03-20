# white-label-event-app
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-plastic)](./CONTRIBUTORS.md)
[![Build Status](https://travis-ci.org/inthepocket/white-label-event-app.svg?branch=develop)](https://travis-ci.org/inthepocket/white-label-event-app) [![Discord](https://img.shields.io/discord/102860784329052160.svg?style=plastic)](https://discord.gg/GAACrwh)

The white label event app is an open source React Native app by [In The Pocket](https://inthepocket.mobi).

## Run the app

You can run the latest build on the master branch via [Expo](https://expo.io/@itpocket/white-label-event-app).

![white-label-event-app on Expo](https://i.imgur.com/7YYDT20.png)

## How to contribute

We have a backlog of features documented in the [Projects](https://github.com/inthepocket/white-label-event-app/projects/) tab of this repository, if you want to contribute, you can drag an issue into the progress column.

We use [*Git Flow*](https://guides.github.com/introduction/flow/). Feature branches are branched from Develop, please use following naming convention for new branches:
`feature/[issueNmbr]-[issue_title_snake_cased]` i.e. `feature/123-write_great_code`.

When you completed an issue, you can open a pull request to develop.

## Get Started

 * Clone this repository: `git clone https://github.com/inthepocket/white-label-event-app.git`
 * cd into folder: `cd white-label-event-app`
 * Install dependencies `npm install`
 * Run project `npm start`


## Setup & Hook a firebase database

 * [go to https://console.firebase.google.com](https://console.firebase.google.com)
 * Add a Project (for web) (f.e.: white-label-event-app)
 * Change Database read/write rules --DEV MODE ONLY--

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

 * Click on `add firebase for your webapp` to find out the properties: apiKey, authDomain, databaseURL, projectId.
 * And add `/utils/firebaseConfig.json` with your own firebase config.
 ```json
 {
   "apiKey": "<YOUR-API-KEY>",
   "authDomain": "<YOUR-AUTH-DOMAIN>",
   "databaseURL": "https://<YOUR-DATABASE-URL>.firebaseio.com",
   "storageBucket": "<YOUR-STORAGE-BUCKET>",
   "projectId": "<PROJECT-ID>",
   "messagingSenderId": "<MESSAGING-SENDER-ID>"
 }
 ```

### Tooling

* [Flow](https://flowtype.org) for type checking & type safety
  - `npm run flow`
* For consistent formatting across collaborators we use [Prettier](https://prettier.io).
  - `npm run format` will output formatting errors
  - `npm run format:fix` will auto-fix every formatting issue
  - You can install it in [VS Code ](https://github.com/prettier/prettier-vscode) or [Atom](https://atom.io/packages/prettier-atom)
* There are git hooks in place which, on every commit, will check changed files and:
  1. Format them with prettier
  2. Format & fix them with eslint, stop the commit if there are non-auto-fixable errors
  3. Auto-add any changes to the commit
