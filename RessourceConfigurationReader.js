var fs = require('fs')
path = require('path'),
    filePath = path.join(__dirname, 'Configuration.json');


function RessourceConfiguration() {

    var configuration = {};

    return configuration;
};

(function () {

    var ressourceConfigurationReader = {};

    ressourceConfigurationReader.read = function (rule) {

        console.log("Configuration Reader ");
        fs.readFile(filePath, { encoding: 'utf-8' }, function (err, data) {

            if (!err) {
                var ressources = ressourceConfigurationReader.parse(JSON.parse(data));
                console.log(JSON.stringify(ressources));

            } else {
                console.log(err);
            }
        });

    }

    ressourceConfigurationReader.parse = function (data) {

        var ressources = data.map(element => {
           var ressource  = new RessourceConfiguration();
           ressource.name = element.Name;
           ressource.description = element.Description;
           ressource.type =  element.Type;
           ressources.days = elements.Days;
           return ressource;
        });

        return ressources;
    }
    module.exports = ressourceConfigurationReader;

}());

