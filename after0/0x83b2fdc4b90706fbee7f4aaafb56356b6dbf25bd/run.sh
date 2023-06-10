#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./XgoldCrowdsaletest.js --network develop > result.txt
