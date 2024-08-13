import { useShoppingCartContext } from '@/contexts/CartContext';
import { Skeleton } from '@mui/material';
import axios from 'axios';
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Index = () => {
    const [category, setCategory] = useState('');
    const [products, setProducts] = useState();
    const { addItem } = useShoppingCartContext();

    const active = 'underline underline-offset-4';

    const handleAdd = (e, item) => {
        e.preventDefault();
        addItem(item);
    };

    const handleClick = (value) => {
        setCategory(value);
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setCategory(value);
    }

    useEffect(() => {
        async function fetchProducts() {
            try {
                const data = await axios.get(`/api/products?category=${category}`);
                console.log(data);
                setProducts(data.data.products);
            } catch (err) {
                console.log(err);
            }
        }

        fetchProducts();
    }, [category]);

    const extractPublicId = (url) => {
        // Parse the URL to extract the public ID
        const urlObj = new URL(url);
        const pathParts = urlObj.pathname.split('/');
        const publicIdWithFormat = pathParts.pop();
        const publicId = publicIdWithFormat.split('.')[0]; // Extract public ID
        return publicId;
    }

    return (
        <div>
            <section>
                <div className="mx-auto max-w-screen-xl px-0 sm:px-6  sm:py-8 lg:px-4">
                    <header className="text-center ">
                        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Clothes</h2>
                        <p className="mx-auto mt-4 max-w-md text-gray-500">
                            Elevate your style with our fits
                        </p>
                    </header>
                    <div className='flex invisible md:visible justify-center mt-4 gap-5'>
                        <button className={`transition-all ease-in duration-300 hover:text-gray-200 focus:text-red-500 focus:ring-gray-100 ${category === '' ? active : ''}`} onClick={() => handleClick('')}>All</button>
                        <button className={`transition-all ease-in duration-300 hover:text-gray-200 focus:text-red-500 focus:ring-gray-100 ${category === 'shirt' ? active : ''}`} onClick={() => handleClick('shirt')}>T-Shirt</button>
                        <button className={`transition-all ease-in duration-300 hover:text-gray-200 focus:text-red-500 focus:ring-gray-100 ${category === 'pant' ? active : ''}`} onClick={() => handleClick('pant')}>Pants</button>
                        <button className={`transition-all ease-in duration-300 hover:text-gray-200 focus:text-red-500 focus:ring-gray-100 ${category === 'sweatshirts' ? active : ''}`} onClick={() => handleClick('sweatshirts')}>SweatShirts</button>
                        <button className={`transition-all ease-in duration-300 hover:text-gray-200 focus:text-red-500 focus:ring-gray-100 ${category === 'Hoody' ? active : ''}`} onClick={() => handleClick('Hoody')}>Hoodies</button>
                        <button className={`transition-all ease-in duration-300 hover:text-gray-200 focus:text-red-500 focus:ring-gray-100 ${category === 'jersey' ? active : ''}`} onClick={() => handleClick('jersey')}>Retro Jersey</button>
                        <button className={`transition-all ease-in duration-300 hover:text-gray-200 focus:text-red-500 focus:ring-gray-100 ${category === 'jort' ? active : ''}`} onClick={() => handleClick('jort')}>Jorts</button>
                    </div>
                    <div className='md:invisible'>
                        <div className="relative w-full max-w-sm">
                            <svg className="absolute top-1/2 -translate-y-1/2 left-4 z-50" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.5555 3.33203H3.44463C2.46273 3.33203 1.66675 4.12802 1.66675 5.10991C1.66675 5.56785 1.84345 6.00813 2.16004 6.33901L6.83697 11.2271C6.97021 11.3664 7.03684 11.436 7.0974 11.5068C7.57207 12.062 7.85127 12.7576 7.89207 13.4869C7.89728 13.5799 7.89728 13.6763 7.89728 13.869V16.251C7.89728 17.6854 9.30176 18.6988 10.663 18.2466C11.5227 17.961 12.1029 17.157 12.1029 16.251V14.2772C12.1029 13.6825 12.1029 13.3852 12.1523 13.1015C12.2323 12.6415 12.4081 12.2035 12.6683 11.8158C12.8287 11.5767 13.0342 11.3619 13.4454 10.9322L17.8401 6.33901C18.1567 6.00813 18.3334 5.56785 18.3334 5.10991C18.3334 4.12802 17.5374 3.33203 16.5555 3.33203Z" stroke="black" strokeWidth="1.6" strokeLinecap="round" />
                            </svg>
                            <select value={category} onChange={handleChange} id="Offer" className="h-12 border border-gray-300 text-gray-900 pl-11 text-base font-normal leading-7 rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white transition-all duration-500 hover:border-gray-400 hover:bg-gray-50 focus-within:bg-slate-950">
                                <option value="">All</option>
                                <option value="shirt">T-Shirts</option>
                                <option value="pant">Pants</option>
                                <option value="sweatshirts">SweatShirts</option>
                                <option value="Hoody">Hoodies</option>
                                <option value="jersey">Retro Jersey</option>
                                <option value="jort">Jorts</option>
                            </select>
                            <svg className="absolute top-1/2 -translate-y-1/2 right-4 z-50" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609" stroke="#111827" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>

                    <ul className="mt-4 grid gap-4  grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
                        {products ? products.map((item, index) => {
                            const publicId = extractPublicId(item.images[0]);
                            return (
                                <Link href={`/product/${item._id}`} key={item._id} className="group block">
                                    <div className="relative aspect-square w-full">
                                        <CldImage
                                            src={publicId}
                                            alt={item.title}
                                            width={500}  // Specify desired width
                                            height={640} // Specify desired height
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
                                            onClick={(e) => handleAdd(e, item)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                            </svg>
                                            Add
                                        </button>
                                    </div>
                                </Link>
                            );
                        }) : (
                            Array.from(new Array(8)).map((_, index) => (
                                <li key={index} className="flex flex-col">
                                    <Skeleton variant="rounded" width="100%" height={200} />
                                    <Skeleton width="60%" />
                                    <Skeleton width="40%" />
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Index;
