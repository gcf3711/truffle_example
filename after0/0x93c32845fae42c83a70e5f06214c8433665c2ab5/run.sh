#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./X_WALLETtest.js --network develop > result.txt
