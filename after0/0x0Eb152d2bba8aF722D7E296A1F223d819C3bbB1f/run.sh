#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./CarbonExchangeCoinTokentest.js --network develop > result.txt
