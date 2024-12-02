import React from 'react';
import { motion } from "framer-motion";

function Marquee() {

  return (
    <div data-scroll data-scroll-speed=".01" className='w-full py-16 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap ' >
        <motion.h1 initial={{x : 0}} animate={{x : "-100%"}} transition={{ease:"linear" , repeat:Infinity , duration:5}} className='text-[18vw] leading-none font-[""Founders Grotesk] uppercase mb-[1.6vw]  font-semibold pr-10 '> We Are OCHI</motion.h1>
        <motion.h1 initial={{x : 0}} animate={{x : "-100%"}} transition={{ease:"linear" , repeat:Infinity , duration:5}} className='text-[18vw] leading-none font-[""Founders Grotesk] uppercase mb-[1.6vw]  font-semibold pr-10'> We Are OCHI</motion.h1>
        
      </div>
     
    </div>
  )
}

export default Marquee 
