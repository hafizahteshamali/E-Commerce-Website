const BrowserBanner = ({ data }) => {
  
  return (
    <div className="flex my-10 justify-around flex-wrap b-banner">
      {data.map((item, index) => {
        return (
          <div key={index} className={item.wid == true ? "overflow-hidden banner-box flex justify-between items-center my-2 w-[60%] bg-slate-200 rounded-lg" : "flex banner-box2 overflow-hidden justify-between items-center my-2 w-[35%] bg-slate-200 rounded-lg"}>
            <h1 className=" text-2xl font-semibold m-6">{item.title}</h1>
            <img className="h-[100%] w-[60%] object-cover" src={item.imgUrl} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default BrowserBanner;
