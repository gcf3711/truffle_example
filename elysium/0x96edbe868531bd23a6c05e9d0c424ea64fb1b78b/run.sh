#!/bin/bash

truffle migrate --network develop > result_deploy.txt 2>&1
truffle exec ./PENNY_BY_PENNYtest.js --network develop > result.txt
