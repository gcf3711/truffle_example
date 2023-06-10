#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./LescoinPreSaletest.js --network develop > result.txt
