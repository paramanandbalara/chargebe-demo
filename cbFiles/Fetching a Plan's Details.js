// Import the Chargebee SDK
const chargebee = require('chargebee');
const { site, api_key } = require('./chargeBee.json');

// Configure the Chargebee SDK with your API key and site name
chargebee.configure({
	site,
	api_key
});

var planId = '{plan_id}';

chargebee.plan.retrieve(planId).request(function (error, result) {
	if (error) {
		console.error('Error fetching plan details:', error);
	} else {
		console.log('Plan Details for ID', planId);
		console.log('Plan Name:', result.plan.name);
		console.log('Price:', result.plan.price);
		console.log('Billing Frequency:', result.plan.billing_frequency);
		console.log('------------');
	}
});
