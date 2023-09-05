import React, { useState } from 'react'

const Post = () => {

  let i = 0;
  let j = 1;
  let k = 2;

  const [first, setfirst] = useState(0)
  const [second, setsecond] = useState(1)
  const [third, setthird] = useState(2)
  return (
    <div className='container'>
      <div className='col-md-6 mx-auto'>
        <h1> DOMINOS INDIA </h1>
        <div class="card bg-primary mx-auto d-block border-dark">
          <div class="card-body">
            <header class="f-bold">
              DOMINO'S PIZZA INDIA<i class="fa-solid fa-check"></i> </header>
            <h5 class="card-title"> NEW & SPICY </h5>
            <h6 class="card-subtitle mb-2 text-muted"> 100% Organic </h6>
          </div>
          <div class="row g-0 text-white">
            <div class="col-md-6">
              <img src="https://www.dominos.co.in/great-deals/online-pizza-coupons/images/story_images/evd/evd-199.jpg" class="w-100" alt="..." />


            </div>
            <div class="col-md-6">
              <img src="https://www.dominos.co.in/great-deals/online-pizza-coupons/images/story_images/evd/evd-99.jpg" class="w-100" alt="..." />


            </div>
            <div class="row g-0 text-white">
              <div class="col-md-6">
                <img src="https://www.myweekendplan.asia/wp-content/uploads/2023/02/TOP-20-BEST-DOMINOS-PIZZA-FLAVOURS-IN-MALAYSIA.jpg" class="w-100" alt="..."></img>


              </div>
              <div class="col-md-6">
                <img src="https://images.freekaamaal.com/post_images/1578051207.png" class="w-100" alt="..."></img>

              </div>


              <div class="footer">


                <button className='btn btn-dark' onClick={() => { setfirst(first + 1) }}> {first} likes <i class="fa-solid fa-thumbs-up   p-2"></i> </button>
                <button className='btn btn-dark' onClick={() => { setsecond(second + 1) }}> {second} comment <i class="fa-solid fa-comment  p-2"></i> </button>
                <button className='btn btn-dark' onClick={() => { setthird(third + 1) }}> {third} SHARE <i class="fa-solid fa-share  p-2"></i> </button>
                <textarea area className='form-control' placeholder='comment here' rows={1}></textarea>
              </div>


            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Post;