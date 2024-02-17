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
	billing_cycles: 6 // Set the desired number of billing cycles
};

chargebee.subscription
	.create(subscriptionDetails)
	.request(function (error, result) {
		if (error) {
			console.error(
				'Error creating subscription with a specific billing cycle:',
				error
			);
		} else {
			console.log('New Subscription ID:', result.subscription.id);
		}
	});
