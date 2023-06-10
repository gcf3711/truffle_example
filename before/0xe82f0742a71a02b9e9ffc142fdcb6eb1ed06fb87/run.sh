#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./Freebietest.js --network develop > result.txt
