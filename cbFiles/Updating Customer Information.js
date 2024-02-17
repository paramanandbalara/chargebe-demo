// Import the Chargebee SDK
const chargebee = require('chargebee');
const { site, api_key } = require('./chargeBee.json');

// Configure the Chargebee SDK with your API key and site name
chargebee.configure({
	site,
	api_key
});

var customerId = '{customer_id}';

var customerUpdateDetails = {
	id: customerId,
	first_name: 'Updated First Name',
	last_name: 'Updated Last Name',
	email: 'updated_email@example.com'
	// Add other updated customer attributes as needed
};

chargebee.customer
	.update(customerUpdateDetails)
	.request(function (error, result) {
		if (error) {
			console.error('Error updating customer:', error);
		} else {
			console.log('Customer ID', customerId, 'has been updated.');
		}
	});
