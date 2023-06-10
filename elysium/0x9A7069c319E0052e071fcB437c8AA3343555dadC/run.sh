#!/bin/bash

truffle migrate --network develop > result_deploy.txt 2>&1
truffle exec ./AzurionTokentest.js --network develop > result.txt
