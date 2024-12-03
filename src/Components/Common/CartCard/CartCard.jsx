import { DeleteOutlined } from "@ant-design/icons";
import { Card } from "antd"
import { useDispatch } from "react-redux";
import { ActionType } from "../../../Redux/Actions/ActionType";

const CartCard = ({data}) => {
    const dispatch = useDispatch();
    const {title, price, image, id, category}  = data;
  return (
    <Card
    hoverable
    className="my-1"
  >
    <div className="flex gap-5 items-center">
    <div>
        <img className="cartImg" src={image} alt="" />
    </div>
    <div>
        <p><span className="font-bold">Title: </span>{title.slice(0, 10)}</p>
        <p><span className="font-bold">Category:</span> {category}</p>
        <p><span className="font-bold">Price:</span> {price} Rs</p>
        <DeleteOutlined onClick={()=>dispatch({type: ActionType.DELETE_PRODUCT, payload: {id: id}})} className="text-2xl" />
    </div>
    </div>
  </Card>
  )
}

export default CartCard