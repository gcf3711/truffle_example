#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./DSPXTokentest.js --network develop > result.txt
