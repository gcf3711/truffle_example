#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./Krowntest.js --network develop > result.txt
