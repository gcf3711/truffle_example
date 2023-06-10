#!/bin/bash

truffle migrate --network develop > result_deploy.txt 2>&1
truffle exec ./JiucaiTokentest.js --network develop > result.txt
