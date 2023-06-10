#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./DaddyTokentest.js --network develop > result.txt
