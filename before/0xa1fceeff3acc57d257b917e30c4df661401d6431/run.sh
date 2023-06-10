#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./AirDropContracttest.js --network develop > result.txt
