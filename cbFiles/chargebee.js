// Import the Chargebee SDK
const chargebee = require('chargebee');
const { site, api_key } = require('./chargeBee.json');


// Configure the Chargebee SDK with your API key and site name
chargebee.configure({
	site,
	api_key
});

// Define the customer ID for whom you want to create a subscription
const customer_id = 'shypmax_1'; // Replace with the actual customer ID

// Define the card and subscription details
const cardAndSubscriptionDetails = {
	plan_id: 'Free-Plan', // Replace with the actual plan ID
	customer_id: customer_id,
	auto_collection: 'on', // Set auto-collection to 'on' or 'off'
	billing_cycles: 12, // Number of billing cycles
	billing_period: 1, // Billing period in months (1 for monthly, 12 for annual, etc.)
	start_date: '2023-01-01', // Start date for the subscription
	trial_end: '2023-02-01', // Trial end date (if applicable)
	coupon_ids: ['coupon_id_1', 'coupon_id_2'], // Array of coupon IDs
	addons: [
		{
			id: 'addon_id_1', // Replace with the actual addon ID
			quantity: 2
		},
		{
			id: 'addon_id_2', // Replace with the actual addon ID
			quantity: 1
		}
	],
	shipping_address: {
		first_name: 'John',
		last_name: 'Doe',
		line1: '123 Main St',
		city: 'New York',
		state: 'NY',
		zip: '10001',
		country: 'US'
	},
	custom_fields: [
		{
			name: 'custom_field_1',
			value: 'Custom Value 1'
		},
		{
			name: 'custom_field_2',
			value: 'Custom Value 2'
		}
	],
	card: {
		gateway: 'stripe', // Replace with the appropriate gateway (e.g., 'stripe')
		card_number: '4111111111111111', // Replace with a valid card number
		card_expiry_month: '12',
		card_expiry_year: '2025',
		card_cvv: '123'
	}
};

// Use the chargebee.subscription.create method to create the subscription with card details
chargebee.subscription
	.create(cardAndSubscriptionDetails)
	.request(function (error, result) {
		if (error) {
			console.error('Error creating subscription:', error);
		} else {
			console.log('New Subscription ID:', result.subscription.id);
			console.log('New Card ID:', result.card.id); // You can access the newly created card ID
		}
	});
