#!/usr/bin/node

const list = require('./100-data').list;

console.log(list);

const lists = list.map((l, index) => {
	return l * index;
});
console.log(lists);