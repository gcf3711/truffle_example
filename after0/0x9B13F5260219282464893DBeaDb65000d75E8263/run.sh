#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./GFCBtest.js --network develop > result.txt
