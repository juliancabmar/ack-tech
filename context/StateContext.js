import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  const incQty = () => {
    setQty((prevQty) => prevQty + 1)
  }
  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1
    }
    )
  }
  const resetQty = () => {
    setQty(1)
  }

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id);
    
    setTotalPrice((prevTotalPrice) => prevTotalPrice + (product.price * quantity));
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    
    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity
          }
        }
      })

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, {...product}])
    }
    toast.success(`${qty} ${product.name} added to the cart.`);
  }

  const toggleCartItemQuantity = (id, value) => {

    if (value === 'inc') {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === id) {
          cartProduct.quantity += 1;
          setTotalPrice((prevTotalPrice) => prevTotalPrice + cartProduct.price);
          setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
        }
        return cartProduct
      })
      setCartItems(updatedCartItems);
      
    }
    else if (value === 'dec') {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === id) {
          if (cartProduct.quantity > 1) {
            cartProduct.quantity -= 1;
            setTotalPrice((prevTotalPrice) => prevTotalPrice - cartProduct.price);
            setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
          }
          
        }
        return cartProduct
      })
      setCartItems(updatedCartItems);
    }
  }

  const onRemove = (id) => {
    const product = cartItems.find((item) => item._id === id);
    const newCartItems = cartItems.filter((item) => item._id != id);
    setTotalPrice((prevTotalPrice) => prevTotalPrice - (product.price * product.quantity));
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - product.quantity);
    setCartItems(newCartItems);
  }

  return (
    <Context.Provider value={{
      showCart,
      setShowCart,
      cartItems,
      totalPrice,
      totalQuantities,
      qty,
      incQty,
      decQty,
      resetQty,
      onAdd,
      onRemove,
      toggleCartItemQuantity
    }

    }>
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context); 
