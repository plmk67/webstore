const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'sk_live_MY_SECRET_KEY'
    : 'sk_test_dooNhlvOHbWxVCJLbKQV386Q00xJq96sJ5';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;