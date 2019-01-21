import React from 'react'
import classes from './ProductDesc.module.css';


const productDesc = (props) => {
   
    return(
        <div className={classes.ProductDesc}>
            <p>Our Wool Watch Cap is manufactured based upon the WWII Naval watch cap design while using the finest unprocessed wool from Germany. Featuring single layer construction with a thicker weave in the body and a more compact weave at the top peak.</p>
            <ul>
                <li>Made in Germany</li>
                <li>100% Virgin Wool</li>
                <li>Contrast knit on top and selvedge cuff</li>
                <li>Machine washable</li>
                <li>18cm top to bottom / One size fits most</li>
            </ul>
        </div>
   )
}

export default productDesc;