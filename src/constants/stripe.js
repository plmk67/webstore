const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_MY_PUBLISHABLE_KEY'
  : 'pk_test_K8hH1MLjoGyYmB6mTVgLIEf900Aop4KNCd';

export default STRIPE_PUBLISHABLE;