#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./CTBtest.js --network develop > result.txt
