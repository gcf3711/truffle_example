#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./ClassyCoinAirdroptest.js --network develop > result.txt
