This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.


## Step 1: Install Dependencies

First, you will need to install the corresponding dependencies for this project, do this by running the below command.
```bash
npm install
```

## Step 2: Start the Metro Server

Then, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

# API

>**Note**: Make sure to read the documentation for the API and assure that is running correctly https://github.com/Team-DinamiteUTN/Proyecto_API.git
## Step 3: Connect to the API

Now that you have successfully run the app, let's modify the connection for the API.

1. Open `config.js` in your text editor of choice
2. Change the IP on PATHURL for your PC IP, this is in case that "localhost" or "127.0.0.1" is not working.

# WebSocketRepo

>**Note**: To know more about the usage and connection of the web socket visit the github repo in https://github.com/Team-DinamiteUTN/WebSocketUsage

## Step 4: Connect to the WebSocket

This game app will make use of a web socket that could be running on the cloud or in a local computer.

1. Open `app.tsx` in your text editor of choice
2. Change the IP on "export const ws = new WebSocket('ws://0.0.0.0:5001');" with the ip of the websocket running locally or the url on the cloud.
