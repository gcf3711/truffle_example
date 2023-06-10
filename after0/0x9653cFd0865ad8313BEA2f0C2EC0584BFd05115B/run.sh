#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./FuturXetest.js --network develop > result.txt
