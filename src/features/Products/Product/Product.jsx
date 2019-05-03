import React, { Component} from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, FormControl, Button} from 'react-bootstrap'
import classes from './Product.module.css'
 
class Product extends Component {
  
  state = {
    hero_image: this.props.product.product_image
  }

  handleImageChange = (payload) => {
    this.setState({
      hero_image: payload.image
    })
  }

  render() {

    const images = this.props.product.product_image
    const {product} = this.props

    return (
      <Container className={classes.Product}>
        <Row className={classes.Header}>
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
                  alt={this.state.hero_image}></img>
                </Row>
                <Row className={classes.Product_Info_Alt_Image}>
                  {images && images.map(image => 
                    <img onClick={() => this.handleImageChange({image})} src={image}></img>)}
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
                    <FormControl type="number" min={0} max={20} placeholder={1}></FormControl>
                  </Row>
                </Row>
                <Row className={classes.Add_To_Cart}>
                  {/* TDL fix Add to Cart color */}
                  <Button variant="dark">Add to Cart</Button>
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

  if (productId && state.product.length > 0) {
    product = state.product.filter(product => productId === product.product_name)[0]
  }

  return {
    product
  }
}

export default connect(mapToState)(Product)
