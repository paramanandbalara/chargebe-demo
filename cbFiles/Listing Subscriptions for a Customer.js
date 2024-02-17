// Import the Chargebee SDK
const chargebee = require('chargebee');
const { site, api_key } = require('./chargeBee.json');

// Configure the Chargebee SDK with your API key and site name
chargebee.configure({
	site,
	api_key
});

var customerId = '{customer_id}';

chargebee.subscription
	.list({
		customer_id: customerId
	})
	.request(function (error, result) {
		if (error) {
			console.error('Error listing subscriptions:', error);
		} else {
			console.log('Subscriptions for Customer ID', customerId);
			result.list.forEach(function (subscription) {
				console.log('Subscription ID:', subscription.subscription.id);
				console.log('Plan ID:', subscription.subscription.plan_id);
				console.log('Status:', subscription.subscription.status);
				console.log('------------');
			});
		}
	});
