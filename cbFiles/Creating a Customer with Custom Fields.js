// Import the Chargebee SDK
const chargebee = require('chargebee');
const { site, api_key } = require('./chargeBee.json');

// Configure the Chargebee SDK with your API key and site name
chargebee.configure({
	site,
	api_key
});

var customerDetails = {
	first_name: 'Jane',
	last_name: 'Doe',
	email: 'janedoe@example.com',
	custom_fields: [
		{
			name: 'custom_field_1',
			value: 'Custom Value 1'
		},
		{
			name: 'custom_field_2',
			value: 'Custom Value 2'
		}
	]
};

chargebee.customer.create(customerDetails).request(function (error, result) {
	if (error) {
		console.error('Error creating customer with custom fields:', error);
	} else {
		console.log('New Customer ID:', result.customer.id);
	}
});
