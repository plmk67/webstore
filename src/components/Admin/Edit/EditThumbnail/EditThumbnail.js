import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { 
    Card, 
    CardImg, 
    CardBlock,
    CardTitle, 
    CardSubtitle, 
    Button, 
     } from 'reactstrap';

class editThumbnail extends Component {
    state = {
        redirect: false
    }

    handleOnClick = () => {
        this.setState({redirect: true})    
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
                        <CardBlock>
                            <CardTitle><strong>{this.props.name}</strong></CardTitle>
                            <CardSubtitle>${this.props.price}</CardSubtitle>
                            <div style={{textAlign: "center"}} >
                                <Button color="outline-info">Edit</Button>
                                <Button color="outline-danger">Delete</Button>
                            </div>
                        </CardBlock>
                    </Card>
                </div>
        )
    }

}


export default editThumbnail