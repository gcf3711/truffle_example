#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./EasyMineIcotest.js --network develop > result.txt
