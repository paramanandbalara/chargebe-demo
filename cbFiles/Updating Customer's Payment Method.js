// Import the Chargebee SDK
const chargebee = require('chargebee');
const { site, api_key } = require('./chargeBee.json');

// Configure the Chargebee SDK with your API key and site name
chargebee.configure({
	site,
	api_key
});

var customerId = '{customer_id}';

var paymentMethodUpdateDetails = {
	id: customerId,
	payment_method: {
		type: 'card',
		gateway: 'stripe', // or other supported gateways
		card_number: '4111111111111111', // Replace with a valid card number
		card_expiry_month: '12',
		card_expiry_year: '2025',
		card_cvv: '123'
	}
};

chargebee.customer
	.update_payment_method(paymentMethodUpdateDetails)
	.request(function (error, result) {
		if (error) {
			console.error("Error updating customer's payment method:", error);
		} else {
			console.log("Customer's Payment Method has been updated.");
		}
	});
