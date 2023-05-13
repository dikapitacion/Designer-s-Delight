import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import {motion} from 'framer-motion'

const mon = Montserrat({
    subsets:['latin'],
    weight:['400','800']
})

export default function Footer(){
    return (
        <footer className='flex flex-col md:flex-row bg-[#8FD1E9] drop-shadow-lg w-full h-28 md:h-44'>
                <div className={ `w-full md:w-1/6 relative h-28 md:h-44`}>
                    <Image
                        src="/logo.jpg"
                        alt="Logo"
                        fill
                        //priority
                    />
                </div>
                <div className={`w-full md:w-5/6 flex flex-row items-center justify-center ${mon.className}`}>
                    <motion.a href='mailto:arun@marmobond.com'
                    className='m-auto text-[#3E3A3A] text-center text-xs md:text-xl font-bold '
                    whileTap={{scale:0.8}}
                    whileHover={{opacity:0.9,scale:1.1}}
                    >arun@marmobond.com
                    </motion.a>
                    <motion.a href='https://linkedin.com/in/arunkathuria001/'
                    target="_blank"
                    className='m-auto text-[#3E3A3A] text-center text-xs md:text-xl font-bold '
                    whileTap={{scale:0.8}}
                    whileHover={{opacity:0.9,scale:1.1}}
                    >linkedin
                    </motion.a>
                    <motion.a
                    href='tel:9560898251'
                    className='m-auto text-[#3E3A3A] text-center text-xs md:text-xl font-bold '
                    whileTap={{scale:0.8}}
                    whileHover={{opacity:0.9,scale:1.1}}
                    >
                        9560898251
                    </motion.a>
                </div>
        </footer>
    )
}