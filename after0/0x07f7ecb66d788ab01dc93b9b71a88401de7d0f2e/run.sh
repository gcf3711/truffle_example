#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./PoCGametest.js --network develop > result.txt
