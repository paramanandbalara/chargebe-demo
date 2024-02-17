const express = require('express');
const stripe = require('stripe')(
	'c2tfdGVzdF80ZUMzOUhxTHlqV0Rhcmp0VDF6ZHA3ZGM6'
);
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Serve the front-end HTML page
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

// Create a subscription when the form is submitted
app.post('/create-subscription', async (req, res) => {
	try {
		const token = req.body.token;
		const customer = await stripe.customers.create({
			email: 'customer@example.com', // Use a real email address here
			source: token // Token from the client-side
		});

		const subscription = await stripe.subscriptions.create({
			customer: customer.id,
			items: [{ price: 'YOUR_STRIPE_PRICE_ID' }] // Replace with your price ID
		});

		res.json({ message: 'Subscription created successfully!' });
	} catch (error) {
		console.error(error);
		res
			.status(500)
			.json({ error: 'An error occurred while processing your request.' });
	}
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
