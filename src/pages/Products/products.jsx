import { useState } from 'react'
import ProductTable from '../../components/ProductTable/producttable.jsx'

import './products.css'

const Products = () => {
  const [products, setProducts] = useState();

  // fetch('https://fastdelevery.herokuapp.com/categories')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data
  //       );
  //   })

  return (
    <div className="products-wrapper">
      <ProductTable/>
    </div>
  )
}

export default Products;