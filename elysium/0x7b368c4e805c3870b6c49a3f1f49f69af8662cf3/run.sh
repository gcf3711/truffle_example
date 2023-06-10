#!/bin/bash

truffle migrate --network develop > result_deploy.txt 2>&1
truffle exec ./W_WALLETtest.js --network develop > result.txt
