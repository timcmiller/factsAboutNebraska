'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Facts About Nebraska';

/**
 * Array containing nebraska facts.
 */
var FACTS = [
    "J Sterling Morton founded Arbor Day in Nebraska City in 1872",
    "State insect is the honeybee.",
    "The goldenrod was declared the state flower on April 4, 1895.",
    "The Lied Jungle located in Omaha is the world's largest indoor rain forest.",
    "Spam (canned meat) is produced in Fremont.",
    "The 911 system of emergency communications, now used nationwide, was developed and first used in Lincoln, Nebraska.",
    "Kearney, Nebraska is located exactly between Boston and San Francisco.",
    "In 1950, Omaha became the home of the College World Series.",
    "Union Pacific Railroad's museum is headquartered in Nebraska.",
    "The largest porch swing in the world is located in Hebron, Nebraska and it can sit 25 adults.",
    "Nebraska is the birthplace of the Reuben sandwich.",
    "Nebraska has more miles of river than any other state.",
    "Nebraska is the only state in the union with a unicameral legislature."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random nebraska fact from the nebraska facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a Nebraska fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};
