#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./Deltatest.js --network develop > result.txt
