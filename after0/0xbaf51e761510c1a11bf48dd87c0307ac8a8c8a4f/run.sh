#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./ETH_VAULTtest.js --network develop > result.txt
