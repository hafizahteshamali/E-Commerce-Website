import {
  CloseSquareOutlined,
  DownOutlined,
  MenuFoldOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Badge, Drawer, Empty } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartCard from "../Common/CartCard/CartCard";
import "./Responsive.css";

const Main_Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const cartData = useSelector((state) => state?.cart);

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(false);
  }, [cartData.length == 0]);

  return (
    <>
      <div className="bg-slate-100 p-0 sticky top-0 z-10">
        <div className="header w-[100%] m-auto p-5 flex items-center justify-between">
          <NavLink to="/">
            <img src="./assets/images/logo.png" alt="Shop.Co" />
          </NavLink>

          <div className="navigation flex justify-around items-center">
            <ul className="flex justify-center gap-10 items-center">
              <li>
                <NavLink to="/">
                  Shop <DownOutlined />
                </NavLink>
              </li>
              <li>
                <NavLink to="/onsale">On Sale</NavLink>
              </li>
              <li>
                <NavLink>New Arrivals</NavLink>
              </li>
              <li>
                <NavLink>Brands</NavLink>
              </li>
            </ul>

            <div className="w-[30%] rounded-full flex justify-center gap-2 items-center bg-slate-200 p-1">
              <SearchOutlined className="text-2xl text-black font-bold cursor-pointer" />
              <input
                className="h-[35px] w-[85%] text-slate-500 rounded-full p-2 outline-none border-none bg-slate-200"
                type="text"
                placeholder="search for products..."
              />
            </div>

            <ul className="flex justify-center gap-8 w-[10%] items-center">
              <Badge count={cartData.length}>
                <li>
                  <NavLink>
                    <ShoppingCartOutlined
                      onClick={showDrawer}
                      className="text-2xl"
                    />
                  </NavLink>
                </li>
              </Badge>

              <li>
                <NavLink>
                  <UserOutlined className="text-2xl" />
                </NavLink>
              </li>
            </ul>
          </div>
          <MenuFoldOutlined
            onClick={() => setShowMenu(!showMenu)}
            className="text-3xl hidden menu_icon"
          />

          <Drawer title="CART BAG" onClose={onClose} open={open}>
            <div className="h-[300px] overflow-y-auto">
              {cartData.length > 0 ? (
                <>
                  {cartData?.map((item) => {
                    return <CartCard key={item.id} data={item} />;
                  })}
                </>
              ) : (
                <Empty description="No Product Found...!" />
              )}
            </div>
          </Drawer>
        </div>
      </div>

      <div className={showMenu ? "h-[105vh] respnse-box w-[30%] p-2 pt-10 fixed bottom-0 top-0 z-10 translate-y-[0%] right-0 translate-x-[0%] transition-all duration-500 bg-[#000000]" : "h-[105vh] w-[30%] translate-y-[0%] p-4 fixed bottom-0 top-0 z-10 transition-all duration-500 right-0 translate-x-[100%] bg-[#000000]"}>
      <CloseSquareOutlined onClick={()=>setShowMenu(false)} className="text-white text-3xl absolute top-3 left-3" />
        <ul className="flex justify-around h-[50%] mt-10 items-center flex-col ">
          <li className="text-white w-[100%] text-center">
            <a href="#">
              Shop <DownOutlined />
            </a>
          </li>
          <li className="text-white w-[100%] text-center">
            <a href="#">On Sale</a>
          </li>
          <li className="text-white w-[100%] text-center">
            <a href="#">New Arrivals</a>
          </li>
          <li className="text-white w-[100%] text-center">
            <a href="#">Brands</a>
          </li>
        </ul>
        <div className="w-[100%] rounded-full m-auto my-6 flex justify-center gap-2 items-center bg-slate-200 p-1">
          <SearchOutlined className="text-2xl text-black font-bold cursor-pointer" />
          <input
            className="h-[25px] w-[85%] text-slate-500 rounded-full p-2 outline-none border-none bg-slate-200"
            type="text"
            placeholder="search for products..."
          />
        </div>
        <ul className="flex justify-center m-auto gap-8 w-[90%] items-center">
              <Badge count={cartData.length}>
                <li>
                  <NavLink>
                    <ShoppingCartOutlined 
                      onClick={showDrawer}
                      className="text-2xl  text-white"
                    />
                  </NavLink>
                </li>
              </Badge>

              <li>
                <NavLink>
                  <UserOutlined className="text-2xl text-white" />
                </NavLink>
              </li>
            </ul>
      </div>
    </>
  );
};

export default Main_Header;
