import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditThumbnail from '../Admin/Edit/EditThumbnail/EditThumbnail';
import { itemsFetchData }from '../../actions/items';

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
        isOpen: false
    }

    toggle = this.toggle.bind(this);
     
    toggle() {
    this.setState({
        isOpen: !this.state.isOpen
    });
    }

    componentDidMount() {
        this.props.fetchData('https://ecommerce-1f552.firebaseio.com/Product.json');
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
                                {this.props.items.map( item => (
                                    <Col key = {item.id} md={4}>
                                        <EditThumbnail 
                                            id={item.id}
                                            src={item.images}
                                            alt={item.name}
                                            price={item.price}
                                            name={item.name}
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

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

// 1. Send API address to Action.js
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);



