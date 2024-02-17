// Import the Chargebee SDK
const chargebee = require('chargebee');

// Configure the Chargebee SDK with your site and API key
const { site, api_key } = require('./chargeBee.json'); // Make sure to create chargebee.json with your credentials
chargebee.configure({
	site,
	api_key
});

// Define any filters or options for listing customers
const filters = {
	// limit: 10, // Limit the number of customers to retrieve (adjust as needed)
	// offset: 0 // Starting offset
	// Add more filters if needed, e.g., 'email': 'example@example.com'
};

// Use the chargebee.customer.list method to fetch customers
chargebee.customer.list(filters).request(function (error, result) {
	if (error) {
		console.error('Error fetching customers:', error);
	} else {
		console.log('List of Customers:');
		result.list.forEach(function (customer) {
			console.log('Customer ID:', customer.customer.id);
			console.log(
				'Customer Name:',
				`${customer.customer.first_name} ${customer.customer.last_name}`
			);
			console.log('Email:', customer.customer.email);
			console.log('------------');
		});
	}
});
