import React, { Component } from 'react';
import classes from './ProductThumbnail.module.css'
import { Redirect } from 'react-router-dom'

class productThumbnail extends Component {
    state = {
        redirect: false
    }

    handleOnClick = () => {
        this.setState({redirect: true})    
    }

    render(){

        let url = '/product/' + this.props.id;

        if(this.state.redirect) {
            return <Redirect to={url}/>;
        }
        return(

        <div className={classes.ProductThumbnail}>
            <div>
                <img 
                    key={this.props.id} 
                    src={this.props.src}
                    alt={this.props.alt}
                    onClick={this.handleOnClick}/>
                </div> 
                <div>
                    <p><strong>{this.props.name}</strong></p>
                    <p>${this.props.price}</p>
        </div>
    </div>
        )
    }

}


export default productThumbnail