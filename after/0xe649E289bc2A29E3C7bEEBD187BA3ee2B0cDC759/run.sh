#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./JiucaiTokentest.js --network develop > result.txt
