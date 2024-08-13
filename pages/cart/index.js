import { useShoppingCartContext } from '@/contexts/CartContext';
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Index = () => {
    const { removeItem, cart } = useShoppingCartContext();
    const [quantities, setQuantities] = useState(Array(cart.length).fill(1)); // State to manage quantities

    const handleQuantityChange = (index, quantity) => {
        const newQuantities = [...quantities];
        newQuantities[index] = quantity;
        setQuantities(newQuantities);
    };

    const handleClick = (e, product) => {
        e.preventDefault();
        removeItem(product);
        toast.success('Item deleted successfully')
    };

    const extractPublicId = (url) => {
        // Parse the URL to extract the public ID
        const urlObj = new URL(url);
        const pathParts = urlObj.pathname.split('/');
        const publicIdWithFormat = pathParts.pop();
        const publicId = publicIdWithFormat.split('.')[0]; // Extract public ID
        return publicId;
    }


    return (
        <section className="bg-white py-8 antialiased md:py-4">
            <div className="mx-auto max-w-screen-xl px-4 bg-white 2xl:px-0">
                <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">Shopping Cart</h2>

                <div className="mt-2 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                    <div className="mx-auto w-full  flex-none lg:max-w-2xl xl:max-w-4xl">
                        <div className="">
                            <div className="rounded-lg   bg-white p-4  md:p-4">
                                {cart.map((item, index) => {

                                    const publicId = extractPublicId(item.images[0])
                                    return (
                                        <div key={index} className="flex my-2 p-1 rounded-lg border shadow items-center gap-4">
                                            <div className="relative aspect-square w-[100px]">
                                                <CldImage
                                                    src={publicId}
                                                    alt={item.title}
                                                    width={90}  // Specify desired width
                                                    height={110} // Specify desired height
                                                    crop="fill" // Adjust cropping as needed
                                                    quality="auto" // Automatic quality
                                                    format="auto" // Automatic format
                                                    aspect_ratio="1:1"
                                                    className="rounded"
                                                />
                                            </div>
                                            <div className="flex flex-1  items-start gap-4">
                                                <div>
                                                    <h3 className="text-sm text-gray-900">{item.title}</h3>
                                                    <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">

                                                        <div>
                                                            <dt className="inline text-orange-500 font-semibold text-xs">
                                                                Ksh {item.price}
                                                            </dt>
                                                        </div>
                                                    </dl>
                                                </div>
                                                <div className="flex flex-1 items-center justify-end gap-2">

                                                    <button
                                                        className="text-gray-600 transition hover:text-red-600"
                                                        onClick={(e) => handleClick(e, item)}
                                                    >
                                                        <span className="sr-only">Remove item</span>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth="1.5"
                                                            stroke="currentColor"
                                                            className="h-4 text-red-500 w-4"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )


                                })}
                            </div>
                        </div>
                    </div>
                    <div className='rounded-lg  w-full p-4 md:py-8'>
                        <div className='w-full flex justify-start pb-4'>
                            <h1>Order Summary</h1>
                        </div>
                        <div>
                            <div className="flex items-center border border-white gap-2">
                                <span className="text-medium text-gray-900">Estimated Total</span>
                                <p className='text-orange-600 text-l font-semibold'>Ksh {cart.reduce((acc, item) => acc + item.price, 0)}</p>
                            </div>
                            <div className="flex w-full justify-center flex-col gap-4">



                            </div>

                            <div className='mt-2'>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-500">Shipping and discounts will be calcultated at checkout</span>

                                </div>
                                <Link href={'/checkout'}>
                                    <button type="button" class="w-full mt-2 rounded-lg border  bg-slate-950 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:bg-slate-900  ">Checkout</button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Index;
