import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate , setrotate]  = useState(0);
  useEffect(()  => {
    window.addEventListener("mousemove" , (e) => {
      let mousex = e.clientX;
      let mousey = e.clientY;
      let deltax = mousex - window.innerWidth/2;
      let deltay = mousey - window.innerHeight/2;

      var angle = Math.atan2(deltay, deltax) * (180/Math.PI);
      setrotate(angle-180)
    }) 
   })
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.7" className='w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div className="absolute flex gap-10 left-1/2 -translate-x-[50%] -translate-y-[-180%]">
          <div className="flex items-center justify-center w-[10vw] h-[10vw] rounded-full bg-zinc-100 ">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <div style={{transform: `translate(-50% , -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] translate-y-[-50%]
               w-full h-6 ">
                <div className="w-6 h-6 rounded-full bg-zinc-100"></div>
              </div>
            </div>{" "}
          </div>
          <div className="flex items-center justify-center w-[10vw] h-[10vw] rounded-full bg-zinc-100 ">
            {" "}
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <div style={{transform: ` translate(-50% , -50%) rotate(${rotate}deg)  `}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] translate-y-[-50%] w-full h-6 ">
                <div className="w-6 h-6 rounded-full bg-zinc-100"></div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
