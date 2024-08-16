#!/bin/bash
set -e

# APP NAME
APP_NAME="eduardosilvapereira.com"

echo "Preparing the server..."

# Install yarn
npm install -g yarn --yes

# Install pm2
npm i -g pm2 --yes

echo "Preparing finished"

################################

echo "Deployment started ..."

# Pull the latest version of the app
git reset --hard
git pull origin master

# Install dependencies
yarn install --production

# Compile dependencies
yarn build

# Verify if the app is already running
if pm2 list | grep -q $APP_NAME; then
    echo "Restarting $APP_NAME..."
    pm2 restart $APP_NAME
else
    echo "Starting $APP_NAME..."
    pm2 start app.js --name $APP_NAME
fi

# save state of pm2
pm2 save

# show status of application
pm2 status $APP_NAME

echo "Deployment finished!"