import React, { Component } from 'react';
import ProductList from './components/ProductList';
import MyContext from './MyContext';


export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
            cars: {
                car001: { name: 'Honda', price: 100 },
                car002: { name: 'BMW', price: 150 },
                car003: { name: 'Mercedes', price: 200 }
            }
        }
    }

    render() {
        return (
            <MyContext.Provider value={{
                cars: this.state.cars,
                incrementCarPrice: (selectedID) => {
                    // a simple method that manipulates the state
                    const cars = Object.assign({}, this.state.cars);
                    cars[selectedID].price = cars[selectedID].price + 1;
                    this.setState({
                        cars
                    });
                },
                decrementCarPrice: (selectedID) => {
                    // a simple method that manipulates the state
                    const cars = Object.assign({}, this.state.cars);
                    cars[selectedID].price = cars[selectedID].price - 1;
                    this.setState({
                        cars
                    });
                }
            }}>
                <div className="App">
                    <header className="App-header">
                        {/* <img src={logo} className="App-logo" alt="logo" /> */}
                        <h1 className="App-title">Welcome to my web store</h1>
                    </header>
                    {/* Pass props twice */}
                    <ProductList />
                </div>
            </MyContext.Provider>
        );
    }
}