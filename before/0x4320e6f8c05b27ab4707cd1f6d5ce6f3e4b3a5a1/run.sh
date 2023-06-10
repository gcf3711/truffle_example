#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./ACCURAL_DEPOSITtest.js --network develop > result.txt
