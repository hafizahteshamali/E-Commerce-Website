import axios from "axios"
import Cards from "../Common/Cards/Cards"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionType } from "../../Redux/Actions/ActionType";
import { Col, Modal, Row } from "antd";
import "./Responsive.css";

const New_Arrival = () => {

    const newArrival = useSelector((state)=>state?.allProduct);
    const dispatch = useDispatch();

    const getData = async ()=>{
        try {
            const AllProduct = await axios.get('https://fakestoreapi.com/products');
            dispatch({type: ActionType.ALL_PRODUCT, payload: AllProduct?.data})
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getData();
    },[])

  return (
    <>
    <div className="w-[100%] m-auto mt-10">
        <Row gutter={[16, 16]}>
  
        {newArrival?.slice(0,4).map((item, index)=>{
            return(
                <Col key={index} sm={24} xs={24} md={12} lg={6} xl={6}  >
                    <Cards data={item}/>
                </Col>
            )
        })}
        </Row>
        <div className="text-center my-6">
            <button className="border-[1px] w-[20%] p-2 hover:bg-slate-400 text-slate-700 transition-all duration-300 rounded-full">View All</button>
        </div>
    </div>

    </>
  )
}

export default New_Arrival