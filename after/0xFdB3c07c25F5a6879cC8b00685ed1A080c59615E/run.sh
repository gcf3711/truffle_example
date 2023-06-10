#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./SpadeIcotest.js --network develop > result.txt
