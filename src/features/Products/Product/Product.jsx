import React, { Component} from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, FormControl, Button} from 'react-bootstrap'
import { addToCart } from '../../Checkout/checkoutActions'
import classes from './Product.module.css'
 
class Product extends Component {
  
  state = {
    hero_image: this.props.product.product_image,
    shopping_cart_input: null,
    checkout_quantity: 0,
    update_order: false,
    order: {} 
  }

  handleImageChange = (payload) => {
    this.setState({
      hero_image: payload.image
    })
  }

  handleQuantityInput = (event) => {
    this.setState({
      shopping_cart_input: event.target.value
    })
  }

  handleAddToCart = (payload, order_quantity) => {
    
    this.setState({
      order: payload,
      checkout_quantity: order_quantity
    })

    this.props.addToCart(payload)
  }

  render() {

    const images = this.props.product.product_image
    const {product} = this.props
    const item = {
      product_sku: product.product_sku,
      product_name: product.product_name,
      product_image: product.product_image[0],
      order_quantity: this.state.shopping_cart
    }
    const order_quantity = this.state.shopping_cart_input;
  
    console.log(this.order)

    return (
      <Container className={classes.Product}>
        <Row className={classes.Header}>
          <img
          src="//cdn.shopify.com/s/files/1/0818/5483/t/10/assets/cc-logo.svg?713"
          alt='Store Logo'></img>
        </Row>
        {/* temporary testing zone */}
        <Row> 
          <h4> Cart: {this.state.checkout_quantity}</h4>
        </Row>
        
        <Row >
          <Container className={classes.Product_Info}>
            <Row className={classes.Product_Info__Gallery}>
              <Col>
                <Row>
                  <img
                  src={this.state.hero_image}
                  alt={this.state.hero_image}></img>
                </Row>
                <Row className={classes.Product_Info_Alt_Image}>
                  {images && images.map(image => 
                    <img key={image} onClick={() => this.handleImageChange({image})} src={image}></img>)}
                </Row>
              </Col>

            </Row>
            <Row className={classes.Product_Info__Detail}>
              <Col>
                <Row>
                  <h5>{product.product_name}</h5>
                </Row>
                <Row className={classes.Price}>
                  <span>{product.product_price}</span>
                </Row>
                <Row className={classes.Quantity}>
                  <Row>
                    <span>Quantity</span>
                  </Row>
                  <Row className={classes.Quantity_InputField}>
                    {/* TDL fix placeholder text */}
                    <FormControl onChange={this.handleQuantityInput} type="number" min={0} max={20} placeholder={1}></FormControl>
                  </Row>
                </Row>
                <Row className={classes.Add_To_Cart}>
                  {/* TDL fix Add to Cart color */}
                  <Button onClick={()=> this.handleAddToCart({item})} variant="dark">Add to Cart</Button>
                </Row>
                <Row>
                    <p>
                      {product.product_description}
                    </p>
                </Row>
                <Row>
                  <ul>
                    {product.bulletpoint.map(bulletpoint => <li>{bulletpoint}</li>)}
                  </ul>
                </Row>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    )
  }
}

const mapToState = (state, ownProps) => {
  const productId = ownProps.match.params.ProductName

  let product ={};
  let order = state.order;

  if (productId && state.product.length > 0) {
    product = state.product.filter(product => productId === product.product_name)[0]
  }

  return {
    product
  }

}

const mapDispatchToProps = {
  addToCart
}

export default connect(mapToState, mapDispatchToProps)(Product)
