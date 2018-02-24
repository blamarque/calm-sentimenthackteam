global.__base = __dirname + '/';

var wordService = require(__base + 'wordAnalys');
var sentiment = require('./sentiment-api.js');

console.log("Hello World");
console.log(sentiment);
sentiment.callEmotionSentence('I am feeling low');