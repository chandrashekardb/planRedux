import React from 'react'

const Header = (props) => {
   console.log("HOMe",props.data);
  return (
    <>   
    <div className="add-to-cart">
        <span className='add-num-cart'>{props.data.length}</span>
        <img src="../cart.png" alt="cart" />
    </div>
    </>
  )
}

export default Header