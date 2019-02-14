import React, { Component } from 'react';
import classes from './StoreTitle.module.css';
import { Redirect } from 'react-router-dom';
import Aux from '../../hoc/Aux';

class storeTitle extends Component {
    
    state = {
        redirect: false
    }
    
    render() {
        if(this.state.redirect) {
            
            this.setState({redirect:false})
            return (
                <Aux>
                    <Redirect to="/" />
                    <div className={classes.StoreTitle}>
                        <h1>corduroi club</h1>
                    </div>
                </Aux>
            )
        }

        return(
            <div className={classes.StoreTitle} onClick={()=> this.setState({redirect: true})}>
                <h1>corduroi club</h1>
            </div>
        )
    }
} 

export default storeTitle;