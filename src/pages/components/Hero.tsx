import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import Navbar from './Navbar'
import {motion} from 'framer-motion'
import { Typewriter,Cursor, useTypewriter } from 'react-simple-typewriter'

const mon = Montserrat({
    subsets:['latin'],
    weight:['400','800']
})
const kaam = ['ABOUT US','PROJECT MANAGEMENT','PRODUCTS','CONTACT US']
export default function Hero(){

    return(
        <main className={` h-full w-full`}>
            <div className="imgcontainer fixed w-full h-full">
                <Image
                    src='/bg.png'
                    fill
                    alt='bg image'
                />
            </div>
            <Navbar/>
            <div className="headContainer flex flex-col items-center justify-center h-full mt-[150px]">
                <h1 className={`${mon.className} z-10 font-bold text-[#3E3A3A] text-xl md:text-7xl`}>Your one stop solution for</h1>
                <span className={`${mon.className} z-10 font-bold text-[#8FD1E9] text-2xl md:text-7xl`}>
                    <Typewriter
                        words={['ADHESIVE & GROUT','TILES','WATER PROOFING','PROJECT MANAGEMENT']}
                        loop={0}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
            </div>
        </main>
    )
}