import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";
import { Power4 } from "gsap";

function Featured() {
  const cards = [useAnimation() , useAnimation()];

  const handlehover = (index)=>
{
  cards[index].start({y: "0"})
  }

  const handlehoverend = (index)=>
    {
      cards[index].start({y :"100%"})
      }
  return (
    <div className="w-full py-20 ">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className='text-7xl font-["Neue_montreal"] tracking-tight '>
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div onHoverStart={()=>handlehover(0)} onHoverEnd={()=> handlehoverend(0)} className="cardcontainer realtive w-1/2 h-[75vh]">
            <h1 className="absolute flex text-[#CDEA68] overflow-hidden left-full -translate-x-[830px] translate-y-60 z-[9] leading-none tracking-tighter text-7xl">
              {"FYDE".split("").map((item, index) => (
                <motion.span initial={{y : "100%"}} animate={cards[0]} transition={{ease : [0.22, 1, 0.36, 1] , delay : index*.01}} className="inline-block">{item}</motion.span>
              ))}
            </h1>
            <div className="card w-full h-full  rounded-xl overflow-hidden ">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div  onHoverStart={()=>handlehover(1)} onHoverEnd={()=> handlehoverend(1)} className="cardcontainer relative w-1/2 h-[75vh]">
            <div className="card w-full h-full  rounded-xl overflow-hidden">
              <h1 className="absolute flex overflow-hidden text-[#CDEA68] left-full -translate-x-[735px] translate-y-60 z-[9] leading-none tracking-tighter text-7xl">
                {"VISE".split("").map((item, index) => (
                 <motion.span initial={{y : "100%"}} animate={cards[1]} transition={{ease : [0.22, 1, 0.36, 1] , delay : index*.05}} className="inline-block">{item}</motion.span>
                ))}

              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
