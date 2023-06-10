#!/bin/bash

truffle migrate --network develop > result_deploy.txt 2>&1
truffle exec ./TokenERC20test.js --network develop > result.txt
