#!/bin/bash

cd  /e/workspace/learn/docs
git pull 
git add . && git commit -m "$(date "+%Y-%m-%d %H:%M:%S")"
git push origin HEAD:main

cd ../
git pull 
git add . && git commit -m "$(date "+%Y-%m-%d %H:%M:%S")"
git push origin