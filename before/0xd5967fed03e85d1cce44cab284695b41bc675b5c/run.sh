#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./demotest.js --network develop > result.txt
