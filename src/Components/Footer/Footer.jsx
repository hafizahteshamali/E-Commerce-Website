import "./Responsive.css";
const Footer = ({ data }) => {
  return (
    <div className="footer-nav p-5 flex justify-between items-center w-[100%] border-[1px] border-white bg-slate-200 m-auto">
      <p className="text-slate-500 text">Shop.co © 2000-2023, All Rights Reserved</p>
      <ul className="flex gap-5">
        {data.map((item, index) => {
          return (
            <li className="my-img" key={index}>
              <a href="#">
                <img
                  className="h-[40px] w-[40px] object-contain"
                  src={item}
                  alt=""
                />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Footer;
