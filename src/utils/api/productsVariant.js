import axios from "axios";
import BASE_URL from "../const/api-const";

const getProductVariants = async (product_id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/products/${product_id}/variants`
    );
    return response.data;
  } catch (error) {
    return { error: true, data: null };
  }
};

export { getProductVariants };
