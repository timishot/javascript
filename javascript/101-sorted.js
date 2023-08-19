#!/usr/bin/node
const dict = require('./101-data').dict; 

const userByOccurance = {};

for (const userId in  dict){
	const occurrences = dict[userId]
	if (!userByOccurance[occurrences]){
		userByOccurance[occurrences] = [];
	}

	userByOccurance[occurrences].push(userId)
}

console.log(userByOccurance);