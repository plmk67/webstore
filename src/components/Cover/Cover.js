import React, { Component } from 'react';
import classes from './Cover.module.css'
import { Redirect } from 'react-router-dom'




class Cover extends Component {
    
    state = {
        redirect: false
    }

    handleOnClick = () => {
        this.setState({redirect: true})
    }
    

    render() {
        if(this.state.redirect) {
            return <Redirect push to="/productpage" />;
        }
        
        return(
            <div 
            className={classes.Cover}>
                <img src="https://timedotcom.files.wordpress.com/2013/10/lon28321.jpg?quality=85&w=838" 
                alt="black white congregation food"
                onClick={this.handleOnClick} 
                ></img>
            </div>

        )
    }
    
   
}

export default Cover