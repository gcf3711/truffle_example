#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./Jitechtest.js --network develop > result.txt
