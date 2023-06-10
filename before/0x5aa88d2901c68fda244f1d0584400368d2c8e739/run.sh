#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./MultiplicatorX3test.js --network develop > result.txt
