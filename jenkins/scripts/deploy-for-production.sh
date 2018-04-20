#!/usr/bin/env sh

echo 'The following "npm" command builds your Node.js/React application for'
echo 'production in the local "build" directory (i.e. within the appropriate'
echo 'subdirectory of "/var/jenkins_home/workspace/"), correctly bundles React'
echo 'in production mode and optimizes the build for the best performance.'
set -x
npm install aws-sdk
set +x

set -x
aws configure
set +x

set -x
npm run build && aws s3 sync build/ s3://aviato-team
set +x

