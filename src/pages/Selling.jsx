import { useDispatch, useSelector } from "react-redux";
import Cards from "../Components/Common/Cards/Cards";
import { Col, Row } from "antd";
import PreHeader from "../Components/Pre_Header/PreHeader";
import Main_Header from "../Components/Main_Header/Main_Header";
import { Pre_HeaderData } from "../Components/Pre_Header/Pre_HeaderData";
import { useEffect } from "react";
import axios from "axios";
import { ActionType } from "../Redux/Actions/ActionType";
import Main_Heading from "../Components/Common/Main_Heading/Main_Heading";

const Selling = () => {
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
    <PreHeader data={Pre_HeaderData}/>
    <Main_Header/>
    <div className="w-[100%]">
        <Main_Heading text="ALL PRODUCTS ON SALE"/>
        <Row>
        {newArrival?.map((item, index)=>{
            return(
                <Col xs={24} sm={24} md={12} lg={6} xl={6} key={index}>
                    <Cards data={item}/>
                </Col>
            )
        })}
        </Row>
    </div>
    </>
  )
}

export default Selling