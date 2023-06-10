#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./CERB_Cointest.js --network develop > result.txt
