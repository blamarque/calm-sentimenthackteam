

global.__base = __dirname + '/';

var sentimentResponse = require(__base + 'index');

sentimentResponse.load(function () {
    console.log("done");
    sentimentResponse.analyse("wqdqwdqwdqwdqwd").then(function (response) {
        console.log("analysed " + JSON.stringify(response));
    }
    );
})
