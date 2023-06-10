#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./ALUXTokentest.js --network develop > result.txt
