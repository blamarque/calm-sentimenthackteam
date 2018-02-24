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

    sentimentResponse.analyse = function (speech) {

        console.log("Analyse" + speech);

        var promise  = new Promise(function(resolve, reject) {
            
            sentiment.callEmotionSentence(speech);

            var response = {
                status :"ok",
                data:{
                    resources:[{
                        name:sentimentResponse.ressources[0].name,
                        description:sentimentResponse.ressources[0].description,
                        type:sentimentResponse.ressources[0].type
                    }]
                }
            }

            resolve(response);
        });

        return promise;

    }

    //select best ressource response
    sentimentResponse.bestResourceSelection = function (fact) {
          
        var selections = sentimentResponse.ressources.filter(element => {

            if (element.rules.openingTimeRule[0].apply("now")) {

            }

        });

        return selections;

    }

    module.exports = sentimentResponse;

}());
