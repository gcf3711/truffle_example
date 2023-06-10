#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./Betcashtest.js --network develop > result.txt
