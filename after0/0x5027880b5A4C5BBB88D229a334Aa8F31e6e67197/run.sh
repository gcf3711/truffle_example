#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./HDLContracttest.js --network develop > result.txt
