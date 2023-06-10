#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./AirDroptest.js --network develop > result.txt
