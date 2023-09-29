// import { useFormik } from 'formik'
// import React from 'react'
// import { json } from 'react-router-dom';
// import Swal from 'sweetalert2'
// import productData from './dummydata';

// const Product = () => {
    

//     const product = useFormik({
//         "title": "",
//         "price": "",
//         "brand": "",
//         "model": "",
//         "category": ""
//     })}
    
//     // onsubmit : async(values,{resetform}) =>
//     // {
//     //     console.log(values);
//     //     resetform();
//     // const res=  await fetch('http://localhost:5000/product/add',
//     //     {
//     //         method:'POST',
//     //         body: JSON.stringify(values),
//     //         headers : {'Content-Type' :'application/json'}


//     //     })
    


//     return (
  
//     <div className='container bg-body-secondary'>
//     <div className='col-md-6 mx-auto'>
//     <div className='card'>  
//     <div className='card-body'>   
//     <header className='heading-1 text-center text-white bg-dark p-5 '>
//     <h1> PRODUCT DETAILS </h1>
    
//     </header>    <label className='1 mt-4'> Product Title</label>
//     <input type = "text" className='form-control'  placeholder="Product  Title ">
//     </input>
//     <label>  PRICE </label>
//     <input type = "text" className='form-control' placeholder="PRICE ">
//     </input>
//     <label>  BRAND NAME </label>
//     <input type = "text"className='form-control'  placeholder="BRAND "> 
//     </input>
//     <label>  model </label>
//     <input type = "text" className='form-control' placeholder="Product model">
//     </input>
    
//     <label>  CATEGORY </label>
//     <input type = "text" className='form-control' placeholder="Product Name">
//     </input>
    
//     <button onsubmit={productData.onsubmit} className='btn btn-danger'>  SUBMIT </button>

//     </div>
//     </div>
//     </div>
//     </div>
//   )
// }

// export default Product