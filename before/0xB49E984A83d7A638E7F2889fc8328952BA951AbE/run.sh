#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./MONtest.js --network develop > result.txt
