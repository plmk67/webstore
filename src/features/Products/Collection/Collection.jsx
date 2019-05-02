import React, {Component} from 'react'
import classes from './Collection.module.css'
import { Container, Row, Col, Card, CardImg, CardText} from 'react-bootstrap';
import Footer from '../../../app/components/layout/Footer/Footer'
import { Link } from 'react-router-dom'



class Collection extends Component {
  render(){

  const Products = {
    Product_Name: 'Deadstock Koh-I-Noor Rapidomatic Pencil - 0.3mm',
    Product_Price: '$20.00',
    Product_Description: 'The vintage 90s Koh-I-Noor Rapidomatic mechanical pencils were an industry standard instrument used by design students, drafters, and engineers. Known for its balance and simple aesthetic, these deadstock Rapidomatic pencils feature a diamond-cut grip area, lead degree indicator and a red hexagonal body.',
    Bulletpoint: [{
      point1: 'Model Number: 5633',
      point2: 'Lead Diameter: 0.3mm',
      point3: 'Deadstock, Brand new in original package',
    }],
    Product_Image: 'https://cdn.shopify.com/s/files/1/0818/5483/products/DSC05636_1024x1024.jpg?v=1496378162'
  }

  const greeting = 'This works'

  return (

    <div>
        <Container className={classes.Collection}>
           <Row className={classes.Header}>
              <h1>corduroi club</h1>
            </Row>
            <Row className={classes.ProductList}>
              <Container >
                <Row>
                  <Col >
                    <Card className={classes.ProductList__Card}>
                      <Row as={Link}
                          to={{pathname:`/collection/product/${Products.Product_Name}`, state: {greeting: greeting} }}
                          >
                        <CardImg
                          className={classes.ProductList__Card__Img}
                          src={Products.Product_Image}
                          alt="blue hat"
                          />
                      </Row>
                      <Row>
                        <Card.Text 
                        className={classes.ProductList__ProductName}>{Products.Product_Name}</Card.Text>
                        <Card.Text className={classes.ProductList__ProductPrice}>{Products.Product_Price}</Card.Text>
                      </Row>
                    </Card>
                  </Col>

                </Row>

              </Container>
            </Row>
            <Row>
                <Footer /> 
            </Row>

        </Container>
    </div>
  )
  }
}

export default Collection
