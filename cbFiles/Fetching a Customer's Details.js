// Import the Chargebee SDK
const chargebee = require('chargebee');
const { site, api_key } = require('./chargeBee.json');

// Configure the Chargebee SDK with your API key and site name
chargebee.configure({
	site,
	api_key
});

var customerId = '{customer_id}';

chargebee.customer.retrieve(customerId).request(function (error, result) {
	if (error) {
		console.error('Error fetching customer details:', error);
	} else {
		console.log('Customer Details for ID', customerId);
		console.log(
			'Customer Name:',
			`${result.customer.first_name} ${result.customer.last_name}`
		);
		console.log('Email:', result.customer.email);
		console.log('Phone:', result.customer.phone);
		console.log('------------');
	}
});
