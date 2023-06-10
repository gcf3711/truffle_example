#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./W_WALLETtest.js --network develop > result.txt
