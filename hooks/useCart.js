
import React, { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';

const useCart = () => {
    const getInitialCart = () => {
        if (typeof window !== 'undefined' && window.localStorage) {
            return JSON.parse(localStorage.getItem('cart')) || [];
        }
        return [];
    };

    const [cart, setCart] = useState(getInitialCart());
    const initialRender = useRef(true);

    useEffect(() => {
        const savedCart = getInitialCart();
        if (savedCart.length === 0) {
            setCart([...cart, ...savedCart]);
        }
    }, []);

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
            return;
        }
        if (typeof window !== 'undefined' && window.localStorage) {
            window.localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);

    const addItem = (product) => {
        if (cart.some(item => item._id === product._id)) {
            return toast.error("Item already exists in cart");
        }
        setCart(prevItems => [...prevItems, product]);



        toast.success("Item added successfully");
    };

    const removeItem = (itemToRemove) => {
        setCart(prevItems => prevItems.filter(item => item._id !== itemToRemove._id));
    };

    const clearCart = () => {
        setCart([]);
    };

    return {
        cart, addItem, removeItem, clearCart
    };
};

export default useCart;
