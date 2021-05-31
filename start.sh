#!/bin/sh

echo "Waiting for Docker to build image..."
docker build -t billups:1 .

echo "Starting the Application with Docker..."
docker run billups