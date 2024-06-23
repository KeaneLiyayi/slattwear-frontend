import React, { useEffect, useState } from 'react'

const useCart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || []
        setCart(savedCart);
    }, [])
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))


    }, [cart])

    const addItem = (item) => {
        setCart(prevItems => [...prevItems, item]);
    }

    const removeItem = (itemToRemove) => {
        setCart(prevItems => prevItems.filter(item => item._id !== itemToRemove._id)

        )
    }

    const clearCart = () => {
        setCart([])
    }


    return {
        cart, addItem, removeItem, clearCart
    }
}

export default useCart
