#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./MP3Cointest.js --network develop > result.txt
