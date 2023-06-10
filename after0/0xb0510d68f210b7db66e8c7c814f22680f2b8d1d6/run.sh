#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./Splittertest.js --network develop > result.txt
