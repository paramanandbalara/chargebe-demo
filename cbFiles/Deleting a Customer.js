// Import the Chargebee SDK
const chargebee = require('chargebee');
const { site, api_key } = require('./chargeBee.json');

// Configure the Chargebee SDK with your API key and site name
chargebee.configure({
	site,
	api_key
});

var customerId = '{customer_id}';

chargebee.customer.delete(customerId).request(function (error, result) {
	if (error) {
		console.error('Error deleting customer:', error);
	} else {
		console.log('Customer ID', customerId, 'has been deleted.');
	}
});
