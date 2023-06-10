#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./YoloTokentest.js --network develop > result.txt
