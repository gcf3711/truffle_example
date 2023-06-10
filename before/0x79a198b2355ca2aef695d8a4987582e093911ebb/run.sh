#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./SiringClockAuctiontest.js --network develop > result.txt
