#!/usr/bin/env sh

echo 'Build the React App, and send it to an S3 bucket to deploy'
echo 'Also start a local server to see the deployed application'


set -x
apk add --no-cache python3 py3-pip gcc python3-dev py3-cffi    file git curl autoconf automake py3-cryptography linux-headers musl-dev libffi-dev openssl-dev build-base
pip3 install awscli
set +x


set -x
npm run build && /usr/bin/aws s3 sync build/ s3://aviato-team
pwd
echo ~
echo $HOME
echo /home/$USER
set +x

set -x
npm install serve
./node_modules/serve/bin/serve.js -c 0 -s build &
sleep 1
echo $! > .pidfile
set +x
