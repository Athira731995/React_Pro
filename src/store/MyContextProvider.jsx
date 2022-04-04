import React, { Component } from 'react'
import { MyContext } from './MyContext'

export default class MyContextProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cars: {
                1001: {
                    name: "Honda",
                    price: 1200000
                },
                1002: {
                    name: "BMW",
                    price: 2000000
                },
                1003: {
                    name: "Benz",
                    price: 1200000
                }

            }
        }
        this.incPrice = this.incrementCarPrice.bind(this)
        this.decPrice = this.decrementCarPrice.bind(this)
    

    }
    incrementCarPrice(id) {
        let cars = Object.assign({}, this.state.cars)
        cars[id]["price"] += 10000
        console.log(cars);
        this.setState({ cars })

    }
    decrementCarPrice(id) {
        let cars = Object.assign({}, this.state.cars)
        cars[id]["price"] -= 10000
        console.log(cars);
        this.setState({ cars })

    }
 
    render() {
        return (
           <MyContext.Provider value={{cars:this.state.cars,incPrice:this.incPrice,decPrice:this.decPrice}}>
                {this.props.children}
           </MyContext.Provider>
        )
    }
}
