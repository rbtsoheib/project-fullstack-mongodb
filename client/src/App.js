import React from 'react';
import './App.css';
import ProductList from './Components/ProductList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our Store</h1>
        <ProductList />
      </header>
    </div>
  );
}

export default App;
