import React from 'react'
import { Bowlby_One_SC } from "next/font/google";
import Link from 'next/link';
import Image from 'next/image';
const font = Bowlby_One_SC({ subsets: ["latin"], weight: '400' });

const FeaturedProduct = () => {
    return (
        <>
            <section>
                <div className="mx-auto max-w-screen-xl  py-8 sm:px-6 sm:py-12 ">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                        <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
                            <div className="mx-auto max-w-md text-center lg:text-left">
                                <header>
                                    <h2 className={`text-xl font-bold text-gray-900 sm:text-3xl ${font.className}`}>Streetwear Brands</h2>

                                    <p className="mt-4 text-gray-500">
                                        Looking to elevate your street style? You have landed in the right place. We offer a diverse range of on-trend streetwear brands
                                    </p>
                                </header>

                                <Link
                                    href="/clothing"
                                    className={`mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring ${font.className}`}
                                >
                                    Shop All
                                </Link>
                            </div>
                        </div>

                        <div className="lg:col-span-2 lg:py-8">
                            <ul className="grid grid-cols-2 gap-4">
                                <li>
                                    <Link href={'/product/66a9cefd70e76e9c69a07d21'} className="group block">
                                        <Image
                                            width={600} height={600}
                                            src="/bathing.jpeg"
                                            alt=""
                                            className="aspect-square w-full rounded object-cover"
                                        />

                                        <div className="mt-3">
                                            <h3
                                                className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                            >
                                                Bathing Aape Hoodie                                            </h3>

                                            <p className="mt-1 text-sm text-gray-700">Ksh 950</p>
                                        </div>
                                    </Link>
                                </li>

                                <li>
                                    <Link href={'/product/66a9d24170e76e9c69a07d45'} className="group block">
                                        <Image
                                            width={500} height={500}
                                            src="/stussy.jpeg"
                                            alt=""
                                            className="aspect-square object-cover w-full rounded "
                                        />

                                        <div className="mt-3">
                                            <h3
                                                className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                            >
                                                Stussy Two Tone Hoodie                                            </h3>

                                            <p className="mt-1 text-sm text-gray-700">Ksh 1100</p>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default FeaturedProduct
