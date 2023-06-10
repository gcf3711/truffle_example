#!/bin/bash
truffle compile
truffle migrate --network develop
truffle exec ./developer_Crowdsaletest.js --network develop > result.txt
