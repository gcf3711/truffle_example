#!/bin/bash

truffle migrate --network develop > result_deploy.txt 2>&1
truffle exec ./GZSTokentest.js --network develop > result.txt
