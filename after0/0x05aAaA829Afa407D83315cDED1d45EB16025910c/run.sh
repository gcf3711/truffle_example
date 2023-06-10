#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./SPXTokentest.js --network develop > result.txt
