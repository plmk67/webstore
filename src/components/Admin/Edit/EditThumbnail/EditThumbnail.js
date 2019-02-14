import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { 
    Card, 
    CardImg, 
    CardBody,
    CardTitle, 
    CardSubtitle, 
    Button, 
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter, } from 'reactstrap';
import axios from 'axios';

class editThumbnail extends Component {
    state = {
        redirect: false,
        modal: false
    }

    toggle= () => {
        this.setState(prevState => ({
            modal: !prevState.modal
          }));
      }

    handleOnClick = () => {
        this.setState({redirect: true})    
    }

    deleteProductHandler = event => {
        event.preventDefault();
        let productId = this.props.id;
        let url = 'https://ecommerce-1f552.firebaseio.com/Product/'+ productId + '.json';
        
        console.log("delete request works!")
        // axios.delete(url)
        //     .then( res => {
        //         console.log(res) 
        //         console.log("Product Deleted!")
        //     })
        //     .catch(error => {
        //          console.log(error)
        //     })

        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render(){

        let url = '/product/' + this.props.id;

        if(this.state.redirect) {
            return <Redirect to={url}/>;
        }
        return(
                <div>
                    <Card >
                        <CardImg
                            top 
                            src= {this.props.src}
                            alt={this.props.name}
                            onClick={this.handleOnClick}
                            />
                        <CardBody>
                            <CardTitle><strong>{this.props.name}</strong></CardTitle>
                            <CardSubtitle>${this.props.price}</CardSubtitle>
                            <div style={{textAlign: "center"}} >
                                <Button color="outline-info">Edit</Button>
                                <Button color="outline-danger" onClick={this.toggle}>Delete</Button>
                            </div>
                        </CardBody>
                        <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
                            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                            <ModalBody>
                                Are you sure you want to delete {this.props.name}?
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" onClick={this.deleteProductHandler}>Delete</Button>{' '}
                                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                    </Card>
                </div>
        )
    }

}


export default editThumbnail