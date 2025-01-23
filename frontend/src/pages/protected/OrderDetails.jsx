import { useParams } from "react-router";
import OrderInfo from "../../components/admin/OrderInfo";
import axios from "axios";
import { BACKEND_BASE_URL } from "../../utils/helper";
import { useEffect, useState } from "react";

function OrderDetails() {
  const params = useParams();
  const [orderInformation, setOrderInformation] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(params);

  async function getOrderDetails() {
    try {
      const response = await axios.get(
        `${BACKEND_BASE_URL}/order/order-info/${params.orderId}`
      );
      setOrderInformation(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getOrderDetails();
  }, []);

  if (loading === true) {
    return (
      <div className="grid place-items-center py-24">
        <h1 className="text-3xl text-gray-500 tracking-wider animate-pulse">
          Getting orders....
        </h1>
      </div>
    );
  }

  return <OrderInfo orderInformation={orderInformation} />;
}
export default OrderDetails;