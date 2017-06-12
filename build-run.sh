#!/usr/bin/env bash
if [ $# -eq 0 ]
  then
    echo "ERROR: Docker version for GUI is required as argument. E.q. 1.0.0"
    exit 1;
fi
npm run clean
cp -r src/* dist
cp -r node_modules dist
docker build -t lenny/gui:${1} .
docker stop gui
docker rm gui
docker run -d --name gui --net=hackathon -p 3000:80 lenny/gui:${1}