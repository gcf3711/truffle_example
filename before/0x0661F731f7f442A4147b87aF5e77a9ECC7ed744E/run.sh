#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./ETYtest.js --network develop > result.txt
