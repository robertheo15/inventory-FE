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


const getTransactions = async (requestBody) => {
  try {
    const response = await axios.post(`${BASE_URL}/transactions/status`, 
      requestBody,
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    return { error: true, data: null };
  }
};

export { getTransactions, createTransactions };
