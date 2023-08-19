#!/usr/bin/node
let Login = 0;
exports.logMe = function (item){
	console.log(Login + ": " + item);
	Login++;
}