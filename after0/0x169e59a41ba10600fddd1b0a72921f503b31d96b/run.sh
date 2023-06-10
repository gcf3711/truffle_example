#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./IcoOKOTokentest.js --network develop > result.txt
