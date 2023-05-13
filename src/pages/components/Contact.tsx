import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import {motion} from 'framer-motion'
import Footer from './Footer'

const mon = Montserrat({
    subsets:['latin'],
    weight:['400','800']
})

export default function Contact(){
    return(
        <main className={` h-screen w-screen`}>
            <div className="imgcontainer fixed w-full h-full -z-10">
                <Image
                    src='/bg.png'
                    fill
                    alt='bg image'
                />
            </div>
            <div className='flex flex-row h-full w-screen items-center justify-center m-auto '>
                <div className='bg-[#8FD1E9] w-7/12 h-4/6 m-10 flex flex-col items-center justify-center '>
                    <motion.h1
                    className={`${mon.className} z-10 font-bold text-[#3E3A3A] text-xl md:text-7xl`}
                    >Contact us</motion.h1>
                </div>
                <div className='w-5/12 h-4/6 m-10'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13998.874842980522!2d77.13075064331792!3d28.698059867191724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03db7966b0ff%3A0x290ee8750d39b5ff!2sMaharaja%20Agrasen%20Bhawan%2C%20Pitampura!5e0!3m2!1sen!2sin!4v1683994265549!5m2!1sen!2sin" loading="lazy" className='h-full w-full'></iframe>
                </div>
            </div>
            <div className='mb-0'>
            <Footer/>
            </div>
        </main>
    )
}