# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Dependencies

You will require NodeJS to run this project. Follow the next commands in order to install it in a unix based OS (Linux/MacOS)

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash

nvm install node

node --version
```
The last command should return the NodeJS version install in your OS. To read more about NVM (Node Version Manager) please click [here](https://github.com/nvm-sh/nvm)

## Create the report

From a termial run the following commands to start the server that will host the React application

```
cd TO_PROJECT_DIRECTORY
yarn install
yarn start
```

Open a second terminal and run the following commands
```
cd TO_PROJECT_DIRECTORY
node index.js
```

Now you will have a file called `report.pdf` on your project's root folder.
