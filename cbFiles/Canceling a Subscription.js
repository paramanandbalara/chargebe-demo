// Import the Chargebee SDK
const chargebee = require('chargebee');
const { site, api_key } = require('./chargeBee.json');

// Configure the Chargebee SDK with your API key and site name
chargebee.configure({
	site,
	api_key
});

var subscriptionId = '{subscription_id}';

chargebee.subscription
	.cancel(subscriptionId, {
		end_of_term: false // Set to true to cancel at the end of the term
	})
	.request(function (error, result) {
		if (error) {
			console.error('Error canceling subscription:', error);
		} else {
			console.log('Subscription ID', subscriptionId, 'has been canceled.');
		}
	});
