import { Bowlby_One_SC } from "next/font/google";
import Image from "next/image";
import { Noto_Serif } from "next/font/google";


const font = Bowlby_One_SC({ subsets: ["latin"], weight: '400' });
const fontw = Noto_Serif({ subsets: ["latin"], weight: '400' })
export default function index() {
    return (

        <div className="flex flex-col bg-slate-950 text-white md:flex-row items-center px-0 py-0  w-full md:max-w-screen-xl mx-auto  rounded-lg shadow-lg">
            <div className="md:w-1/2">
                <Image width={700} height={700} undefinedhidden="true" alt="typewriter" src="/keane.JPG" className="shadow-lg transition-transform transform" />
            </div>
            <div className="md:w-1/2   px-4 md:px-8">
                <h2 className={`text-3xl font-bold text-white ${font.className}`} >About Us</h2>
                <p className={`mt-4 text-base text-muted-foreground leading-relaxed  ${fontw.className}`}>
                    Slatt Wear (Show Love All The Time) is your one-stop shop for curated contemporary and vintage fashion, high-end finds, and must-have accessories. Discover a world of unique styles, from trendy anime merch to cozy beanies. We have got you covered with everything from iconic Mea Culpa and Webbed Beanies to the sought-after grvty visions and Top Tier collections
                </p>

                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                    Enjoy nationwide delivery through Pick Up mtaani and saccos, or conveniently pick up your order at our CBD location
                </p>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                    Founded in 2023 by Keane Liyayi, Slatt Wear is committed to empowering everyone to elevate their style with affordable fashion and accessories.
                </p>

            </div>
        </div >
    )


}