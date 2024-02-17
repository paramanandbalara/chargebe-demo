const chargebee = require('chargebee');
const { site, api_key } = require('./chargeBee.json');

// Configure the Chargebee SDK with your API key and site name
chargebee.configure({
	site,
	api_key
});

chargebee.item
	.list({
		limit: 10 // Limit the number of plans to retrieve (adjust as needed)
	})
	.request(function (error, result) {
		if (error) {
			console.error('Error listing plans:', error);
		} else {
			console.log('List of Plans:', JSON.stringify(result));
			// result.list.forEach(function (plan) {
			// 	console.log('Plan ID:', plan.plan.id);
			// 	console.log('Plan Name:', plan.plan.name);
			// 	console.log('Price:', plan.plan.price);
			// 	console.log('------------');
			// });
		}
	});
