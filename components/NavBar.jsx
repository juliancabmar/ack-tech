import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const NavBar = () => {
  const { showCart, setShowCart, totalQuantities, resetQty } = useStateContext();

  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href="/">Adjucama Store</Link>
      </p>
      <button type='button' className='cart-icon' onClick={() => {setShowCart(true); resetQty()}}>
        <AiOutlineShopping />
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>

      { showCart && <Cart /> }
    </div>
  )
}

export default NavBar
