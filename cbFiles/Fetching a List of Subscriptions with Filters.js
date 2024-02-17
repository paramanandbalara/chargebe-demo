// Import the Chargebee SDK
const chargebee = require('chargebee');
const { site, api_key } = require('./chargeBee.json');

// Configure the Chargebee SDK with your API key and site name
chargebee.configure({
	site,
	api_key
});

// Define filters for listing subscriptions (e.g., by status)
var filters = {
	status: 'active', // Replace with the desired status (e.g., "active", "canceled")
	limit: 10 // Limit the number of subscriptions to retrieve (adjust as needed)
};

chargebee.subscription.list(filters).request(function (error, result) {
	if (error) {
		console.error('Error listing subscriptions with filters:', error);
	} else {
		console.log('List of Subscriptions with Filters:');
		result.list.forEach(function (subscription) {
			console.log('Subscription ID:', subscription.subscription.id);
			console.log('Customer ID:', subscription.subscription.customer_id);
			console.log('Status:', subscription.subscription.status);
			console.log('------------');
		});
	}
});
