#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./Goutextest.js --network develop > result.txt
