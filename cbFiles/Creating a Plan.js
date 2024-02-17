// Import the Chargebee SDK
const chargebee = require('chargebee');
const { site, api_key } = require('./chargeBee.json');

// Configure the Chargebee SDK with your API key and site name
chargebee.configure({
	site,
	api_key
});

var planDetails = {
	id: 1,
	name: 'Shypmax_free_plan',
	price: 1, // Price in cents
	currency_code: 'INR',
	billing_frequency: 1 // 1 for monthly, 12 for annual, etc.
};

chargebee.plan.create(planDetails).request(function (error, result) {
	if (error) {
		console.error('Error creating plan:', error);
	} else {
		console.log('New Plan ID:', result.plan.id);
	}
});
