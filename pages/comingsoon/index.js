import Image from "next/image";

export default function index() {
    return (
        <div>

            <div className="bg-background max-w-screen-xl mx-auto text-primary-foreground  flex flex-col items-center justify-center p-6">
                <h1 className="text-3xl font-bold mb-2">Exciting New Items Coming Soon!</h1>
                <p className="text-md mb-6 text-muted-foreground">Be the first to know about our upcoming releases.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <a href="#" className="group block">
                        <div className="relative h-[350px]  sm:h-[450px]">
                            <Image
                                src="https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/33/5480362/1.jpg?0293"
                                alt=""
                                className="absolute rounded inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                            />

                            <Image
                                src="https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/90/963532/1.jpg?3346"
                                alt=""
                                className="absolute inset-0 rounded h-full w-full object-cover opacity-0 group-hover:opacity-100"
                            />
                        </div>

                        <div className="mt-3">
                            <h3 className="text-base text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                Skeleton Hand Silver Bracelet                           </h3>

                            <p className="mt-1.5 text-pretty text-xs text-gray-500">
                                Dropping soon at subscribe to our newsletter to be informed about the drop.They will be launched at Ksh 700
                            </p>
                        </div>
                    </a>
                    <a href="#" className="group block">
                        <div className="relative h-[350px] sm:h-[450px]">
                            <Image
                                src="https://i.ebayimg.com/images/g/ilsAAOSwQLlmM~W-/s-l400.jpg"
                                alt=""
                                className="absolute rounded inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                            />

                            <Image
                                src="https://i.ebayimg.com/images/g/WscAAOSwEqNmM~XB/s-l960.webp"
                                alt=""
                                className="absolute rounded inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                            />
                        </div>

                        <div className="mt-3">
                            <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                Liquid Y2K Earring Silver                            </h3>

                            <p className="mt-1.5 text-pretty text-xs text-gray-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quibusdam ab maiores placeat
                                odio id?
                            </p>
                        </div>
                    </a>

                </div>
            </div>
        </div>


    )
}