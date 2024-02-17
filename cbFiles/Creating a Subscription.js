// // Import the Chargebee SDK
// const chargebee = require('chargebee');
// const { site, api_key } = require('./chargeBee.json');

// // Configure the Chargebee SDK with your API key and site name
// chargebee.configure({
// 	site,
// 	api_key
// });

// var subscriptionDetails = {
// 	plan_id: 'Free-Plan',
// 	customer_id: 1
// };

// chargebee.subscription
// 	.create(subscriptionDetails)
// 	.request(function (error, result) {
// 		if (error) {
// 			console.error('Error creating subscription:', error);
// 		} else {
// 			console.log('New Subscription ID:', result.subscription.id);
// 		}
// 	});




// Import the Chargebee SDK
const chargebee = require('chargebee');

// Configure the Chargebee SDK with your site and API key
const { site, api_key } = require('./chargeBee.json'); // Make sure to create chargebee.json with your credentials
chargebee.configure({
  site,
  api_key,
});

// Define the subscription details
const subscriptionDetails = {
	plan_id: 'Free-Plan', // Replace with the actual plan ID
	customer_id: 'shypmax_1', // Replace with the actual customer ID
	auto_collection: 'on', // Set auto-collection to 'on' or 'off'
	billing_cycles: 12, // Number of billing cycles
	billing_period: 1, // Billing period in months (1 for monthly, 12 for annual, etc.)
	start_date: '2023-01-01', // Start date for the subscription
	trial_end: '2023-02-01', // Trial end date (if applicable)
	//   coupon_ids: ['coupon_id_1', 'coupon_id_2'], // Array of coupon IDs
	//   addons: [
	//     {
	//       id: 'addon_id_1', // Replace with the actual addon ID
	//       quantity: 2,
	//     },
	//     {
	//       id: 'addon_id_2', // Replace with the actual addon ID
	//       quantity: 1,
	//     },
	//   ],
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
	]
};

// Use the chargebee.subscription.create method to create the subscription
chargebee.subscription.create(subscriptionDetails).request(function (error, result) {
  if (error) {
    console.error('Error creating subscription:', error);
  } else {
    console.log('New Subscription ID:', result.subscription.id);
  }
});

