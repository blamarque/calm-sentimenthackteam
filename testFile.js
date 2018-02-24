

global.__base = __dirname + '/';

var sentimentResponse = require(__base + 'index');

sentimentResponse.load(function(){
    console.log("done");
    sentimentResponse.analyse("I feel incredibly sad",function(response){
        console.log("analysed "+JSON.stringify(response));
    });
})
