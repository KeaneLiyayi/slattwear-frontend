import Image from 'next/image'
import React from 'react'

const Skirt = () => {
    return (
        <div className="bg-slate-950  max-w-screen-xl mx-auto   text-primary-foreground py-8 px-4 md:px-8 lg:px-16 xl:px-32">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-justified  my-auto text-slate-400">
                    <h2 className="text-2xl mb-4 text-white font-bold">What should a baddie wear?</h2>
                    <p>
                        Are you a struggling baddie? Do you feel like you do not fit into the baddie community? Well struggle no more , the solution is right infront of you , a denim skirt.
                        Denim skirts are making a comeback, but ours are not your average finds. Forget the same old styles; our thrifted denim skirts are one-of-a-kind pieces that will turn heads
                    </p>
                </div>
                <div className="hidden md:block">
                    <Image src="/skirt.png" alt="Stylish Watch" className="mx-auto w-full h-auto " />

                </div>
                <div>
                    <a href="#" className="group block">
                        <Image
                            src="/theskirt.jpeg"
                            alt=""
                            className="aspect-square w-full rounded object-cover"
                        />

                        <div className="text-white mt-3">
                            <h3
                                className="font-medium group-hover:underline group-hover:underline-offset-4"
                            >
                                Denim Maxi Skirt                             </h3>

                            <p className="mt-1 text-sm ">Ksh 650</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Skirt


