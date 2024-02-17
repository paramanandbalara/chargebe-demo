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
	custom_fields: [
		{
			name: 'custom_field_1',
			value: 'Custom Value 1'
		},
		{
			name: 'custom_field_2',
			value: 'Custom Value 2'
		}
	]
};

chargebee.subscription
	.create(subscriptionDetails)
	.request(function (error, result) {
		if (error) {
			console.error('Error creating subscription with custom fields:', error);
		} else {
			console.log('New Subscription ID:', result.subscription.id);
		}
	});
