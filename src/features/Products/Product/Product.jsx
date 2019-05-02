import React, { Component} from 'react'
import { Container, Row, Col, FormControl, Button} from 'react-bootstrap'
import classes from './Product.module.css'
 
class Product extends Component {
  render() {
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
                <img
                src="https://cdn.shopify.com/s/files/1/0818/5483/products/DSC05636_1024x1024.jpg?v=1496378162"></img>
              </Col>
            </Row>
            <Row className={classes.Product_Info__Detail}>
              <Col>
                <Row>
                  <h3>{this.props.match.params.ProductName}</h3>
                </Row>
                <Row className={classes.Price}>
                  <span>$20.00</span>
                </Row>
                <br/>
                <Row className={classes.Quantity}>
                  <Row>
                    <span>Quantity</span>
                  </Row>
                  <Row>
                    <FormControl type="number" min={0} value={1}></FormControl>
                  </Row>
                </Row>
                <br/>
              
                <Row>
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
