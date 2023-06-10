#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./NexxusTokentest.js --network develop > result.txt
