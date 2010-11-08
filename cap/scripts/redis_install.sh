#!/bin/bash

VERSION='2.0.4'

HAS_VERSION=`redis-server --version | grep $VERSION | wc -l`
if [ "$HAS_VERSION" -eq "1" ]
then
	echo "Already has redis $VERSION installed... skipping"
	exit
fi

URL="http://redis.googlecode.com/files/redis-${VERSION}.tar.gz"
echo "Downloading redis $VERSION from $URL..."
pushd /tmp
curl -O $URL
tar -xzf ./redis-${VERSION}.tar.gz
mv redis-${VERSION} /usr/local/redis
rm -f redis-${VERSION}.tar.gz
popd

echo "Building redis $VERSION binaries..."
pushd /usr/local/redis
make
popd


echo "Symlinkling redis $VERSION binaries to /usr/local/bin/"
ln -s /usr/local/redis/redis-server /usr/local/bin/redis-server
ln -s /usr/local/redis/redis-cli /usr/local/bin/redis-cli
ln -s /usr/local/redis/redis-check-aof /usr/local/bin/redis-check-aof
ln -s /usr/local/redis/redis-check-dump /usr/local/bin/redis-check-dump

echo "DONE!  Redis $VERSION installed successfully..."
