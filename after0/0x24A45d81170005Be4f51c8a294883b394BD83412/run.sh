#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./FIBTokentest.js --network develop > result.txt
