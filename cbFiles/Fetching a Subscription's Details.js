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
	.retrieve(subscriptionId)
	.request(function (error, result) {
		if (error) {
			console.error('Error fetching subscription details:', error);
		} else {
			console.log('Subscription Details for ID', subscriptionId);
			console.log('Customer ID:', result.subscription.customer_id);
			console.log('Plan ID:', result.subscription.plan_id);
			console.log('Status:', result.subscription.status);
			console.log('------------');
		}
	});
