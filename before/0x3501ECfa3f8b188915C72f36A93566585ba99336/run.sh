#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./CTest7test.js --network develop > result.txt
