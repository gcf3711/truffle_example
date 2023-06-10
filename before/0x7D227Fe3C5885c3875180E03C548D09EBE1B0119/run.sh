#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./EncryptedTokentest.js --network develop > result.txt
