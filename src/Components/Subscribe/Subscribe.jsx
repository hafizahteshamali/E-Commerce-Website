import { MailOutlined } from "@ant-design/icons";
import "./Responsive.css";

const Subscribe = () => {
  return (
    <div className=" w-[100%] box rounded-lg p-3 m-auto flex justify-around items-center bg-black">
      <div className="w-[40%] inner-box">
        <h1 className="text-3xl font-extrabold text-white">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>
      </div>
      <div className="w-[40%] input-wrapper">
        <div className="p-2 rounded-full bg-white gap-2 flex justify-center items-center">
          <MailOutlined className="text-slate-500 text-2xl" />
          <input
            type="text"
            placeholder="Enter your Email Address..."
            className="h-[40px] w-[80%] border-none outline-none p-2 text-[17px] text-slate-500"
          />
        </div>
        <button className="border-[2px] mt-5 bg-white text-slate-700 font-bold text-[18px] rounded-full p-3 w-[100%]">Subscribe to Newsletter</button>
      </div>
    </div>
  );
};

export default Subscribe;
