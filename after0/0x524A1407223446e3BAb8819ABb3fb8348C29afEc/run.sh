#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./sumocointest.js --network develop > result.txt
