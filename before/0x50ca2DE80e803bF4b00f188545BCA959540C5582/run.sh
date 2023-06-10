#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./SpadePreSaletest.js --network develop > result.txt
