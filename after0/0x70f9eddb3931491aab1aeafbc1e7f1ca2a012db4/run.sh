#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./HomeyJartest.js --network develop > result.txt
