import React, { Component} from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, FormControl, Button, Modal} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { addToCart } from '../../Checkout/checkoutActions'
import classes from './Product.module.css'
 
class Product extends Component {
  
  state = {
    hero_image: this.props.product.product_image,
    shopping_cart_input: null,
    update_order: false,
    order: {},
    show_modal: false,
    image_modal: false
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
    this.setState({show_modal: false})
  }

  handleImageModal = () => {
    this.setState({image_modal: true})
  }

  render() {

    const images = this.props.product.product_image
    const {product} = this.props
    const item = {
      product_sku: product.product_sku,
      product_name: product.product_name,
      product_image: product.product_image[0],
      product_price: product.product_price,
      order_quantity: this.state.shopping_cart_input
    }
    const order_quantity = this.state.shopping_cart_input;
  
    console.log(this.state.shopping_cart_input)

    return (
      
      <Container className={classes.Product}>
        <Modal
          show={this.state.image_modal}>
          <Row className={classes.Product__ImageModal}>
            <img
                src={product.product_image[0]}
                alt={product.product_sku}
                />
          </Row>
          
        </Modal>
        <Modal 
          className={classes.Product_Modal} 
          show={this.state.show_modal} 
          onHide={this.handleClose}>
            <Row>
              <Col className={classes.Product__Modal_Body}>
                <h4>Added to Cart</h4>
              </Col>
              <Col className={classes.Product__Modal_Image}>
                <img
                src={product.product_image[0]}
                alt={product.product_sku}
                />
                <h6>{product.product_name} </h6>
              </Col>
              
            </Row>
            <Row className={classes.Product__Modal_Buttons}>
              <Button 
              variant="secondary"
              // as={Link} 
              // to={`/collection`}
              
              onClick={this.handleClose}>
                Continue Shopping
              </Button>
              <Button 
                variant="dark"
                // as={Link} 
                // to={`/checkout`}
                onClick={this.handleClose}>
                Go to Checkout
              </Button>
            </Row>
        </Modal>

        <Row className={classes.Header}>
          <img
          src="//cdn.shopify.com/s/files/1/0818/5483/t/10/assets/cc-logo.svg?713"
          alt='Store Logo'></img>
        </Row>
        {/* temporary testing zone */}
        <Row> 
          <h4> Cart: {this.state.checkout_quantity}</h4>
          <Button as={Link} to={`/checkout`}>Go to Checkout</Button>
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
