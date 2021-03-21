import React from 'react'
import PropTypes from 'prop-types'
import { IProducts } from '@nx-desafio-wallmart/api-interface';
import './styles.css'

const Product = ({brand, description, price, discount, discountPercent, image}) => {
  
  const formatNumber = (numero: number) => new Intl.NumberFormat("es-CL").format(numero)

  return (
  <li className="product">
    <img src={`https://${image}`} alt="imagen de producto"></img>
    <p>
      <strong>{brand}</strong> {description}
    </p>
    <div>
      <span>{formatNumber(price-discount)}</span>
      <span>{discountPercent}%</span>
    </div>
    <span>{formatNumber(price)}</span>
    <span><button>Agregar</button></span>
  </li>
  )
}

Product.propTypes = {
  brand: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  discount: PropTypes.number,
  discountPercent: PropTypes.number,
  image: PropTypes.string
}

export default Product