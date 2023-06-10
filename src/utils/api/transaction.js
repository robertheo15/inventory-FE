import axios from "axios";
import BASE_URL from "../const/api-const";

const  createTransactions = async (transactionRequestBody) => {
  try {
    const response = await axios.post(`${BASE_URL}/transactions`, {
      "transaction_id": "",
      "c_id": "7d604915-bb09-4ac8-aff8-c308b3c2cace",
      "status": "abc",
      "type": "parent",
      "children": [
        {
          "c_id": "7d604915-bb09-4ac8-aff8-c308b3c2cace",
          "status": "abc",
          "type": "child",
          "transaction_details": [
            {
              "product_id": "d1805378-9424-40d6-862d-d97b854a151d",
              "price": 15000,
              "qty": 1
            }
          ]
        }
      ]
    });
    return response.data;
  } catch (error) {
    return { error: true, data: null };
  }
}


const  getTransactions = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/transactions`);
    return response.data;
  } catch (error) {
    return { error: true, data: null };
  }
}



export {
  getTransactions,
  createTransactions
};
