import React, {Component} from 'react';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe,
  StripeProvider,
  Elements,
} from 'react-stripe-elements';
import STRIPE_PUBLISHABLE from '../../constants/stripe';
import PAYMENT_SERVER_URL from '../../constants/server';
import { Container, Row, Col, Form, Button, Control} from 'react-bootstrap'

const createOptions = () => {
  return {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        letterSpacing: '0.025em',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#c23d4b',
      },
    },
  };
};

class _SplitFieldsForm extends Component {
  state = {
    errorMessage: '',
  };

  handleChange = ({error}) => {
    if (error) {
      this.setState({errorMessage: error.message});
    }
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    if (this.props.stripe) {
      this.props.stripe.createToken().then(this.props.handleResult);
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };
  
  render() {
    return (
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <Row className="split-form">
          <Col>
            Card number
            <CardNumberElement
              {...createOptions()}
              onChange={this.handleChange}
            />
          </Col>
          <Col>
            Expiration date
            <CardExpiryElement
              {...createOptions()}
              onChange={this.handleChange}
            />
          </Col>
        </Row>
        <Row className="split-form">
          <Col>
            CVC
            <CardCVCElement {...createOptions()} onChange={this.handleChange} />
          </Col>
          <Col>
            Postal code
            <input
              name="name"
              type="text"
              placeholder="94115"
              className="StripeElement"
              required
            />
          </Col>
        </Row>
        <Row className="error" role="alert">
          {this.state.errorMessage}
        </Row>
        <Button>Pay</Button>
      </Form>
    );
  }
}

const SplitFieldsForm = injectStripe(_SplitFieldsForm);

export class SplitFieldsDemo extends Component {
  render() {
    return (
      <StripeProvider apiKey={STRIPE_PUBLISHABLE}>
        <Elements>
          <SplitFieldsForm handleResult={this.props.handleResult} />
        </Elements>
      </StripeProvider>
    );
  }
}

export default SplitFieldsDemo