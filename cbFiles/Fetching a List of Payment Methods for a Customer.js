// Import the Chargebee SDK
const chargebee = require('chargebee');
const { site, api_key } = require('./chargeBee.json');

// Configure the Chargebee SDK with your API key and site name
chargebee.configure({
	site,
	api_key
});

var customerId = '{customer_id}';

chargebee.payment_method
	.list({
		customer_id: customerId,
		limit: 10 // Limit the number of payment methods to retrieve (adjust as needed)
	})
	.request(function (error, result) {
		if (error) {
			console.error('Error listing payment methods:', error);
		} else {
			console.log('Payment Methods for Customer ID', customerId);
			result.list.forEach(function (paymentMethod) {
				console.log('Payment Method ID:', paymentMethod.payment_method.id);
				console.log('Type:', paymentMethod.payment_method.type);
				console.log('Gateway:', paymentMethod.payment_method.gateway);
				console.log('------------');
			});
		}
	});
