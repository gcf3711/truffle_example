#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./Pietest.js --network develop > result.txt
