// Import the Chargebee SDK
const chargebee = require('chargebee');
const { site, api_key } = require('./chargeBee.json');

// Configure the Chargebee SDK with your API key and site name
chargebee.configure({
	site,
	api_key
});

chargebee.coupon
	.list({
		limit: 10 // Limit the number of coupons to retrieve (adjust as needed)
	})
	.request(function (error, result) {
		if (error) {
			console.error('Error listing coupons:', error);
		} else {
			console.log('List of Coupons:');
			result.list.forEach(function (coupon) {
				console.log('Coupon ID:', coupon.coupon.id);
				console.log('Coupon Name:', coupon.coupon.name);
				console.log('Discount Type:', coupon.coupon.discount_type);
				console.log('------------');
			});
		}
	});
