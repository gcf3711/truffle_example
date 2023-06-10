#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./ETHEREUMBLACKtest.js --network develop > result.txt
