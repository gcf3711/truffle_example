#!/bin/bash

truffle migrate --network develop > result_deploy.txt 2>&1 > result_deploy.txt 2>&1
truffle exec ./SiringClockAuctiontest.js --network develop > result.txt
