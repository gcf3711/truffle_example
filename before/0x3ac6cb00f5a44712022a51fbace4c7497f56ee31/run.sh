#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./MESHtest.js --network develop > result.txt
