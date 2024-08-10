const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Stripe = require('stripe');

// Initialize Express
const app = express();
const port = process.env.PORT || 3001;

// Initialize Stripe with your secret key
const stripe = Stripe('sk_test_51KpnnQSBQGiFWyMnCeRYVDK3jyw8xjYeRo7NsJiAEim3EAYHxR5MzAABHpCbYiCCYNJjrB3kkbZS520eLmBer1wS00RZfxg97A'); // Replace with your actual Stripe secret key

// Import mock data
const products = require('./data/products'); // Import your products data
const orders = require('./data/orders'); // Import your mock orders

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

// Endpoint to create an order
app.post('/orders', (req, res) => {
  const newOrder = req.body;

  // Add a unique ID and reference to the order
  newOrder.id = `order_${Date.now()}`;
  newOrder.reference = `REF${Date.now()}`;

  orders.push(newOrder);

  res.status(201).json(newOrder);
});

// Endpoint to get all orders
app.get('/orders', (req, res) => {
  res.json(orders);
});

// Endpoint to get an order by reference ID
app.get('/orders/:ref', (req, res) => {
  const order = orders.find(o => o.reference === req.params.ref);
  if (order) {
    res.json(order);
  } else {
    res.status(404).send('Order not found');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
