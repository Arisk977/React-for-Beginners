import React, { Component } from 'react';
import Navbar from "./components/navbar";
import Card from "./components/card";
import ShoppingCart from './components/shopping-cart';

class App extends Component {
    state = {
        items: []
    }

    addItem = (amount, name, price) => {
        let currentItems = this.state.items;
        currentItems.push({
            amount, 
            name, 
            price
        });
        this.setState({items: currentItems});        
    }

    render() {
        return (<React.Fragment>
            <Navbar />
            <div className='main-container'>
                <div className='product-container'>
                    <Card onAdd={() => this.addItem(1, 'Tomaten', 4.99)} image="tomatoes.jpg" title='Tomaten' description='Tomaten' />
                    <Card onAdd={() => this.addItem(1, 'Gurken', 1.99)} image="cucumbers.jpg" title='Gurken' description='Gurken' />
                    <Card onAdd={() => this.addItem(1, 'Pilze', 2.99)} image="mushrooms.jpg" title='Pilze' description='Pilze' />
                    <Card onAdd={() => this.addItem(1, 'Karotten', 3.49)} image="carrots.jpg" title='Karotten' description='Karotten' />
                </div>
                <ShoppingCart items={this.state.items}/>
            </div>
        </React.Fragment>);
    }
}

export default App;