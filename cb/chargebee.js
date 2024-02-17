// Create a customer with billing details

// Import the Chargebee SDK
const chargebee = require('chargebee');
const { site, api_key } = require('../chargeBee.json');

// Configure the Chargebee SDK with your API key and site name
chargebee.configure({
	site,
	api_key
});

console.log(JSON.stringify(chargebee))
console.dir(chargebee.subscription, { depth: null });

const customerDetails = {
	id: 'M001',
	email: 'paramanand.balara@shypmax.com', // User's email
	first_name: 'Paramanand',
	last_name: 'Balara',
	billing_address: {
		line1: 'c6/106, Vaishali nagar',
		city: 'Jaipur',
		state: 'Rajasthan',
		zip: '302021',
		country: 'IN'
	}
};

// chargebee.customer.create(customerDetails).request(function (error, result) {
// 	if (error) {
// 		console.error('Error creating customer:', error);
//     } else {
//         console.log('New Customer ID:', result);
//         console.log('New Customer ID:', result.customer.id);
// 	}
// });

// Create a subscription for the customer with a free plan
const customerId = 'M001'; // Replace with the actual customer ID
const freePlanId = 'Free-Plan'; // Replace with the ID of your free plan

const subscriptionDetails = {
  plan_id: freePlanId,
  customer_id: customerId,
  // You can add more subscription details as needed
};

chargebee.subscription.create(subscriptionDetails).request(function (error, result) {
  if (error) {
    console.error('Error creating subscription:', error);
  } else {
    console.log('New Free Subscription ID:', result.subscription.id);
    // Proceed with additional actions if necessary
  }
});




// // Handle plan change (Upgrade to a paid plan)
// app.get('/change-plan', (req, res) => {
// 	const { customerId, newPlanId } = req.query;

// 	// Generate a hosted page URL for plan change
// 	const planChangeParams = {
// 		redirect_url: 'https://yourwebsite.com/success', // Redirect URL after plan change
// 		subscription: {
// 			plan_id: newPlanId // Replace with the new paid plan ID
// 		}
// 	};

// 	chargebee.hosted_page
// 		.checkout_new({
// 			customer: { id: customerId },
// 			...planChangeParams
// 		})
// 		.request((error, result) => {
// 			if (error) {
// 				console.error('Error generating hosted page URL:', error);
// 				return res.status(500).json({ error: 'Hosted page creation failed' });
// 			} else {
// 				console.log(
// 					'Generated Hosted Page URL:',
// 					result.hosted_page.checkout_url
// 				);

// 				// Redirect the customer to the hosted page for plan change
// 				return res.redirect(result.hosted_page.checkout_url);
// 			}
// 		});
// });
