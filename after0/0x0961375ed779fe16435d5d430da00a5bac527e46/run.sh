#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./Presaletest.js --network develop > result.txt
