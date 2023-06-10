#!/bin/bash

truffle migrate --network develop > result_deploy.txt 2>&1
truffle exec ./WhaleGiveaway1test.js --network develop > result.txt
