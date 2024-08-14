import { useShoppingCartContext } from '@/contexts/CartContext'
import Image from 'next/image'
import React from 'react'

const CheckoutItems = () => {
    const { cart } = useShoppingCartContext()


    return (

        <section className='w-[500px] border'>
            <div className="mx-auto  max-w-screen-xl w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="mx-auto w-full ">

                    <div className="mt-8">
                        <ul className="space-y-4  w-full">
                            {cart.map((item, index) => (
                                <li key={index} className="flex my-2 p-1 w-full rounded-lg border items-center gap-4">
                                    <Image
                                        src="https://i.pinimg.com/564x/11/3c/f1/113cf1231fb5aadb54e40b4a26681be9.jpg"
                                        alt={item.name}
                                        className="h-16 w-16 rounded object-cover"
                                    />
                                    <div className="flex flex-1 items-center gap-4">
                                        <div>
                                            <h3 className="text-sm text-gray-900">{item.title}</h3>
                                            <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                                <div>
                                                    <dt className="inline">Size:</dt>
                                                    <dd className="inline">Small</dd>
                                                </div>
                                                <div>
                                                    <dt className="inline text-orange-500 font-semibold text-xs">
                                                        Ksh {item.price}
                                                    </dt>
                                                </div>
                                            </dl>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CheckoutItems
