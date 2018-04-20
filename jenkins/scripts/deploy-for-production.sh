#!/usr/bin/env sh
set -x
npm install -g aws-sdk
set +x

set -x
aws configure
set +x

set -x
echo $PATH
set +x

