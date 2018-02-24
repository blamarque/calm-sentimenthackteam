global.__base = __dirname + '/';

var wordService = require(__base + 'wordAnalys');
var sentiment = require('./sentiment-api.js');
var configurationReader = require(__base + 'RessourceConfigurationReader');
var ruleService = require(__base + 'Rules');





module.exports = function (number, locale) {
    console.log("Hello World");
    //console.log(sentiment);
    var ressourcesConfiguration = configurationReader.read({}, function (ressourcesConfiguration) {

        console.log("Hello World " + JSON.stringify(ressourcesConfiguration));
        if (ressourcesConfiguration[0].rules.openingTimeRule[0].apply("now")) {

        }
    });

    return {};
};



//sentiment.callEmotionSentence('I am feeling low');
