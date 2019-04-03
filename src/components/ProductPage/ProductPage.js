import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './ProductPage.module.css';
import axios from 'axios';
import ProductThumbnail from '../ProductThumbnail/ProductThumbnail';
import { itemsFetchData, createProject } from '../../actions/items';
import Aux from '../../hoc/Aux'

import { Col, Input} from 'reactstrap';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Product extends Component {
    // state = {
    //     products: [],
    // }

    // componentDidMount () {
    //     axios.get('https://ecommerce-1f552.firebaseio.com/Product.json')
    //     .then(response => {
          
    //      const fetchedProduct = [];
        
    //      //TODO figure out how this bypassed the id issue with Firebase
    //      for (let key in response.data) {
    //         fetchedProduct.push({
    //           ...response.data[key],
    //           id: key
    //         });
    //      }

    //      this.setState({products: fetchedProduct})
    //      console.log(this.state.products)
    //     } )
    //     .catch( error => console.log(error))
    //   }

    state = {
        title: '',
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state)
    }

    render () {  
        console.log(this.props.projects)  

        

        return(
            <Aux>
                {this.props.items.map( product => (
                    <Aux>
                    <ProductThumbnail 
                        id={product.id}
                        src={product.images}
                        alt={product.name}
                        price={product.price}
                        name={product.name}
                        />
                    </Aux>
                ))}

                <div>
                    <form onSubmit={this.handleSubmit}>
                        <Col>
                            <Input 
                            type="text" 
                            name="province" 
                            id="content" 
                            placeholder="test"
                            onChange={this.handleChange} />
                        </Col>
                    </form>
                </div>

                {this.props.projects &&
                this.props.projects.map(project => (
                    <Aux key={project.id}>
                        <p>{project.authorFirstName}</p>
                    </Aux>
                ))}
                
            </Aux>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading,
        projects: state.firestore.ordered.projects
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        createProject: (project) => dispatch(createProject(project))
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(Product);

export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'projects'}
    ])
)(Product)