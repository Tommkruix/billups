#!/bin/sh

echo "Waiting for docker image to build with a tag version 1..."
docker build -t billups:1 .

echo "Starting the application..."
docker run billups