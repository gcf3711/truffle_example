#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./BlocklancerTokentest.js --network develop > result.txt
