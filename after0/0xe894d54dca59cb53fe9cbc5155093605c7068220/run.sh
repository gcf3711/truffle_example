#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./airDroptest.js --network develop > result.txt
