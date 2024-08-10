const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Stripe = require('stripe');

// Initialize Express
const app = express();
const port = process.env.PORT || 3001;

// Initialize Stripe with your secret key
const stripe = Stripe('sk_test_51KpnnQSBQGiFWyMnCeRYVDK3jyw8xjYeRo7NsJiAEim3EAYHxR5MzAABHpCbYiCCYNJjrB3kkbZS520eLmBer1wS00RZfxg97A'); // Replace with your actual Stripe secret key
// Mock data
const products = require('./data/products'); // Import your products data

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.use(express.json());


// Endpoint to get all products
app.get('/products', (req, res) => {
  res.json(products);
});

// Endpoint to get a product by ID
app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
});
// Endpoint to create a payment intent
app.post('/payments/intents', async (req, res) => {
  try {
    const { amount } = req.body;

    // Create a PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'inr',
      payment_method_types: ['card'],
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});



// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
