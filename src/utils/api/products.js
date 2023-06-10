import axios from "axios";
import BASE_URL from "../const/api-const";

const  getProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    return { error: true, data: null };
  }
}



export {
  getProducts
};
