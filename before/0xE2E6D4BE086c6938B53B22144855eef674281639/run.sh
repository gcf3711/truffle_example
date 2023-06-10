#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./LinkTokentest.js --network develop > result.txt
