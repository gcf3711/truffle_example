#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./SunContractTokentest.js --network develop > result.txt
