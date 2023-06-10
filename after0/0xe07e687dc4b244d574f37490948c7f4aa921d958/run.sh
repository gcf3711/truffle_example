#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./ApplauseCashCrowdsaletest.js --network develop > result.txt
