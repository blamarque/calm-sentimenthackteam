global.__base = __dirname + '/';

var wordService = require(__base + 'wordAnalys');
var sentiment = require('./sentiment-api.js');
var configurationReader = require(__base + 'RessourceConfigurationReader');
var ruleService = require(__base + 'Rules');


(function () {

    var sentimentResponse = {};

    sentimentResponse.load = function (callback) {

        var ressourcesConfiguration = configurationReader.read({}, function (ressourcesConfiguration) {
            console.log("Loaded" + JSON.stringify(ressourcesConfiguration));
            sentimentResponse.ressources = ressourcesConfiguration;
            callback();
        });
    }

    sentimentResponse.analyse = function (speech, callback) {

        console.log("Analyse" + speech);
        if (sentimentResponse.ressources[0].rules.openingTimeRule[0].apply("now")) {

        }

        callback({})
    }

    module.exports = sentimentResponse;

}());








