#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./MONEY_BOXtest.js --network develop > result.txt
