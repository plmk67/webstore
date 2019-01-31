import React from 'react';
import classes from './ProductThumbnail.module.css'

const productThumbnail = (props) => (
    <div className={classes.ProductThumbnail}>
        <img 
            key={props.id} 
            src={props.src}
            alt={props.alt}/>
    </div>
)

export default productThumbnail