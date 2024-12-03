import { useEffect } from "react";
import { useSelector } from "react-redux";
import Cards from "../Common/Cards/Cards";
import { Col, Row } from "antd";
import "./Responsive.css";

const TopSelling = () => {
  const topselling = useSelector((state) => state?.allProduct);
  const womens = topselling.filter((item)=>item.category == "women's clothing");

  return (
    <div className="w-[100%] m-auto mt-10">
      <Row gutter={[16, 16]}>
        {womens?.slice(0, 4).map((item, index) => {
          return (
            <Col key={index} xs={24} sm={24} md={12} lg={6} xl={6}>
              <Cards data={item} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default TopSelling;
