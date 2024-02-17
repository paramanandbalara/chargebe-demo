// Import the Chargebee SDK
const chargebee = require('chargebee');
const { site, api_key } = require('./chargeBee.json');

// Configure the Chargebee SDK with your API key and site name
chargebee.configure({
	site,
	api_key
});

var customerId = '{customer_id}';

chargebee.invoice
	.list({
		customer_id: customerId,
		limit: 10 // Limit the number of invoices to retrieve (adjust as needed)
	})
	.request(function (error, result) {
		if (error) {
			console.error('Error listing invoices:', error);
		} else {
			console.log('Invoices for Customer ID', customerId);
			result.list.forEach(function (invoice) {
				console.log('Invoice ID:', invoice.invoice.id);
				console.log('Status:', invoice.invoice.status);
				console.log('Due Date:', invoice.invoice.due_date);
				console.log('Total Amount:', invoice.invoice.total);
				console.log('------------');
			});
		}
	});
