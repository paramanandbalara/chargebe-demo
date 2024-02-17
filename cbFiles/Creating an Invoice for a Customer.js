// Import the Chargebee SDK
const chargebee = require('chargebee');
const { site, api_key } = require('./chargeBee.json');

// Configure the Chargebee SDK with your API key and site name
chargebee.configure({
	site,
	api_key
});

var invoiceDetails = {
	customer_id: '{customer_id}',
	auto_collection: 'on'
};

chargebee.invoice.create(invoiceDetails).request(function (error, result) {
	if (error) {
		console.error('Error creating invoice:', error);
	} else {
		console.log('New Invoice ID:', result.invoice.id);
	}
});
