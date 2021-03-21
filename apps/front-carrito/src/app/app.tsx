import React, { useState, useEffect } from 'react';
import {environment} from '../environments/environment';
import styles from './app.module.css';
import ResultPage from './result-page/result-page'

const APIURL = environment.apiUrl;

export function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(APIURL)
    .then(response => response.json())
    .then((response) => {
      setProducts(response);
    })
    .catch((error) => {
      console.log("error", error)
      setProducts([]);
    });
  }, []);
  
  return (
    <div className={styles.app}>
      <header>
        <i className='logo'></i>
        <h1>Welcome to front-carrito!</h1>
      </header>
      <main>
        <ResultPage products={products}></ResultPage>
      </main>
    </div>
  );
}

export default App;
