// Import the Chargebee SDK
const chargebee = require('chargebee');
const { site, api_key } = require('./chargeBee.json');

// Configure the Chargebee SDK with your API key and site name
chargebee.configure({
	site,
	api_key
});

var subscriptionId = '{subscription_id}';

chargebee.invoice
	.create_for_charge({
		subscription_ids: [subscriptionId]
	})
	.request(function (error, result) {
		if (error) {
			console.error('Error creating invoice for subscription:', error);
		} else {
			console.log('New Invoice ID:', result.invoice.id);
		}
	});
