import axios from "axios";
import BASE_URL from "../const/api-const";

const  getCustomers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/customers`);
    return response.data;
  } catch (error) {
    return { error: true, data: null };
  }
}



export {
  getCustomers
};
