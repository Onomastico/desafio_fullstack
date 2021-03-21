import React from 'react'
import PropTypes from 'prop-types'
import Product from '../product/product'

import './styles.css'

const ResultPage = ({products}) => {
  const productList = <ul>
    {products.map( product => {
      console.log("producto", product);
      return <Product key={product.id} {...product} /> 
    })}
  </ul>  

  return (
    <section className="resultPage">
      {productList}
    </section>
  )
}

ResultPage.propTypes = {
  products: PropTypes.array
}

export default ResultPage