
import React from 'react'

const CustomerSay = () => {
    return (
        <>
            <div>
                <h2 className="text-3xl font-bold text-center text-gray-900 my-10">Our satisfied customers say</h2>


            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 xl:gird-cols-4 mx-auto   '>
                <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                    <img
                        alt=""
                        src="https://i.pinimg.com/474x/9a/d2/5b/9ad25b079208197c5c96c67ca5727cdb.jpg"
                        className="absolute inset-0 h-full w-full object-cover"
                    />

                    <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                        <div className="p-4 sm:p-6">

                            <a href="#">
                                <h3 className="mt-0.5 text-lg text-white">@Dion</h3>
                            </a>

                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                                Don't change to fit the fashion, change the fashion to fit you                        </p>
                        </div>
                    </div>
                </article>

            </div>
        </>

    )
}

export default CustomerSay
