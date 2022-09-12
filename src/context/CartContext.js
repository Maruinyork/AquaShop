import React, {useState, useContext} from 'react'
const CartContext = React.createContext([]);

export const useCartContext = ()=> useContext(CartContext)

const CartProvider = ({children}) => {
  const[cart, setCart] = useState([]); //almacenar productos
  
  const addItem = (item, quantity)=>{
    if(isInCart(item.id)){
        setCart(cart.map(product => {
            return product.id === item.id ? {...product, quantity: product.quantity + quantity } : product
        }));
    } else{
        setCart([...cart, {...item, quantity}]);
    }
  }

  console.log('carrito:', cart)

  const clear = ()=> setCart([]);//eliminar productos
  
  const isInCart = (id)=> cart.find(product => product.id === id) ? true : false;
  const removeItem = (id)=> setCart(cart.filter(product=>product.id !==id));

    return (
    <CartContext.Provider value={{ 
        clear,
        isInCart,
        removeItem,
        addItem 
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
