#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./Centra4test.js --network develop > result.txt
