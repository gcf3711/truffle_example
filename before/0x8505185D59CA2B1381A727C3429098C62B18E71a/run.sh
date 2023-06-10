#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./NGTokentest.js --network develop > result.txt
