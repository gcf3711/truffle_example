#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./EtherGettest.js --network develop > result.txt
