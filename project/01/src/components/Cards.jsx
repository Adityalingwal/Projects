import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen  bg-zinc-900 flex items-center gap-5 px-20">
      <div className="cardcontainer w-1/2 h-[50vh]">
      
        <div className="card relative w-full h-full  rounded-xl bg-[#004D43] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-5 py-1 rounded-full border-2 left-10 bottom-10">
          ©2019-2024
          </button>
        </div>
      </div>
      <div className="cardcontainer w-1/2 h-[50vh] flex gap-5">
     
        <div className="card relative flex items-center justify-center w-1/2 h-full rounded-xl bg-[#576c69]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute px-5 py-1 rounded-full border-2 left-10 bottom-10">
           
            //somethijng herehr
          </button>
        </div>
        <div className="card relative flex items-center justify-center w-1/2 h-full  rounded-xl bg-[#576c69]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute px-5 py-1 rounded-full border-2 left-10 bottom-10">
            
            //somethijng herehr
          </button>
        </div>
      </div>
    </div>
  );
}
export default Cards;
