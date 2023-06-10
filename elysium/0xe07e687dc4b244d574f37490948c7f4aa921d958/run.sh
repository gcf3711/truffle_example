#!/bin/bash

truffle migrate --network develop > result_deploy.txt 2>&1 > result_deploy.txt 2>&1
truffle exec ./ApplauseCashCrowdsaletest.js --network develop > result.txt
