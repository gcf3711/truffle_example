#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./MalaysianCointest.js --network develop > result.txt
