import React from "react";

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full -mb-16 -mt-20 p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black ">
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-tight">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and
        hire great people.
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#727b50] ">
      <div className="w-1/2 "> 
        <h1 className="text-6xl ">Our Approach : </h1>
        <button className="flex gap-8 uppercase items-center px-10 py-6 bg-zinc-900 mt-9 rounded-full text-white ">Read More
        <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
        </button>
      </div>
      <div className="w-[90vh] h-[63vh] rounded-3xl mt-2  bg-[#aeb68e] bg-[url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg')] overflow-hidden" > </div>
    </div>
    </div>
  );
}

export default About;
