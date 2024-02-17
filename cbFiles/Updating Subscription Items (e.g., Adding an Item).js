// Import the Chargebee SDK
const chargebee = require('chargebee');
const { site, api_key } = require('./chargeBee.json');

// Configure the Chargebee SDK with your API key and site name
chargebee.configure({
	site,
	api_key
});

var subscriptionId = '{subscription_id}';

var subscriptionItemUpdateDetails = {
	id: subscriptionId,
	subscription_items: [
		{
			item_price_id: 'new-item-price-id',
			quantity: 1
		}
	]
};

chargebee.subscription
	.update_items(subscriptionItemUpdateDetails)
	.request(function (error, result) {
		if (error) {
			console.error('Error updating subscription items:', error);
		} else {
			console.log('Subscription items have been updated.');
		}
	});
