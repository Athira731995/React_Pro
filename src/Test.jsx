import React, { Component } from 'react'

export default class Test extends Component {

    constructor(props){
        super(props)
        console.log("constructor of child component");
        this.state={name:"This is a Test Title",users:[]}
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("++++++++++++Child:Get Derived State from Props called...");
        console.log("*******",nextProps.data);
        console.log(prevState);
        // return {name:nextProps.data}
        return null
    }
    shouldComponentUpdate(nextProps, nextState) {
        return true

     }
     getSnapshotBeforeUpdate(){
         console.log("Get snapshot before update....");
         return null
     }
    componentDidMount(){
        console.log("Child:  Componet Did Mount of Child Componet  ");
        // setTimeout(()=>{
        //         this.setState({name:"Child Says hello"})
        // },3000)
        fetch("https://jsonplaceholder.typicode.com/users").then(data=>data.json())
        .then((data)=>this.setState({users:data}))
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("Componet Did Update of Child Component.............");
        
    }

    componentWillUnmount(){
        console.log("Destroying... Test Componet");
        console.log("Code cleanups .......");
    }
  render() {
    return (<>
    <div>Test</div>
    {console.log("***************render function of child*****************")}
    <p>Name:{this.state.name}</p>
    {this.state.users.map(item=>item["email"])}
 
    </>
      
    )
  }
}
