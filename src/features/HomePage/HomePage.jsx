import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import classes from './HomePage.module.css'
import Footer from '../../app/components/layout/Footer/Footer'


const HomePage = ({history}) => {
    return (
      
            <Container className={classes.HomePage}>
            <div className={classes.Cover}>
                <img 
                    src="https://cdn.shopify.com/s/files/1/0818/5483/t/10/assets/slide_1.jpg?713"
                    alt="kids"
                />
            </div>
            
            <div className={classes.Title}>
                <img src="//cdn.shopify.com/s/files/1/0818/5483/t/10/assets/cc-logo.svg?713" alt=""/>
            </div>
            <div className={classes.StoreDescription}>
                <div className={classes.StoreDescription__Text}>
                    <strong>[corduroi club]</strong> is derived from the French term “cœur du roi” meaning the heart of the King—the pursuit of excellence and good work in our daily lives. This stands as the sole focus of the brand in creating “everyday wearables” where the simpleness of the garments highlights the uniqueness and beauty of each individual.
                    <br/>
                    <br/>
                    Everyday goods for extraordinary people.
                </div>
                <div className={classes.StoreDescription__Link}>
                    <li>
                        <a href=''>Home</a>
                    </li>
                    <li>
                        <a href=''>Blog</a>
                    </li>
                    <li>
                        <a href=''>Contact Us</a>
                    </li>
                    <li>
                        <a href=''>Stockist</a>
                    </li>
                    <li>
                        <a href=''>Online Shop</a>
                    </li>
                </div>
            </div>
            <div className={classes.Footer}>
                <Footer/> 
            </div>

                 
        </Container>

        
    )
}

export default HomePage