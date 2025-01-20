'use client'
import { Product } from "@/interfaces/Product";
import { createContext, useContext, useEffect, useState } from "react";
interface CartProduct extends Product {
  quantity:number
} 

interface CartContextType {
  cart: CartProduct[],
  addToCart: (item:Product) => void  
}

export const CartContext = createContext<CartContextType>({cart:[],addToCart:() => {}})


export const CartContextProvider = ({children}:{children:React.ReactNode}) => {
  const [cart, setCart] = useState<CartProduct[]>([])
  
  useEffect(() => {
    const cartData = localStorage.getItem('cart')
    if (cartData) setCart(JSON.parse(cartData))
  }, [])
  
  useEffect(() => {localStorage.setItem('cart',JSON.stringify(cart))} ,[cart])
  
  const addToCart = (item:Product) => {
    const alreadyInCart = cart.find((prod) => prod._id === item._id)
    if (!alreadyInCart) {
      setCart([...cart, { ...item, quantity: 1 }]);
    } 
    else {
      setCart(
        cart.map((cartItem) =>
          cartItem._id == item._id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
      )
    }
  }
  

  return (
    <CartContext.Provider value={{cart,addToCart}}>
        {children}
    </CartContext.Provider>
  )
}


export const useCart = () => useContext(CartContext)

