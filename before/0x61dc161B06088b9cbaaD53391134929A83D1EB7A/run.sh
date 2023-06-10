#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./MAVCashtest.js --network develop > result.txt
