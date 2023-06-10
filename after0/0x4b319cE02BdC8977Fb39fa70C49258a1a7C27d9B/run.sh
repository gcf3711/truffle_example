#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./UNLBtest.js --network develop > result.txt
