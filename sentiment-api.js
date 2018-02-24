

var http = require('http'),
  async = require('async'),
   _ = require("underscore");

var usr ='';
var pwd ='';
var baseURL ='/v1';
var endPointEmotion = baseURL + '/emotion';

var reqOpts = {
  headers: { 
    'Accept': 'application/json', 
    'Authorization': 'Basic ' + new Buffer(usr + ':' + pwd).toString('base64'), 
    'Content-Type': 'application/json' 
  },  
  hostname: 'api.theysay.io',
  method: 'POST',
  port: 4000
};

module.exports = {


	callEmotionSentence: function(text) {
	  reqOpts.path = endPointEmotion;
	  var reqBody = JSON.stringify({ text: text, level: "sentence" });

	  analyse(reqOpts, reqBody, function(analysis) { affectr.outputEmotionSentence(analysis, text); });
	}

}

function analyse(reqOpts, reqBody, callback) {
  var buffer = '';

  var req = http.request(reqOpts, function(res) {
    res.setEncoding('utf8');

    res.on('data', function (d) { buffer += d; });

    res.on('end', function() { 
      var analysis = JSON.parse(buffer);

      if (_.isUndefined(analysis.errors)) callback(analysis); 
      else console.log(analysis.errors);
    });
  });

  req.on('error', function(e) { console.log('Dodgy request: ' + e.message); });

  req.write(reqBody);
  console.log("reached analyse function");

  req.end();
}
