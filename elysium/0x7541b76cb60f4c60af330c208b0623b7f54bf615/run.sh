#!/bin/bash

truffle migrate --network develop > result_deploy.txt 2>&1
truffle exec ./U_BANKtest.js --network develop > result.txt
