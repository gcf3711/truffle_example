#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./Crowdnexttest.js --network develop > result.txt
