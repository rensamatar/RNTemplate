# React-native template project

Simple react-native project structure for make the developer can start project quickly.

## Install

You need to install `yarn` or `npm` to your machine first.
You can add or remove everything that you want in `package.json`.
After successfully install `yarn` or `npm` go to your cloned project directory via console then

```bash
  npm install
```

or use `yarn` pacakage manager

```bash
  yarn install
```

To install all default dependencies then open `app.json` file to edit or remove the package name that you need for your project.

app.json

```js
{
  // key `name` will relate to package name or bundle id.
  // key `displayName` will show as app name.
  "name": "template",
  "displayName": "RNTemplate"
}
```

Then run react-native command below to generate the ios and android folders and native code

```bash
react-native eject
```

If you need to change the app name again you can run `react-native eject` again but you should delete ios and android folders before run command : remember all lib or config inside will be lost.

Finally, make sure every dependencies are linking to the project you should run

```
react-native link
```

To link all dependencies configuration.

For Android you should add permission to manifest file then the app can check network status.

```java
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

## Dependencies

Current project template using `React ^16.3.1` and `React-native ^0.55.4`

## Structure

```bash
├── ***
├── src
│   ├── actions
│   │   └── index.js
│   ├── assets
│   │     ├── *.png
│   │     └── *.jpg
│   ├── components
│   │     ├── *.js
│   │     └── index.js
│   ├── config
│   │     ├── constants.js
│   │     ├── routes.js
│   │     └── store.js
│   ├── locale
│   │     ├── *.js
│   │     └── index.js
│   ├── reducers
│   │     ├── auth.js
│   │     ├── theme.js
│   │     ├── config.js
│   │     └── index.js
│   ├── screens
│   │     ├── *.js
│   │     └── index.js
│   ├── styles
│   │     ├── *.js
│   │     └── index.js
│   ├── utils
│   │      └── index.js
│   └──  App.js
├── .babelrc
├── .eslintignore
├── .eslintrc.json
├── .gitattributes
├── .gitignore
├── .prettierrc
├── .travis.yml (if using Travis CLI)
├── app.json
├── index.js
├── README.md
└── package.json
```

## How to use

- You can config your endpoint in `/src/config/index.js`
- You can create own components in `components` folder
- You can add json translation file to `locale` folder and add it in `index.js` too.

You can run the prject with default command to start the application.

`react-native run-android` or `react-native run-ios`

Before push all the code to remote repo you should pass all the test, you can run the command to check by `npm test`
or check all available command script in `package.json`

## Contributing

This is pretty basic at the moment, but if you have new features, requests, or would like to contribute feel free to open a PR and ping me!
