import React from 'react';
import classes from './Backdrop.module.css';

const backdrop = (props) => (
    props.show ? <div className={classes.Backdrop}>
        <button 
            onClick={props.click}>close
        </button>
    </div> : null
);

export default backdrop;