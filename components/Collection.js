import React from 'react'
import { Titan_One } from "next/font/google";
const font = Titan_One({ subsets: ["latin"], weight: '400' });

const Collection = () => {
    return (
        <div>
            {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

            <section
                className="flex max-w-screen-xl mx-auto my-6  bg-white"
            >
                <div
                    className="w-full h-full text-black text-center flex items-center justify-between inset-0"
                >
                    <div className='flex flex-col w-1/2   space-y-4 justify-between items-center'>
                        <h1 className={`${font.className} text-2xl md:text-4xl font-bold`}>
                            Y2K Beanies
                        </h1>
                        <p className=" w-full  text-left text-sm md:text-base">
                            Discover a wide range of y2k beanies from Mea Culpa, Spiderman, Top Tier and Grvty Visions. Add them to your bag and elevate your fit
                        </p>

                    </div>
                    <div className='flex justify-center  w-1/2'>
                        <img src='https://i.pinimg.com/564x/75/bb/2e/75bb2e5135cd2a9036953f539a7a8d15.jpg' className='sm:w-full md:w-1/2' />
                    </div>
                </div>


            </section>
        </div>
    )
}

export default Collection
