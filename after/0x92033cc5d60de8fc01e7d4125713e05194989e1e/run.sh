#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./HodboCrowdsaletest.js --network develop > result.txt
