#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./CGCTokentest.js --network develop > result.txt
