// Import the Chargebee SDK
const chargebee = require('chargebee');
const { site, api_key } = require('./chargeBee.json');

// Configure the Chargebee SDK with your API key and site name
chargebee.configure({
	site,
	api_key
});

chargebee.event
	.list({
		limit: 10 // Limit the number of events to retrieve (adjust as needed)
	})
	.request(function (error, result) {
		if (error) {
			console.error('Error listing events:', error);
		} else {
			console.log('List of Events:');
			result.list.forEach(function (event) {
				console.log('Event ID:', event.event.id);
				console.log('Event Type:', event.event.event_type);
				console.log('Occurred At:', event.event.occurred_at);
				console.log('------------');
			});
		}
	});
