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
        <div className='flex flex-col md:flex-row bg-[#8FD1E9] drop-shadow-lg w-full h-28 md:h-44'>
                <div className={ `w-full md:w-1/6 relative h-28 md:h-44`}>
                    <Image
                        src="/logo.jpg"
                        alt="Logo"
                        fill
                        
                        //priority
                    />
                </div>
                <div className={`w-full md:w-5/6 flex flex-row items-center justify-center ${mon.className}`}>
                    {kaam.map((item)=>
                        <motion.h3
                            className='m-auto text-[#3E3A3A] text-center text-xs md:text-xl font-bold '
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