import React from 'react';
import classes from './ProductSize.module.css';

const productSize = (props) => (
    <div className={classes.ProductSize}> 
        <label>Size</label>
        <select>
            <option value="">Select Size</option>
            <option value="sm">Small</option>
            <option value="md">Medium</option>
            <option value="lg">Large</option>
            <option value="xl">Extra Large</option>
        </select>
    </div>
)
export default productSize;