#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./PrivateBanktest.js --network develop > result.txt
