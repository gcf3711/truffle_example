#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./PENNY_BY_PENNYtest.js --network develop > result.txt
