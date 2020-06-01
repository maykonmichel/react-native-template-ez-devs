# [DEPRECATED]

# :ghost: React Native Template by ez.devs

React Native template to initialize new projects on ez.devs. \
Feel free to fork this repository and pull request changes helping us to improve :blush:

## :wave: Getting Started

These instructions will get you a base project structure and running on your local machine for development and testing purposes.

### :clipboard: Prerequisites

What things you need to install this template

- [Node.js and NPM](https://nodejs.org/en/)
- [Android SDK](https://developer.android.com/studio/?hl=pt-br)
- [React Native](https://www.npmjs.com/package/react-native-cli)
- [React Native Debugger](https://github.com/jhen0409/react-native-debugger) \(Optional)

### :arrow_down: Installing

To start with React Native Template by Ez Devs you need just initialize your project with: 

```
react-native init myAppName --template ez-devs
```

### :rocket: Quick start

To run your app on Android: 

```
react-native run-android
```

To run your app on iOS: 

```
react-native run-ios
```

### :heavy_plus_sign: Additional configuration

  - To configure api go to src/services/api.js file and edit the line 5 changing the url.
  - To add [Sentry.io](https://sentry.io) follow [this tutorial](https://docs.sentry.io/clients/react-native/)
  - To add [Firebase](https://firebase.google.com) SDK follow [this tutorial](https://rnfirebase.io/docs/v5.x.x/installation/initial-setup)

## :electric_plug: Plugins

### Dependencies

  - [axios](https://github.com/axios/axios) for connection with th API.
  - [Lodash](https://lodash.com/) for common functions.
  - [memoize-one](https://github.com/alexreardon/memoize-one) for caching functions prevent reprocessing.
  - [Moment.js](https://momentjs.com/) for date management.
  - [prop-types](https://github.com/facebook/prop-types) for runtime type checking.
  - [Vector Icons](https://github.com/oblador/react-native-vector-icons) for customizable icons.
  - [React Navigation](https://reactnavigation.org/) for navigation between screens.
  - [Redux](https://redux.js.org/) for state management.
  - [redux-actions](https://github.com/redux-utilities/redux-actions) for redux utilities.
  - [Redux Persist](https://github.com/rt2zz/redux-persist) for persistence layer of data.
  - [Redux-Saga](https://redux-saga.js.org/) for redux side effects.
    
### Dev Dependencies

  - [ESLint](https://eslint.org/) as [Airbnb](https://github.com/airbnb/javascript) rules for linting .
  - [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension) for redux logger into React Native Debugger.

## :nerd_face: Authors

* [**Maykon Michel Palma**](https://github.com/maykonmichel) - *Initial work*
* [**Vinícius Stefanutto Carra**](https://github.com/vinicarra)
