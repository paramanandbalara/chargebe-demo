// Import the Chargebee SDK
const chargebee = require('chargebee');
const { site, api_key } = require('./chargeBee.json');

// Configure the Chargebee SDK with your API key and site name
chargebee.configure({
	site,
	api_key
});

var subscriptionId = '{subscription_id}';

var subscriptionUpdateDetails = {
	id: subscriptionId,
	plan_id: 'new_plan_id' // Replace with the new plan ID
	// Add other updated subscription attributes as needed
};

chargebee.subscription
	.update(subscriptionUpdateDetails)
	.request(function (error, result) {
		if (error) {
			console.error('Error updating subscription:', error);
		} else {
			console.log('Subscription ID', subscriptionId, 'has been updated.');
		}
	});
