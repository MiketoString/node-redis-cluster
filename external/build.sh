#!/bin/bash

pushd hashlib
node-waf configure build
cp ./build/default/hashlib.node ./
popd


