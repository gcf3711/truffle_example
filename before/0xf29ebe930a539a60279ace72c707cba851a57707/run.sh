#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./Btest.js --network develop > result.txt
