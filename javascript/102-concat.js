#!/usr/bin/node

const { isUtf8 } = require('buffer');
const fs = require('fs');
const { argv } = require('process');

const sourceFile1  = argv[2];
const sourceFile2 = argv[3];
const destinationFile = argv[4];

const content1 = fs.readFileSync(sourceFile1, 'utf8');
const content2 = fs.readFileSync(sourceFile2, 'utf8');
const concat = content1 + '\n'+ content2 + '\n'

fs.writeFileSync(destinationFile, concat);