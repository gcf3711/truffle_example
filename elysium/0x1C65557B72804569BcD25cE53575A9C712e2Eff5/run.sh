#!/bin/bash

truffle migrate --network develop > result_deploy.txt 2>&1
truffle exec ./Play2LivePromotest.js --network develop > result.txt
