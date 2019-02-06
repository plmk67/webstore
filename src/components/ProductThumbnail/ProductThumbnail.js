import React from 'react';
import classes from './ProductThumbnail.module.css'

const productThumbnail = (props) => (
    <div className={classes.ProductThumbnail}>
       <div>
         <img 
            key={props.id} 
            src={props.src}
            alt={props.alt}
            onClick={props.clicked}/>
        </div> 
        <div>
            <p><strong>{props.name}</strong></p>
            <p>${props.price}</p>
        </div>

        
    </div>
)

export default productThumbnail