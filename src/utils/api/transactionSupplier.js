import axios from "axios";
import BASE_URL from "../const/api-const";
import token from "../const/token";

const createTransactionSupplier = async (transactionRequestBody) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/transactions`,
      transactionRequestBody,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    return { error: true, data: null };
  }
};

const getTransactionsSupplier = async (requestBody) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/transactions/suppliers/status`,
      requestBody,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return { error: true, data: null };
  }
};

export { getTransactionsSupplier, createTransactionSupplier };
