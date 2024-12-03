import { useEffect, useState } from "react";
import "./Responsive.css";

const Banner = ({ data }) => {
  const { lgHeading, description, btnText, imgUrl, postBanner} = data;

  return (
    <>
    <div className="overflow-hidden bg-[#F2F0F1]">
      <div className="w-[100%] px-3 banner justify-center items-center flex m-auto">
        <div className="w-[50%] banner-con text-content">
          <h1 className="text-5xl lg-heading font-extrabold w-[90%] line-clamp-3">{lgHeading}</h1>
          <p className="text-slate-400 banner-para text-[16px] mt-4">{description}</p>
          <button className="text-slate-400 banner-btn border border-1 border-black p-3 w-[200px] rounded-full bg-black text-[16px] mt-7">
            {btnText}
          </button>

          <div className="flex counting justify-start items-center gap-14 mt-5">
            <div>
              <h2 className="text-4xl count font-bold">200+</h2>
              <p className="text-slate-400 text-[10px]">International Brands</p>
            </div>
            <div>
              <h2 className="text-4xl count font-bold">2,000+</h2>
              <p className="text-slate-400 text-[10px]">
                High-Quality Products
              </p>
            </div>
            <div>
              <h2 className="text-4xl count font-bold">30,000+</h2>
              <p className="text-slate-400 text-[10px]">Happy Customers</p>
            </div>
          </div>
        </div>

        <div className="w-[50%] img-box">
            <img className="h-[500px]" src={imgUrl} alt="" />
        </div>
      </div>
    </div>

    <div className=" bg-black">
        <div className="w-[100%] m-auto flex flex-wrap justify-around">
            {postBanner.map((item, index)=>{
                return(
                    <img className="h-[100px] inner-img w-[100px] object-contain" key={index} src={item}/>
                )
            })}
        </div>
    </div>
    </>
  );
};

export default Banner;
