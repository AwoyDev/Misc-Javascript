const fs = require('../modules/node_modules/fs');

var data = fs.readFileSync("bd_.txt");
var splitData = data.toString().split('\n');
var randomNumber = Math.floor(Math.random() * splitData.length);
const lot = splitData.splice(randomNumber, 1);

fs.writeFileSync("bd_.txt", splitData.join('\n')); 

console.log(lot)