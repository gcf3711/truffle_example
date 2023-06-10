#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./Crowdsaletest.js --network develop > result.txt
