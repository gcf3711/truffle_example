#!/bin/bash

truffle migrate --network develop > result_deploy.txt 2>&1
truffle exec ./SPXTokentest.js --network develop > result.txt