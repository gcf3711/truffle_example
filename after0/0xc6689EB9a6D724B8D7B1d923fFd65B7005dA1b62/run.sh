#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./SECtest.js --network develop > result.txt
