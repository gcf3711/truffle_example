#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./WMCTokentest.js --network develop > result.txt
