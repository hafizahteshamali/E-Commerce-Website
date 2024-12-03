import { StarOutlined } from "@ant-design/icons"
import { Card, Modal } from "antd"
import Meta from "antd/es/card/Meta"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionType } from "../../../Redux/Actions/ActionType";

const Cards = ({data}) => {

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  const dispatch = useDispatch();

  const {image, title, price, category, description} = data;
  
  return (
    <>
    <Card
    hoverable
    className="border-none my-card"
  >
    <div className="my-6">
        <img className="aspect-square h-[150px] m-auto w-[150px] object-contain" src={image} alt="" />
    </div>

    <div>
      <h1 className="text-[14px] my-2 font-bold">{title.slice(0, 20)}</h1>
      <p className="my-2">{description.slice(0, 40)}...</p>
      <h2 className="font-bold my-2">Category: {category}</h2>
      <ul className="flex justify-start items-center gap-3">
        <li><StarOutlined className="text-2xl text-yellow-300"  /></li>
        <li><StarOutlined className="text-2xl text-yellow-300" /></li>
        <li><StarOutlined className="text-2xl text-yellow-300" /></li>
        <li><StarOutlined className="text-2xl text-yellow-300" /></li>
        <li className="text-[17px] font-bold">4.5/5</li>
      </ul>
    </div>
    <h1 className="text-[20px] font-bold">{price} Rs</h1>
    <button onClick={showModal} className="w-[100%] m-auto border-[1px] p-2 hover: bg-slate-400 text-slate-100 font-semibold text-[18px] transition-all duration-300 rounded-sm">View Details...</button>
  </Card>

    <Modal className="!w-[50%] modal"
        title="Product Details"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div className="flex justify-center items-center">
          <div className="w-[50%] h-[300px]">
          <img src={image} className="h-[100%] w-[100%] object-contain" alt="" />
          </div>
          <div className="w-[50%]">
            <h1 className="text-2xl font-semibold">PRODUCT DETAILS</h1>
            <h1 className="font-bold text-1xl my-2">Product Name: {title.slice(0, 20)}...</h1>
            <p className="font-bold text-1xl my-2">Catetory: {category}</p>
            <p>{description.slice(0, 100)}...</p>
            <p className="font-bold text-xl my-2">Price: {price} Rs</p>
            <button onClick={()=>dispatch({type: ActionType.CART_PRODUCT, payload: data})} className="border-[1px] h-[40px] w-[100%] bg-black text-white">ADD TO BAG</button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Cards