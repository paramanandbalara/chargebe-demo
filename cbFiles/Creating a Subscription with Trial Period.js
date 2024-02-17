// Import the Chargebee SDK
const chargebee = require('chargebee');
const { site, api_key } = require('./chargeBee.json');

// Configure the Chargebee SDK with your API key and site name
chargebee.configure({
	site,
	api_key
});

var subscriptionDetails = {
	plan_id: '{plan_id}',
	customer_id: '{customer_id}',
	trial_end: '2023-12-31' // Set the desired trial end date
};

chargebee.subscription
	.create(subscriptionDetails)
	.request(function (error, result) {
		if (error) {
			console.error('Error creating subscription with a trial period:', error);
		} else {
			console.log('New Subscription ID:', result.subscription.id);
		}
	});
