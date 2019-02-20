import React, { Component } from 'react';
import axios from 'axios';
import EditThumbnail from '../Admin/Edit/EditThumbnail/EditThumbnail';
import classes from './Admin.module.css';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col } from 'reactstrap';



class Product extends Component {
    state = {
        products: []
    }

    toggle = this.toggle.bind(this);
     
    toggle() {
    this.setState({
        isOpen: !this.state.isOpen
    });
    }

    componentDidMount () {
        axios.get('https://ecommerce-1f552.firebaseio.com/Product.json')
        .then(response => {
          
         const fetchedProduct = [];
        
         //TODO figure out how this bypassed the id issue with Firebase
         for (let key in response.data) {
            fetchedProduct.push({
              ...response.data[key],
              id: key
            });
         }

         this.setState({products: fetchedProduct})
         console.log(this.state.products)
        } )
        .catch( error => console.log(error))
      } 

    render () {    
        return(
            
            <div>
                <Navbar color="light" light expand="md">
                <NavbarBrand>Welcome Admin!</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/admin/inventory">Inventory</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/admin/newproduct">Create New Product</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                </Navbar>

                <div className="Content" >
                    <Container >
                            <Row >
                                {this.state.products.map( product => (
                                    <Col md={4}>
                                        <EditThumbnail 
                                            id={product.id}
                                            src={product.images}
                                            alt={product.name}
                                            price={product.price}
                                            name={product.name}
                                            />
                                    </Col>   
                                ))}
                            </Row>
                
                    </Container>
                </div>
            </div>
        );
    }
}

export default Product;



