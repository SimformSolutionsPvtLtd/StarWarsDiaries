# StarwarDiaries

The repository for StarwarDiaries.

**Project Name**: `StarwarDiaries`

[![license](https://img.shields.io/badge/LICENSE-MIT-brightgreen)](https://opensource.org/licenses/mit-license.html)
[![react-native](https://img.shields.io/badge/react--native-61.0.4-brightgreen)](https://facebook.github.io/react-native/docs/0.59/getting-started)
[![code-style](https://img.shields.io/badge/code--style-eslint%3Arecommended-brightgreen)](https://eslint.org/docs/rules/)
[![code-style](https://img.shields.io/badge/code--style-react%2Frecommended-brightgreen)](https://github.com/yannickcr/eslint-plugin-react#recommended)

---

##  Project Desctiption
A react-native application to show list of vehicles used in Starwars.

## Prerequisites

expo cli

**Editors** : Visual Studio Code/snack.expo.io

## How to Setup Project

**Step 1:** Clone this repository.

**Step 2:** Go to the cloned repo and open it in termianl.

**Step 3:** Install the application dependencies with `$ yarn`

**Step 4:** Run the npm script to install the cocoapods `$ yarn run podinstall`

## How to Run the Project

_Steps to run the project in ios and andorid_

1. Running the app over snack.expo.io
  * Press the 'Run' over the snack.expo.io and play the app in ios or android. Follow the steps over there to run the app in your mobile device.

2. Run and build for either OS using expo cli and Mac OS
    * Go to the project directory inside the terminal.
    * Run npm script ```$ yarn run ios ``` to run in iOS.
    * Run npm script ```$ yarn run android ``` to run in android.

## Coding Style used

This project adheres to JavaScript Standard for codinng style. To maintain coding standards, utilising features of ES6 and follow best development practices of react-native, this project also uses [ES6](http://es6-features.org/#Constants), some rules of [eslint-airbnb](https://github.com/airbnb/javascript), [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) and [eslint-plugin-react-native](https://github.com/intellicode/eslint-plugin-react-native).

1. **To Lint**
  
   Use the npm script `lint`. To run it
  ```bash 
    yarn run lint
  ```
2. **Auto Lint on Commit**
   
   This is implemented using [husky](https://github.com/typicode/husky). So husky will prevent code-cmmits having lint errors. There is no additional setup needed.

3. **Understanding Linting Errors**

   The linting rules are from JS Standard and React-Standard.  [Regular JS errors can be found with descriptions here](http://eslint.org/docs/rules/), while [React errors and descriptions can be found here](https://github.com/yannickcr/eslint-plugin-react).


## List of all dependencies used in the project with their usage

- **Framework:**
  - [React Native](https://github.com/facebook/react-native)

- **State management libraries:** 
  - [Redux](http://redux.js.org/), [React Redux](https://react-redux.js.org/), [Redux Persist](https://github.com/rt2zz/redux-persist), [Seamless-Immutable](https://github.com/rtfeldman/seamless-immutable), [Redux Sauce](https://github.com/jkeam/reduxsauce),

- **API & Middleware libraries:**
  - [API Sauce](https://github.com/infinitered/apisauce), [Redux Saga](https://redux-saga.js.org/)
  
- **Libraries used for UI:**
  - [native-base](https://nativebase.io/)
  
