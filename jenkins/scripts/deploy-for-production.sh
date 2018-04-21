#!/usr/bin/env sh

echo 'Build the React App, and send it to an S3 bucket to deploy'
echo 'Also start a local server to see the deployed application'

set -x
npm run build && aws s3 sync build/ s3://aviato-team
set +x

set -x
npm install serve
./node_modules/serve/bin/serve.js -c 0 -s build &
sleep 1
echo $! > .pidfile
set +x
