#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./DrainMetest.js --network develop > result.txt
