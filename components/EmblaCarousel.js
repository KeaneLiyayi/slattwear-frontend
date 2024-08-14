import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Button } from '@mui/material';
import Image from 'next/image';


export function EmblaCarousel() {
    const [emblaRef] = useEmblaCarousel()

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container space-x-2 py-4 md:space-x-4 ">

                <div className="embla__slide flex rounded-lg space-x-2 border">


                    <div className='w-1/2  flex flex-col justify-around '>
                        <h1 className='text-3xl lg:text-4xl   text-center  '>Y2K RINGS</h1>
                        <div className="flex flex-wrap items-center px-2 justify-center gap-5">
                            <Button
                                variant="contained"
                                color="success"
                                disableElevation
                                startIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                                }
                                onClick={() => console.log('Upload clicked')}
                                className="text-sm bg-slate-950 w-full"
                            >
                                SHOP
                            </Button>

                        </div>

                    </div>
                    <div className='  h-full w-1/2'>
                        <Image className="h-full w-full object-contain" src="https://i.pinimg.com/564x/95/13/57/9513577ec403e3caf188c7b7be825390.jpg" alt="Image 1" />
                    </div>

                </div>

                <div className="embla__slide flex rounded-lg space-x-2 border">

                    <div className='w-1/2  flex flex-col justify-around '>
                        <h1 className='text-3xl lg:text-4xl   text-center  '>ANIME MERCH</h1>
                        <div className="flex flex-wrap items-center px-2 justify-center gap-5">
                            <Button
                                variant="contained"
                                color="success"
                                disableElevation
                                startIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                                }
                                onClick={() => console.log('Upload clicked')}
                                className="text-sm bg-slate-950 w-full"
                            >
                                SHOP
                            </Button>

                        </div>

                    </div>
                    <div className='  h-full w-1/2'>
                        <Image className="h-full w-full object-cover" src="https://img.fruugo.com/product/6/10/157924106_max.jpg" alt="Image 1" />
                    </div>

                </div>
                <div className="embla__slide flex rounded-lg space-x-2 border">

                    <div className='w-1/2  flex flex-col justify-around '>
                        <h1 className='text-3xl lg:text-4xl   text-center  '>Y2K BEANIES</h1>
                        <div className="flex flex-wrap items-center px-2 justify-center gap-5">
                            <Button
                                variant="contained"
                                color="success"
                                disableElevation
                                startIcon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-6">
                                    <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                                    <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                                </svg>

                                }
                                onClick={() => console.log('Upload clicked')}
                                className="text-sm bg-slate-950 w-full"
                            >
                                NOTIFY
                            </Button>

                        </div>

                    </div>
                    <div className='  h-full w-1/2'>
                        <Image className="h-full w-full object-cover" src="https://i.pinimg.com/564x/00/2d/51/002d51e279fc6fa9e6051b845521a912.jpg" alt="Image 1" />
                    </div>

                </div>
                <div className="embla__slide">
                    1
                </div>
                <div className="embla__slide">
                    1
                </div>

            </div>
        </div>
    )
}
