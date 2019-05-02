import React, { Component} from 'react'
import { Container, Row, Col, FormControl, Button} from 'react-bootstrap'
import classes from './Product.module.css'
 
class Product extends Component {
  
  state = {
    hero_image: 'https://cdn.shopify.com/s/files/1/0818/5483/products/DSC05636_grande.jpg?v=1496378162'
  }

  handleImageChange = (payload) => {

   
    this.setState({
      hero_image: payload.image
    })
  }

  render() {

    const images = [
     'https://cdn.shopify.com/s/files/1/0818/5483/products/DSC05636_grande.jpg?v=1496378162',
     'https://cdn.shopify.com/s/files/1/0818/5483/products/DSC05640-Edit_grande.jpg?v=1496378162',
     'https://cdn.shopify.com/s/files/1/0818/5483/products/DSC05633-Edit_grande.jpg?v=1496378178'
    ]

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
                  <h5>{this.props.match.params.ProductName}</h5>
                </Row>
                <Row className={classes.Price}>
                  <span>$20.00</span>
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
                      The vintage 90s Koh-I-Noor Rapidomatic mechanical pencils were an industry standard instrument used by design students, drafters, and engineers. Known for its balance and simple aesthetic, these deadstock Rapidomatic pencils feature a diamond-cut grip area, lead degree indicator and a red hexagonal body.
                    </p>
                </Row>
                <Row>
                  <ul>
                    <li>Model Number: 5633</li>
                    <li>Lead Diameter: 0.3mm</li>
                    <li>Deadstock, Brand new in original package</li>
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

export default Product
