import React from 'react';
import Product from './Product';

function Products(props) {
    const {products} = props;
  return (
    <div className='products'>
      {products.map((product,id)=>(<Product key={id} product={product} />))}
    </div>
  )
}

export default Products
