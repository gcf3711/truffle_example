#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./Marriagetest.js --network develop > result.txt
