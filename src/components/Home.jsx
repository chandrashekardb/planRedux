import React from 'react'

const Home = (props) => {
   console.log("HOMe",props);
  return (
    <>
    <h1>Home</h1>
   
    <div className="container">
    
    <div className="cart-wrapper">
        <div className="img-wrapper item">
            <img src="../apple.png" alt="logo"/>
        </div>
        <div className="text-wrapper item">
            <span>I-Phone</span>
            <span>Price: $100.00</span>
        </div>
        <div className="btn-wrapper item">
            <button
             onClick={()=>props.addToCartHandler({price:"$100", name:"i Phone14"})
             }>Add to Cart</button>

             <button className='rmtc'
             onClick={()=>props.removeToCartHandler({price:"$100", name:"i Phone14"})
             }>RemoveCart</button>
        </div>
    </div>
    </div>
  
    </>
  )
}

export default Home