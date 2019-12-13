# StarwarDiaries

The repository for StarwarDiaries.

**Project Name**: `StarwarDiaries`

[![license](https://img.shields.io/badge/LICENSE-MIT-brightgreen)](https://opensource.org/licenses/mit-license.html)
[![react-native](https://img.shields.io/badge/react--native-61.0.4-brightgreen)](https://facebook.github.io/react-native/docs/0.59/getting-started)
[![codebeat badge](https://codebeat.co/badges/9797c001-b8c3-4ce3-965d-257f4b77ab62)](https://codebeat.co/a/developer-0209bfcf-9e1a-4b86-a052-d18287f88f7c/projects/github-com-simformsolutions-react-native-boilerplate-latest-master)
[![code-style](https://img.shields.io/badge/code--style-eslint%3Arecommended-brightgreen)](https://eslint.org/docs/rules/)
[![code-style](https://img.shields.io/badge/code--style-react%2Frecommended-brightgreen)](https://github.com/yannickcr/eslint-plugin-react#recommended)

---

##  Project Desctiption
A react-native application to show list of Starwar movies.

## Prerequisites

expo cli

**Editors** : Visual Studio Code/snack.expo.io

## Main technologies used

- [React Native](https://github.com/facebook/react-native)
A framework for building native apps with React.

- [Redux](http://redux.js.org/)
A state management library used to manage data used by application.

- [Redux Saga](https://redux-saga.js.org/)
Redux-saga is a redux middleware library, which enables us to use redux asynchronously.

- [Api Sause](https://github.com/infinitered/apisauce)
It is a library which is use for make a Api call.

## How to Setup Project

_Steps to setup the project_

**Step 1:** Clone this repository.

**Step 2:** Go to the cloned repo and open in in termianl.

**Step 3:** Install the Application with `$ npm i`

**Step 4:** Run the npm script to install the cocoapods `$ npm podinstall`

**Step 5:** Run Jetify for Third Party library convert in AndroidX `npx jetify`(This needs to be done only for first time after checking out the repo. And for all projects having react-native 0.60 onwards)

## How to Run the Project

_Steps to run the project in ios and andorid_

1. cd to the project directory
2. Run and build for either OS
    * Run iOSm app
        ```bash 
        npm run ios
        ```
    * Run Android app
      * Start Genymotion or Native emulator
      ```bash 
      npm run android
      ```
    * Note: This npm scripts will lint your code first. If there are no lint errors, then it will run the ios or android app. Otherwise it will show the lint errors in the terminal.

## Coding Style used

_Description of the coding style used in the project._

This project adheres to JavaScript Standard for codinng style. To maintain coding standards, utilising features of ES6 and follow best development practices of react-native, this project also uses [ES6](http://es6-features.org/#Constants), some rules of [eslint-airbnb](https://github.com/airbnb/javascript), [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) and [eslint-plugin-react-native](https://github.com/intellicode/eslint-plugin-react-native).

**Do not disable lint inside the code. Try to understand the rule and then follow it into your code. Disabling lint will be considered a violation of coding standards. Exceptions will be allowed by the code-reviewer and team lead after understanding the need to ignore lint.**

1. **To Lint**
  
   Use the npm script `lint`. To run it
  ```bash 
    npm run lint
  ```
2. **Auto Lint on Commit**
   
   This is implemented using [husky](https://github.com/typicode/husky). So husky will prevent code-cmmits having lint errors. There is no additional setup needed.

3. **Understanding Linting Errors**

   The linting rules are from JS Standard and React-Standard.  [Regular JS errors can be found with descriptions here](http://eslint.org/docs/rules/), while [React errors and descriptions can be found here](https://github.com/yannickcr/eslint-plugin-react).

## Extra steps for android

_Describe any extra steps which need to be taken fo the auto-generated android project. Eg. Some specific setup of any manifest file, some manual linking which is buggy and needs to be corrected for first checkout etc. Here is an example:_

- Mind the version of google services used in the project. All google services must have same version. This is implemented using project level build.gradle.

## Extra steps for ios

_Describe any extra steps which need to be taken for the auto-generated ios project. Eg. Some specific setup of any certificates, pods, linking, information in Info.plist, some manual linking which is buggy and needs to be corrected for first checkout etc. Here is an example:_

- You will need all the certificates to run the ios project in a real device.

## List of all dependencies used in the project with their usage

_List all dependencies from the package.json file along with their usage. This list must be updated every time you change/add any dependecy. Here are some examples:_

  1. [**@react-native-community/audio-toolkit**](https://github.com/react-native-community/react-native-audio-toolkit) to play and record audio files.
  1. [**react-native-circle-list**](https://github.com/mjinkens1/react-native-circle-list) to display friend list on the bottom of Home Screen.

## Following accounts are used for the mentioned platform

_Mention all the accounts used for various development and deployement platforms. Just email/username should be mentioned but never a password. Make sure this information stays in a private repository. If your repository is public, do not share this kind of private information via readme. Provide another private source. Like a private file on our zoho or a file in Microsoft Teams._

**Codebeat**: abc@abc.com

**Bitrise**: abc@abc.com

**Google Play**: abc@abc.com

**Apple Store and developer account**: abc@abc.com

**Fabric**: abc@abc.com

**Firebase/Google service**: abc@abc.com

## Troubleshoot Notes

_Provide troubleshoot guideline for any known issues. For example, a specific error for build proccess or deployement process or even an error in any third party dependency._

_For example_
- Application crashes in production because of react-native-maps. Follow this [link](https://github.com/react-native-community/react-native-maps/issues/2997) to fix it.

_If there no known issues:_
- There are no known issues for run or build processes right now.

## Notes

_Here any information which is important but not mentioned above and must be passed among all developers, should be mentioned. Like which branch is used for build releases, library deprecations etc._

_For example_

- Release builds are distributed from develop-release branch and all pull requests are done to develop branch.

