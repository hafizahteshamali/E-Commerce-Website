import "./Responsive.css";

const PreFooter = ({ data, iconData }) => {
  return (
    <div className="w-[100%] m-auto prefooter flex bg-slate-200 mt-10 p-3">
      <div className="w-[25%] inner-footer p-1 m-10">
        <img src="./assets/images/logo.png" alt="" />
        <p className="my-8 text-slate-700">
          We have clothes that suits your style and which you’re proud to wear.
          From women to men.
        </p>
        <ul className="flex justify-start items-center gap-5">
          {iconData.map((item, index) => {
            return (
              <li className="bg-white p-2 rounded-full" key={index}>
                <a href="#">
                  <img className="object-contain" src={item} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>

        <div className="w-[70%] footer-content justify-between flex">
            {data.map((item, index)=>{
                const {heading, text} = item;
                return(
                    <div className="w-[31%] inner_Footer">
                        <h1 className="mt-9 text-2xl text-slate-700 font-semibold">{heading}</h1>
                        <ul className="flex flex-col gap-2">
                            {text.map((item, index)=>{
                                return(
                                    <li className="mt-2 footer-content text-slate-700" key={index}>{item}</li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
    </div>
  );
};

export default PreFooter;
