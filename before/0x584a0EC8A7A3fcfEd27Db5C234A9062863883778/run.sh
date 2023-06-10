#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./GoodTimeCointest.js --network develop > result.txt
