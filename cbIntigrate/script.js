// Initialize Chargebee.js with your Chargebee site and publishable key
Chargebee.init({
	site: 'shypmax-test',
});
// Initialize Chargebee.js with your Chargebee site

// Handle the button click event
document.getElementById('checkout-button').addEventListener('click', function () {
    // Create a hosted checkout page for collecting payment information
    Chargebee.getInstance().setCheckoutCallbacks(function (result) {
        if (result.msg === 'payment_success') {
            // Handle successful payment
            console.log('Payment successful:', result);

            // Send payment data to your backend
            sendPaymentData(result);
        } else if (result.msg === 'payment_failure') {
            // Handle payment failure
            console.error('Payment failed:', result);
        }
    }).openCheckout({
        hostedPage: function () {
            return {
                content: {
                    collectNow: true, // Collect payment details immediately
                },
            };
        },
        container: 'checkout-container', // ID of the container to render the checkout form
    });
});

// Function to send payment data to the backend
function sendPaymentData(paymentResult) {
    fetch('/create-subscription', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ paymentResult: paymentResult })
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // Handle the server response (e.g., subscription creation)
        console.log(data);
    })
    .catch(function (error) {
        console.error(error);
    });
}
