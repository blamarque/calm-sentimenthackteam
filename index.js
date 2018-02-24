global.__base = __dirname + '/';

var wordService = require(__base + 'WordAnalys');
var configurationReader =  require(__base + 'RessourceConfigurationReader');

console.log("Hello World");
configurationReader.read();