#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./DestiNeedTokentest.js --network develop > result.txt
