import React, { Component } from 'react'
import { MyContext } from '../store/MyContext'
import Car from './Car'

export default class Cars extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {(context) => {

          return Object.keys(context.cars).
            map(carid => <Car incPrice={context.incPrice} decPrice={context.decPrice}
              id={carid} car={context.cars[carid]} key={carid} />)
        }}



      </MyContext.Consumer>
    )
  }
}
