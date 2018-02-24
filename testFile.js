

global.__base = __dirname + '/';

var sentimentResponse = require(__base + 'SentimentResponse');

sentimentResponse.load(function(){
    console.log("done");
    sentimentResponse.analyse("wqdqwdqwdqwdqwd",function(){
        console.log("analysed"); 
    });
})