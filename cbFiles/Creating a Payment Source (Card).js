// Import the Chargebee SDK
const chargebee = require('chargebee');
const { site, api_key } = require('./chargeBee.json');
console.log(chargebee);
// Import the Chargebee SDK

// Configure the Chargebee SDK with your API key and site name
chargebee.configure({
  site,
  api_key
});

// Define the customer ID for whom you want to create a card
const customer_id = 'shypmax_1';

// Define the card details
const cardDetails = {
  customer_id: customer_id,
  card: {
    gateway: 'stripe', // Replace with the appropriate gateway (e.g., 'stripe')
    card_number: '4111111111111111', // Replace with a valid card number
    card_expiry_month: '12',
    card_expiry_year: '2025',
    card_cvv: '123'
  }
};

// Use the chargebee.payment_method.create method to create the card
chargebee.card.create(cardDetails).request(function (error, result) {
  if (error) {
    console.error('Error creating card:', error);
  } else {
    console.log('New Card ID:', result.payment_method.id);
  }
});
