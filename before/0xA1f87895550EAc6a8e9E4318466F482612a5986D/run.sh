#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./GZSTokentest.js --network develop > result.txt
