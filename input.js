const ps = require("./modules/node_modules/prompt-sync");
const prompt = ps();

let name = prompt("Quel est ton nom ? ")
console.log(`Ton nom est ${name}`)