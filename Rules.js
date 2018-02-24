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
		openingTimeRule.id = rule.id;
		openingTimeRule.__proto__ = Rule();
		openingTimeRule.strategy = rule.strategy == "gt" ? 1 : 0;

		openingTimeRule.apply = function (fact, callback) {

			if (typeof fact == "undefined") {
				return 0;
			}

			if (typeof fact.build == "undefined") {
				return 0;
			}

			if (fact.build > buildRule.id) return rule.strategy ? callback(buildRule.next, fact) : 0;
			if (fact.build < buildRule.id) return rule.strategy ? 0 : callback(buildRule.next, fact);

		};

		return buildRule;

    };
    

    rule.severity = function (rule) {

		var severityRule = {};
		severityRule.id = rule.id;
		severityRule.__proto__ = Rule();
		severityRule.strategy = rule.strategy == "gt" ? 1 : 0;

		openingTimeRule.apply = function (fact, callback) {

			if (typeof fact == "undefined") {
				return 0;
			}

			if (typeof fact.build == "undefined") {
				return 0;
			}

            

		};

		return buildRule;

	};

    module.exports = rule;
}());
