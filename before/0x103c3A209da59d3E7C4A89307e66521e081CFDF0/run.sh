#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./GVTokentest.js --network develop > result.txt
