#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./ReimburseTokentest.js --network develop > result.txt
