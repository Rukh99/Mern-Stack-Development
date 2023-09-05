import React, { useState } from 'react'
import productData from './dummydata'

const Productlisting = () => {


  const [productArray, setProductsArray] = useState(productData);

  const brands = ['asus', 'dell', 'apple']
  const searchProduct = (e) => {
    const search = e.target.value;
    const filteredData = productData.filter((product) => { return product.model.toLowerCase().includes(search.toLowerCase()) });

    setProductsArray(filteredData);

  };
  const filterBrand = (e) => {
    const search = e.target.value;
    const filteredData = productData.filter((product) => { return product.brand.toLowerCase===(search.toLowerCase()) });

    setProductsArray(filteredData);

  }


  return (
    <div>

      <header className='bg-dark'>
        <div className='container py-5'>
          <h1 className='text-center mb-5 text-white fw-bold'>Product Listing </h1>
          <input type='text' className="form-control w-75 m-auto" onChange={searchProduct} />
        </div>
      </header>
      <div className='row'>
        <div className='col-3'>
          <div className='card'>
            <div className='card-body'>
              <h3> Filter options </h3>

              <select className='form-control' onChange={filterBrand}>
                <option value="">select brand </option>
                {brands.map((b) => (<option value={b}>{b}</option>))}
              </select>

            </div>
          </div>
        </div>
        <div className='col-9'>
          <div className='container-fluid'>
            <h1> Product Listing </h1>
            <div className='row'>

              {productArray.map((product) => (
                <div className='col-md-3'>
                  <div className='card' style={{ overflow: 'hidden' }}>
                    <img src={product.image} className='my-card-img' alt='...' />
                    <div className='card-body'>
                      <p className='text-muted'>{product.sponsored ? 'sponsored' : ''}</p>
                      <h4> {product.brand}</h4>
                      <h3> {product.model}</h3>
                      <h2> {product.price}</h2>


                    </div>
                  </div>
                </div>


              ))}
            </div>

          </div>




        </div>



      </div>


    </div>

  )
}

export default Productlisting;
