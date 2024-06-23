import React from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import { Carousel } from 'react-material-ui-carousel'; // Import Carousel from react-material-ui-carousel
import { Button } from '@mui/material';

const Hero = ({ featuredProduct }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    if (featuredProduct) {

        // Render grid for larger screens
        return (
            <div className="relative px-4  ">
                <div className="rounded-xl overflow-hidden flex justify-center  hero ">
                    <div className="flex flex-col  md:flex-row items-center justify-center text-xl font-black text-white   ">
                        <h1 className="text-8xl mb-[150px] md:mb-0 md:text-9xl md:mr-[170px]">SLATT</h1>
                        <img src="/luffy.png" className="absolute   md:h-[240px] md:absolute md:top-0 md:-mt-2" alt="Luffy" />
                        <h1 className="text-8xl md:text-9xl">WEAR</h1>
                    </div>
                </div>

                <div className="mt-4">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                        <div className="collections flex rounded-lg bg-white border border-slate-700 p-1 min-w-full">
                            <div className="w-full  flex flex-col justify-center align-center">
                                <h1 className="text-3xl font-black text-center ">COMING SOON</h1>
                                <div className="text-xs w-full border my-2 ">
                                    <div className="flex flex-wrap items-center justify-center gap-5">
                                        <Button
                                            variant="contained"
                                            color="success"
                                            disableElevation
                                            startIcon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4"><path d="M9.25 13.25a.75.75 0 001.5 0V4.636l2.955 3.129a.75.75 0 001.09-1.03l-4.25-4.5a.75.75 0 00-1.09 0l-4.25 4.5a.75.75 0 101.09 1.03L9.25 4.636v8.614z" /><path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" /></svg>}
                                            onClick={() => console.log('Upload clicked')}
                                            className="text-sm"
                                        >
                                            Upload
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-full justify-self-center flex justify-end ">
                                <img className="object-cover h-full " src="https://i.pinimg.com/564x/11/47/57/114757e613bbe87db6036da9b4fe2268.jpg" alt="Product" />
                            </div>
                        </div>
                        <div className="collections flex rounded-lg bg-white border border-slate-700 p-1">
                            <div className='py-4 px-2 flex flex-col justify-start'>
                                <h1 className='text-3xl font-black text-center h-3/4'>Y2K Accesories</h1>
                                <div className="flex flex-wrap items-center justify-center gap-5">
                                    <Button
                                        variant="contained"
                                        color="success"
                                        disableElevation
                                        startIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                        </svg>
                                        }
                                        onClick={() => console.log('Upload clicked')}
                                        className="text-sm w-full"
                                    >
                                        SHOP
                                    </Button>
                                </div>
                            </div>
                            <div>
                                <img src="https://i.pinimg.com/564x/f9/a6/2d/f9a62d3b4a713367e5506f4f76db902e.jpg" className='object-contain h-full' alt="Product" />
                            </div>
                        </div>
                        <div className="collections flex rounded-lg bg-white border border-slate-700 p-1">
                            <div className='py-4 px-2 w-[204px] flex flex-col justify-start'>
                                <h1 className='text-3xl font-black text-center h-3/4'>Anime Merchandise</h1>
                                <div className="flex flex-wrap items-center justify-center gap-5">
                                    <Button
                                        variant="contained"
                                        color="success"
                                        disableElevation
                                        startIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                        </svg>
                                        }
                                        onClick={() => console.log('Upload clicked')}
                                        className="text-sm w-full"
                                    >
                                        SHOP
                                    </Button>
                                </div>
                            </div>
                            <div>
                                <img src="https://i.pinimg.com/564x/33/82/4f/33824fc7c5fd97c0bb0f9e15d965e7cb.jpg" className='object-contain h-full' alt="Product" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
    return null; // Handle the case where featuredProduct is not available
};

export default Hero;
