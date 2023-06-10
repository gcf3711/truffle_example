#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./ExtremeTokentest.js --network develop > result.txt
