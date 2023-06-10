#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./MoxyOnePresaletest.js --network develop > result.txt
