#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./dgametest.js --network develop > result.txt
