#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./PlazaTokentest.js --network develop > result.txt
