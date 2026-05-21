import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useDispatch} from 'react-redux'
import {addToCart} from './redux/action';
import Header from './components/Header';

function App() {
  const dispatch = useDispatch();

  const product = {
    name: "macbook m5 air",
    type: "laptop",
    color: "midnight blue",
    price: "1 lakh"
  }
  return (
    <div className="App">
      <Header/>
     <button onClick={()=>dispatch(addToCart(product))}>Add to cart</button>
    </div>
  );
}

export default App;
