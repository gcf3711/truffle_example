#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./ModiTokenERC20test.js --network develop > result.txt
