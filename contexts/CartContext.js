import useCart from '@/hooks/useCart';
import { createContext, useContext } from 'react';

const CartContext = createContext()
export const useShoppingCartContext = () => useContext(CartContext)

export default function CartProvider({ children }) {
    const shoppingCart = useCart()


    return (
        <CartContext.Provider value={shoppingCart}>
            {children}
        </CartContext.Provider>
    )
}