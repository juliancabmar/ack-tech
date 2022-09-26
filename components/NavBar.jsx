import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineShopping } from 'react-icons/ai';

import logo from '../public/logo.png';

import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const NavBar = () => {
  const { showCart, setShowCart, totalQuantities, resetQty } = useStateContext();

  return (
    <div className='navbar-container'>
      <Link href="/">
        <Image
          src={logo}
          className='main-logo'
          alt='Ack-Tech'
        />
      </Link>
      
      <button type='button' className='cart-icon' onClick={() => {setShowCart(true); resetQty()}}>
        <AiOutlineShopping />
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>

      { showCart && <Cart /> }
    </div>
  )
}

export default NavBar
