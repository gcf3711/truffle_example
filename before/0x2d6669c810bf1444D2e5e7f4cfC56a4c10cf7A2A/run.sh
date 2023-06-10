#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./HYIPTokentest.js --network develop > result.txt
