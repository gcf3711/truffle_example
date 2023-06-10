#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./daoPOLSKAtokenstest.js --network develop > result.txt
