#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./ChuCunLingAIGOtest.js --network develop > result.txt
