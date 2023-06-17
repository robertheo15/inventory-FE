import axios from "axios";
import BASE_URL from "../const/api-const";

const createTransactionSupplier = async (transactionRequestBody) => {
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


const getTransactionsSupplier = async (requestBody) => {
  try {
    const response = await axios.post(`${BASE_URL}/transactions/suppliers/status`, 
      requestBody,
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return { error: true, data: null };
  }
};

export { getTransactionsSupplier, createTransactionSupplier };
