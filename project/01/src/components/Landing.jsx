import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function Landing() {
  motion
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 border-t-2 ">
      <div className="textstructure mt-48 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker ">
              <div className="w-fit flex ">
                {index===1 && (<motion.div initial={{width:0}} animate={{width : "9vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:1 }} className="mr-4 w-[9vw] rounded-md h-[6vw] relative top-[0.7vw] bg-[url('https://tse3.mm.bing.net/th?id=OIP.2w1v-mS0LeLFyBCc3Z74_wHaFj&pid=Api&P=0&h=180')] bg-cover"></motion.div>)}
                <h1 className="uppercase text-8xl leading-[7vw] tracking-tighter font-[Founders Grotesk] font-bold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}

        <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-6">
          {[
            "For Public And Private Companies",
            "From The First Pitch To IPO",
          ].map((item, index) => (
            <p className="text-md font-light tracking-tight leading-none">
              {" "}
              {item}
            </p>
          ))}
          <div className="Start flex items-center gap-4">
            <div className="px-5 py-2 border-2 border-zinc-500 font-light text-md uppercase rounded-full">
              Start The Project
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full border-[2px] border-zinc-500 ">
              <span className="rotate-[45deg]">
                <FaArrowUpLong />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
