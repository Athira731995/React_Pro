import React, { Component } from 'react'

export default class Car extends Component {
  render() {
    return (
      <div>         
          <h3>Car</h3>        
          <h4>{this.props.car["name"]}</h4>      
          <button onClick={()=>this.props.incPrice(this.props.id)}>+</button>
          <h5>{this.props.car["price"]}</h5>
          <button  onClick={()=>this.props.decPrice(this.props.id)}>-</button>
      

      </div>
    )
  }
}
