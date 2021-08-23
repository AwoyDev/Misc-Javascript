const fs = require('./modules/node_modules/fs');
const ps = require('./modules/node_modules/prompt-sync');
const prompt = ps();
const gradient = require('./modules/node_modules/gradient-string');

let value = prompt("Quelle valeur voulez-vous ajouter ?");

var data = fs.readFileSync("bd_.txt");
var splitData = data.toString().split('\n');

fs.appendFileSync("bd_.txt", value); 
console.log((gradient.fruit(value)) + " a bien été ajouté dans la base de données");