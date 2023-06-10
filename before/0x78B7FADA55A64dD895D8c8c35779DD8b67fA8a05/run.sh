#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./ATLtest.js --network develop > result.txt
