import React, { Component} from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, FormControl, Button, Modal} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { addToCart } from '../../Cart/cartActions'
import classes from './Product.module.css'
 
class Product extends Component {
  
  state = {
    hero_image: this.props.product.product_image,
    shopping_cart_input: 1,
    update_order: false,
    order: {},
    added_to_cart: this.props.cart.filter(item => item.item.product_sku === this.props.product.product_sku).length > 0,
  }

  handleImageChange = (payload) => {
    this.setState({
      hero_image: payload.image
    })
  }

  handleQuantityInput = (event) => {
    this.setState({
      shopping_cart_input: parseInt(event.target.value)
    })
  }

  handleAddToCart = (payload) => {
  
    if (this.state.added_to_cart === false) {
      this.setState({
        order: payload,
        added_to_cart: true
      })
      this.props.addToCart(payload)

    } else if(this.state.added_to_cart === true 
      && this.props.cart.filter(item => item.item.product_sku === this.props.product.product_sku)[0].item.order_quantity !== this.state.shopping_cart_input){
      console.log('shopping input updated')

    } else {
      console.log('quantity is the same')
    }

    // console.log('shopping cart input:', this.state.shopping_cart_input)
    // console.log('product sku:', this.props.product.product_sku )
    // console.log('checking if item has been added', this.props.cart.filter(item => item.item.product_sku === this.props.product.product_sku).length > 0)
    // // console.log(this.props.cart.filter(item => item.item.product_sku === this.props.product.product_sku).length > 0)
  }

  render() {

    const images = this.props.product.product_image
    const {product} = this.props
    const item = {
      product_sku: product.product_sku,
      product_name: product.product_name,
      product_image: product.product_image[0],
      product_price: product.product_price,
      order_quantity: this.state.shopping_cart_input,
      order_cost: product.product_price * this.state.shopping_cart_input
    }

    return (
      
      <Container className={classes.Product}>
        <Row 
        className={classes.Header}
        as={Link} 
        to={`/collection`}>
          <img 
          src="//cdn.shopify.com/s/files/1/0818/5483/t/10/assets/cc-logo.svg?713"
          alt='Store Logo'></img>
        </Row>

        <Row >
          <Container className={classes.Product_Info}>
            <Row className={classes.Product_Info__Gallery}>
              <Col>
                <Row>
                  <img
                  src={this.state.hero_image}
                  alt={this.state.hero_image}
                  ></img>
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
                  <span>${product.product_price.toFixed(2)}</span>
                </Row>
                <Row className={classes.Quantity}>
                  <Row>
                    <span>Quantity</span>
                  </Row>
                  <Row className={classes.Quantity_InputField}>
                    <FormControl onChange={this.handleQuantityInput} type="number" min={0} max={20} placeholder={1} defaultValue={this.state.shopping_cart_input}></FormControl>
                  </Row>
                </Row>
                <Row className={classes.Add_To_Cart}>
                  {/* TDL fix Add to Cart color */}
                  <Button onClick={()=> this.handleAddToCart({item})} variant="dark">Add to Cart</Button>
                  <Button variant="secondary" as={Link} to={`/cart`}>
                    Go to Checkout</Button>
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
        <Row className={classes.Product__PreviousPage}>
            <Col as={Link} to ={`/collection`}>Back to Collections</Col>
        </Row>
      </Container>
    )
  }
}

const mapToState = (state, ownProps) => {
  const productId = ownProps.match.params.ProductName

  let product ={};
  let cart = state.cart;

  if (productId && state.product.length > 0) {
    product = state.product.filter(product => productId === product.product_name)[0]
  }

  return {
    product,
    cart
  }
}

const mapDispatchToProps = {
  addToCart
}

export default connect(mapToState, mapDispatchToProps)(Product)
