// Import the Chargebee SDK
const chargebee = require('chargebee');
const { site, api_key } = require('./chargeBee.json');

// Configure the Chargebee SDK with your API key and site name
chargebee.configure({
	site,
	api_key
});

var invoiceId = '{invoice_id}';

chargebee.invoice.retrieve(invoiceId).request(function (error, result) {
	if (error) {
		console.error('Error fetching invoice details:', error);
	} else {
		console.log('Invoice Details for ID', invoiceId);
		console.log('Invoice Status:', result.invoice.status);
		console.log('Due Date:', result.invoice.due_date);
		console.log('Total Amount:', result.invoice.total);
		console.log('------------');
	}
});
