// Import the Chargebee SDK
const chargebee = require('chargebee');
const { site, api_key } = require('./chargeBee.json');

// Configure the Chargebee SDK with your API key and site name
chargebee.configure({
	site,
	api_key
});

var customerDetails = {
	first_name: 'Paramanand',
	last_name: 'Balara',
	email: 'Shypmax@test.com',
	id : 'shypmax_1'
};

chargebee.customer.create(customerDetails).request(function (error, result) {
	if (error) {
		console.error('Error creating customer:', error);
	} else {
		console.log('New Customer ID:', result.customer.id);
	}
});
