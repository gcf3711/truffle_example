#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./WALLETtest.js --network develop > result.txt
