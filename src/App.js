import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import ProductList from './components/ProductList';
import MyContextProvider from './store/MyContextProvider';
import Demo from './Demo';

export default class App extends Component {


  render() {
    return (
      <Demo/>
      // <MyContextProvider>
      // <div>
      //   <h1>Welcome to My Store</h1>
      //   <ProductList/>
      // </div>
      // </MyContextProvider>
    )
  }
}






