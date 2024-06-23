import { useShoppingCartContext } from '@/contexts/CartContext'
import useCart from '@/hooks/useCart'
import Link from 'next/link'
import React from 'react'

const TopProducts = ({ products }) => {
    const { cart, addItem, removeItem, clearCart } = useShoppingCartContext()
    console.log(cart)
    const handleClick = (e, product) => {
        e.preventDefault()
        addItem(product)

    }

    if (products) {

        return (
            <div className='mt-6 '>
                <h1 className='w-full text-center text-3xl font-black mb-2'>TOP PICKS</h1>
                <div className=''>
                    <div className="grid grid-cols-1 gap-2 grid-cols-2 lg:grid-cols-4 lg:gap-8">
                        {
                            products.slice(0, 8).map((item, index) => (
                                <a href="#" className="group block">
                                    <img
                                        src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                                        alt=""
                                        className="aspect-square w-full rounded object-cover"
                                    />
                                    <div className='w-3/4'>
                                        <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                                            {item.title}
                                        </h3>


                                    </div>

                                    <div className="mt-1 flex justify-end items-center">
                                        <div className='flex items-end w-full justify-start'>

                                            <p className="mt-1 text-sm text-orange-700">Ksh {item.price}</p>
                                        </div>


                                        <button type="button" class="inline-flex items-center gap-1.5 rounded-lg border border-green-500 bg-green-500  px-2 md:px-5 py-1 md:py-2.5 text-center text-xs md:text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200 disabled:cursor-not-allowed disabled:border-green-300 disabled:bg-green-300" onClick={(e)=>  handleClick(e, item)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                            </svg>

                                            Add
                                        </button>


                                    </div>
                                </a>

                            ))
                        }







                    </div>

                </div>

            </div>
        )
    }
}

export default TopProducts