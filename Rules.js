var env = require('./env');

function Rule() {

    var spost = {};
    this.next = {};

    spost.apply = function (fact) {

    };

    return spost;

};

(function () {

    var rule = {};

    //Build rules that will apply for a configuration
    rule.build = function (ruleConfiguration) {

        var qrules = new Array();

        if (typeof ruleConfiguration == "undefined") {
            return qrules;
        }


        Object.keys(ruleConfiguration).forEach(function (key) {
            var value = ruleConfiguration[key];

        
            var e = rule[key](value);


            if (value.hasOwnProperty('and')) {
                e.next = rule.build(value['and']);
            }


            qrules.push(e);
        });

        return qrules;
    };

    rule.openingTimeRule = function (rule) {

		var openingTimeRule = {};
		
		console.log("RULE "+JSON.stringify(rule))
		openingTimeRule.__proto__ = Rule();
		openingTimeRule.days = rule;

		openingTimeRule.weekday = new Array(7);
		openingTimeRule.weekday[0] = "Sunday";
		openingTimeRule.weekday[1] = "Monday";
		openingTimeRule.weekday[2] = "Tuesday";
		openingTimeRule.weekday[3] = "Wednesday";
		openingTimeRule.weekday[4] = "Thursday";
		openingTimeRule.weekday[5] = "Friday";
		openingTimeRule.weekday[6] = "Saturday";

		openingTimeRule.apply = function (fact, callback) {

			console.log("in opening time");

			var d = new Date();
			var n = openingTimeRule.weekday[d.getDay()];
			console.log(n);

			var openingHours = openingTimeRule.days[n];

			if(typeof openingHours == "undefined"){
				console.log("return 0");
				return 0;
			}

			console.log("return 1 "+openingHours);

		};

		return openingTimeRule;

    };
    

    rule.severity = function (rule) {

		var severityRule = {};
		severityRule.id = rule.id;
		severityRule.__proto__ = Rule();

		severityRule.apply = function (fact, callback) {

		};

		return severity;

	};

    module.exports = rule;
}());
