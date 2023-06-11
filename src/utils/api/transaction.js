import axios from "axios";
import BASE_URL from "../const/api-const";

const createTransactions = async (transactionRequestBody) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/transactions`,
      transactionRequestBody
    );
    return response.data;
  } catch (error) {
    return { error: true, data: null };
  }
};

const getTransactions = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/transactions`);
    return response.data;
  } catch (error) {
    return { error: true, data: null };
  }
};

export { getTransactions, createTransactions };
