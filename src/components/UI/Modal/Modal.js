import React from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux'
import Backdrop from '../Backdrop/Backdrop'

const modal = (props) => (
    <Aux>
        <Backdrop 
            show={props.show} 
            click={props.click}/>
        <div
            className ={classes.Modal}
            style={{ 
                opacity: props.show ? '1' : '0'
            }}>
            
        </div>

    </Aux>
    

);

export default modal;