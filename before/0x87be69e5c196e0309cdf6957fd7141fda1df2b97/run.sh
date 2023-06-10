#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./SaleExtendedBCOtest.js --network develop > result.txt
