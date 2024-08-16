#!/bin/bash
set -e

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

# Restart application
pm2 restart npm --name "eduardosilvapereira.com" -- start

# Configure pm2 to start on boot
pm2 startup

# Save pm2 configuration
pm2 save

echo "Deployment finished!"