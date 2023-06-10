#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./MultiplicatorX4test.js --network develop > result.txt
