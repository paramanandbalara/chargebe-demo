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
	subscription_items: [
		{
			item_price_id: 'addon-item-1',
			quantity: 2
		},
		{
			item_price_id: 'addon-item-2',
			quantity: 1
		}
	]
};

chargebee.subscription
	.create(subscriptionDetails)
	.request(function (error, result) {
		if (error) {
			console.error('Error creating subscription with add-ons:', error);
		} else {
			console.log('New Subscription ID:', result.subscription.id);
		}
	});
