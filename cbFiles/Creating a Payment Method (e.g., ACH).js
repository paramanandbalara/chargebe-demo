// Import the Chargebee SDK
const chargebee = require('chargebee');
const { site, api_key } = require('./chargeBee.json');

// Configure the Chargebee SDK with your API key and site name
chargebee.configure({
	site,
	api_key
});

var customer_id = '{customer_id}';

var paymentMethodDetails = {
	customer_id: customer_id,
	payment_method: {
		type: 'bank_account',
		gateway: 'ach',
		bank_account: {
			account_number: '123456789',
			routing_number: '987654321',
			account_type: 'checking'
		}
	}
};

chargebee.payment_method
	.create(paymentMethodDetails)
	.request(function (error, result) {
		if (error) {
			console.error('Error creating payment method:', error);
		} else {
			console.log('New Payment Method ID:', result.payment_method.id);
		}
	});
