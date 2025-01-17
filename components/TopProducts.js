import { useShoppingCartContext } from '@/contexts/CartContext'
import useCart from '@/hooks/useCart'
import Link from 'next/link'
import React from 'react'
import toast from 'react-hot-toast'
import { CldImage } from 'next-cloudinary'
import { Bowlby_One_SC } from "next/font/google";

const font = Bowlby_One_SC({ subsets: ["latin"], weight: '400' });

const TopProducts = ({ products }) => {
    const { cart, addItem, removeItem, clearCart } = useShoppingCartContext()
    console.log(cart)

    const handleClick = (e, product) => {
        e.preventDefault()
        addItem(product)
        toast.success('Item successfully added to cart')
    }

    const extractPublicId = (url) => {
        // Parse the URL to extract the public ID
        const urlObj = new URL(url);
        const pathParts = urlObj.pathname.split('/');
        const publicIdWithFormat = pathParts.pop();
        const publicId = publicIdWithFormat.split('.')[0]; // Extract public ID
        return publicId;
    }

    if (products) {
        return (
            <div className='mt-6 max-w-screen-xl mx-auto'>
                <h1 className={`${font.className} w-full text-center text-4xl md:text-5xl  mb-6`}>TOP PICKS</h1>
                <div className=''>
                    <div className="grid grid-cols-1 gap-2 grid-cols-2 md:grid-cols-4 lg:gap-8">
                        {
                            products.slice(0, 8).map((item, index) => {
                                const publicId = extractPublicId(item.images[0]);
                                return (
                                    <Link href={`/product/${item._id}`} key={item._id} className="group block">
                                        <div className="relative aspect-square w-full">
                                            <CldImage
                                                src={publicId}
                                                alt={item.title}
                                                width={350}  // Specify desired width
                                                height={500} // Specify desired height
                                                crop="fill" // Adjust cropping as needed
                                                quality="auto" // Automatic quality
                                                format="auto" // Automatic format
                                                className="rounded"
                                            />
                                        </div>
                                        <div className='w-3/4'>
                                            <h3 className="font-medium text-sm text-gray-900 group-hover:underline group-hover:underline-offset-4">
                                                {item.title}
                                            </h3>
                                        </div>
                                        <div className="mt-1 flex justify-end items-center">
                                            <div className='flex items-end w-full justify-start'>
                                                <p className="mt-1 text-sm text-orange-700">Ksh {item.price}</p>
                                            </div>
                                            <button
                                                type="button"
                                                className="inline-flex items-center gap-1.5 rounded-lg border border-green-500 bg-slate-950 px-2 md:px-5 py-1 md:py-2.5 text-center text-xs md:text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200 disabled:cursor-not-allowed disabled:border-green-300 disabled:bg-green-300"
                                                onClick={(e) => handleClick(e, item)}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                                </svg>
                                                Add
                                            </button>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default TopProducts
