#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./VaultProxytest.js --network develop > result.txt
