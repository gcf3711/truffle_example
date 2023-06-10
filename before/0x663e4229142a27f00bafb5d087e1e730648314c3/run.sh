#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./PandaCoretest.js --network develop > result.txt
