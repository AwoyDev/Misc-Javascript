const ps = require('./modules/node_modules/prompt-sync');
const prompt = ps();

  let command = prompt("> ")
  let evaled;
  try {
    evaled = eval(command);
    eval(evaled)
} catch (error) {
  console.log('Erreur' + error);
}