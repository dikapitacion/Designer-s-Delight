import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import {motion} from 'framer-motion'

const mon = Montserrat({
    subsets:['latin'],
    weight:['400','800']
})
const kaam = ['ABOUT US','PROJECT MANAGEMENT','PRODUCTS','CONTACT US']

export default function Navbar(){
    return (
        <div className='flex flex-row bg-[#8FD1E9] drop-shadow-lg'>
                <div className={`w-{750px} relative`}>
                    <Image
                        src="/logo.jpg"
                        alt="Logo"
                        width={304}
                        height={178}
                        priority
                    />
                    </div>
                <div className={`w-3/4 flex flex-row items-center justify-center ${mon.className}`}>
                    {kaam.map((item)=>
                        <motion.h3
                            className='m-12 font-bold text-[#3E3A3A] text-xl'
                            whileTap={{scale:0.8}}
                            whileHover={{opacity:0.9,scale:1.1}}
                        >
                            {`${item}`}
                        </motion.h3>
                    )}
                </div>
            </div>
    )
}