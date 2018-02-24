var axios = require('axios');
var env = require('./env');

module.exports = {

	callEmotionSentence: function(text) {
    // Look for req.text
    var usr = "8b081307-3f14-4268-81f7-e23e0f517e72";
    var pwd = "3ZdWHOrjZ3wh";
    var options = {
        uri: 'https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone',
        json: true
    };

    return axios.get("https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone",
    {
      params: {
        version: "2016-05-19",
        text: text
      },
      headers: {
        'User-Agent': 'Request-Promise',
        'Accept': 'application/json',
        'Authorization': 'Basic ' + new Buffer(env.user + ':' + env.password).toString('base64'),
        'Content-Type': 'application/json'
      }
    })
        .then(function (response) {
          console.log(response);
          return response;
        })
        .catch(function (err) {
            console.log("ERROR " + err.message);
            return err;
        });
	}
}
