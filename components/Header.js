import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'

const Header = () => {

    const router = useRouter();

    const isActive = (pathname) => {
        return router.pathname === pathname ? 'text-gray-900 font-bold' : 'text-gray-500';
    }
    return (
        <>
            <header className="bg-white h-14   ">
                <div className="mx-auhref flex justify-between w-full items-center max-w-screen-xl px-4 sm:px-2 lg:px-6">
                    <div className="block md:hidden">
                        <buthrefn className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </buthrefn>
                    </div>

                    <div className="flex h-8 items-center justify-self-start  ">




                        <div className="block">
                            <h2 className='font-bold text-2xl'> Slatt Wear </h2>

                        </div>



                    </div>
                    <div className="flex    justify-center ">


                        <div className="hidden md:flex  w-full justify-center">
                            <nav aria-label="Global">
                                <ul className="flex items-center gap-6 text-sm">
                                    <li>
                                        <Link className={`${isActive('/clothing')}text-gray-500 transition hover:text-gray-500/75`} href='/'> Clothing </Link>
                                    </li>

                                    <li>
                                        <Link className="text-gray-500 transition hover:text-gray-500/75" href='/accesories'> Accessories </Link>
                                    </li>

                                    <li>
                                        <a className="text-gray-500 transition hover:text-gray-500/75" href='/anime'> Anime </a>
                                    </li>
                                    <li>
                                        <Link className="text-gray-500 transition hover:text-gray-500/75" href='/soon'> Coming Soon  </Link>
                                    </li>


                                </ul>
                            </nav>
                        </div>
                        <div></div>




                    </div>
                    <div className='flex  space-x-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
                        </svg>



                    </div>

                </div>
            </header >

        </>



    )
}

export default Header
