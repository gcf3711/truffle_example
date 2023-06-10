#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./TownCriertest.js --network develop > result.txt
