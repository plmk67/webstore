import React, { Component } from 'react';
import axios from 'axios';
import EditThumbnail from '../Admin/Edit/EditThumbnail/EditThumbnail';
import Aux from '../../hoc/Aux'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
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

    //TODO figure out why ID came back with Apostrophes
    delete(id){
        const idraw = {id};
        const idcode = JSON.stringify(idraw.id).replace(/"/g,'')
        let url = 'https://ecommerce-1f552.firebaseio.com/Product/'+ idcode + '.json';
    
        console.log(url)
        axios.delete(url)
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
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">Edit Products</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                        Options
                        </DropdownToggle>
                        <DropdownMenu right>
                        <DropdownItem>
                            Option 1
                        </DropdownItem>
                        <DropdownItem>
                            Option 2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                            Reset
                        </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    </Nav>
                </Collapse>
                </Navbar>
                <Container fluid>
                    <Row>
                        {this.state.products.map( product => (
                            <Col sm="4" >
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

        );
    }
}

export default Product;

