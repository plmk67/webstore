import React from 'react'
import { Container, Row, NavItem} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import classes from './HomePage.module.css'
import Footer from '../../app/components/layout/Footer/Footer'


const HomePage = ({history}) => {
    return (
      
        <Container className={classes.HomePage}>
            
            <Row as={Link} to={'/collection'} className={classes.Cover}>
                <img
                    src="https://cdn.shopify.com/s/files/1/0818/5483/t/10/assets/slide_1.jpg?713"
                    alt="kids"
                />
            </Row>

            <Row className={classes.Title}>
                <img src="//cdn.shopify.com/s/files/1/0818/5483/t/10/assets/cc-logo.svg?713" alt=""/>
            </Row>

            <Row className={classes.StoreDescription}>

                <Row className={classes.StoreDescription__Text}>
                    <strong>[corduroi club]</strong> is derived from the French term “cœur du roi” meaning the heart of the King—the pursuit of excellence and good work in our daily lives. This stands as the sole focus of the brand in creating “everyday wearables” where the simpleness of the garments highlights the uniqueness and beauty of each individual.
                    <br/>
                    <br/>
                    Everyday goods for extraordinary people.
                </Row>

                <Row className={classes.StoreDescription__Link}>
                    <li>
                        <NavItem as={Link} to={'/'}>Home</NavItem>
                    </li>
                    <li>
                        <NavItem>Blog</NavItem>
                    </li>
                    <li>
                        <NavItem>Contact Us</NavItem>
                    </li>
                    <li>
                        <NavItem as={Link} to={'/collection'}>Online Shop</NavItem>
                    </li>
                </Row>
            </Row>

            <Row className={classes.Footer}>
                <Footer /> 
            </Row>
        </Container>
    )
}

export default HomePage