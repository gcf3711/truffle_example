#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./SimpleWallettest.js --network develop > result.txt
