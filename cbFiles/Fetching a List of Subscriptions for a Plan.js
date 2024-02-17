// Import the Chargebee SDK
const chargebee = require('chargebee');
const { site, api_key } = require('./chargeBee.json');

// Configure the Chargebee SDK with your API key and site name
chargebee.configure({
	site,
	api_key
});

var planId = '{plan_id}';

chargebee.subscription
	.list({
		plan_id: planId,
		limit: 10 // Limit the number of subscriptions to retrieve (adjust as needed)
	})
	.request(function (error, result) {
		if (error) {
			console.error('Error listing subscriptions for a plan:', error);
		} else {
			console.log('List of Subscriptions for Plan ID', planId);
			result.list.forEach(function (subscription) {
				console.log('Subscription ID:', subscription.subscription.id);
				console.log('Customer ID:', subscription.subscription.customer_id);
				console.log('Status:', subscription.subscription.status);
				console.log('------------');
			});
		}
	});
