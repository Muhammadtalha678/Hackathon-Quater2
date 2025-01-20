'use client'
import { Product } from "@/interfaces/Product";
import { createContext, useContext, useEffect, useState } from "react";
interface CartProduct extends Product {
  quantity:number
} 

interface CartContextType {
  cart: CartProduct[],
  addToCart: (item:Product) => void,  
  removeFromCart: (id:string) => void,  
  decreaseFromCart: (id:string) => void,  
}

export const CartContext = createContext<CartContextType>({cart:[],addToCart:() => {},removeFromCart:()=>{},decreaseFromCart:()=>{}})


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

  const removeFromCart = (id: string) => {
    const prodExists = cart.find((e) => e._id === id)
    if (prodExists) {
      const filterCart = cart.filter((e) => e._id !== id)
      setCart(filterCart)
      
    }
  }
  
  const decreaseFromCart = (id:string) => {
    const prodExists = cart.find((e) => e._id === id)
    if (prodExists) {
      setCart(
        cart.map((e) => 
          e._id === id ? {...e,quantity:e.quantity - 1} : e
        )
      )
    }
  }
  

  return (
    <CartContext.Provider value={{cart,addToCart,removeFromCart,decreaseFromCart}}>
        {children}
    </CartContext.Provider>
  )
}


export const useCart = () => useContext(CartContext)

