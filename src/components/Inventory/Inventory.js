import React, { Component } from 'react';
import axios from 'axios';
import { Table, Container, Input, Button} from 'reactstrap';
import classes from './Inventory.module.css'

class Inventory extends Component {
    state = {
        products: [],
        inventory: []
    }

    componentDidMount () {
        axios.get('https://ecommerce-1f552.firebaseio.com/Product.json')
        .then(response => {
          
         console.log(response)
         const fetchedProduct = [];
         const fetchedInventory = []
        
         //TODO figure out how this bypassed the id issue with Firebase
         //Answer: grabbed key to create a listed Array head, pushed the rest of data into
         for (let key in response.data) {
            console.log(key)
            fetchedProduct.push({
              ...response.data[key],
              id: key
            });
         }

         for (let key in response.data) {
            fetchedInventory.push({
              id: key,
              productName: response.data[key].name,
              inventory: response.data[key].inventory
            });
         }

         this.setState({products: fetchedProduct, inventory: fetchedInventory})
         console.log(this.state.products)
        } )
        .catch( error => console.log(error))
      }

    //testing how to access nested States
    inputChangedHandler = (event, inputIdentifier ) => {    
        let inventory = [...this.state.inventory]     
        inventory[inputIdentifier].inventory = event.target.value
        this.setState({inventory})
    }
    
    updateInventoryHandler = () => {
        Object.values(this.state.inventory).map( item => (
        
            axios.put(
                'https://ecommerce-1f552.firebaseio.com/Product/'+ item.id +'/inventory.json',
                item.inventory)
                .then( response => 
                    console.log(response))
                .catch ( error => 
                    console.log(error))
            )
        )        
    }  

    render(){

        return(
            <div className ={classes.Inventory}>
                <Container style={{maxWidth: '750px', minWidth: '500px'}}>
                    <Table bordered hover>
                        <thead>
                            <tr>
                                <th md={6} style={{width: '90%'}}>Product Name</th>
                                <th md={2} style={{width: '10%'}}>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.products.map( (product, index) => (
                               <tr key={product.id}  >
                                    <td > 
                                        {product.name}
                                    </td>
                                    <td>  
                                        <Input style={{textAlign: 'center'}} type="number" placeholder={product.inventory} onChange={(event) => this.inputChangedHandler(event, index)}/>
                                    </td>
                                </tr>                               
                            ))}
                        </tbody>
                    </Table>

                     <div className={classes.Button}>
                        <Button onClick={(index) => this.updateInventoryHandler(index)}>Update Inventory</Button>
                    </div>
                </Container>    
            </div>
            )}
}
export default Inventory