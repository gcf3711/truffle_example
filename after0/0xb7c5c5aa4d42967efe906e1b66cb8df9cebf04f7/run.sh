#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./keepMyEthertest.js --network develop > result.txt
