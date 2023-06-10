#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./FreeEthtest.js --network develop > result.txt
