import React, { Component } from 'react'
import Test from './Test';

export default class Demo extends Component {
  constructor(props) {
    super(props)
    console.log("Inside the Demo componet constructor");
    this.state = { title: "This is a Message from Parent Component", status: true }
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("**********Get Dervied State from props called");
    return null
  }
  componentDidMount() {
    console.log("Component Did Mount Called.....");
  }
  render() {
    return (
      <div>
        <div>Demo</div>
        {console.log("render function of Demo componet ")}
        In Parent {this.state.title}
        <button onClick={() => this.setState({ title: "Parent Componet  updated the title" })}>Change</button>
        <button onClick={() => this.setState({ status: !this.state.status })}>Add/Remove</button>
         {this.state.status?<Test/>:"Wrong Condition"}




      </div>
    )
  }
}
