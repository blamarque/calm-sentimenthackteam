global.__base = __dirname + '/';

<<<<<<< HEAD
var wordService = require(__base + 'WordAnalys');
var configurationReader =  require(__base + 'RessourceConfigurationReader');

console.log("Hello World");
configurationReader.read();
=======
var wordService = require(__base + 'wordAnalys');
var sentiment = require('./sentiment-api.js');

console.log("Hello World");
console.log(sentiment);
sentiment.callEmotionSentence('I am feeling low');
>>>>>>> 734c1a2f7772751128cd29eae20ef4112070c603
