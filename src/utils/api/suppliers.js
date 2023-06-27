import axios from "axios";
import BASE_URL from "../const/api-const";
import token from "../const/token";

const getSuppliers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/suppliers`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return { error: true, data: null };
  }
};

export { getSuppliers };
