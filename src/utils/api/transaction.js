import axios from "axios";
import BASE_URL from "../const/api-const";
import token from "../const/token";

const createTransactions = async (transactionRequestBody) => {
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

const getTransactions = async (requestBody) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/transactions/status`,
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

const updateStatusSedangDikirim = async (transactionId) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/transactions/sends/${transactionId}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    return { error: true, data: null };
  }
};

const updateStatusSelesai = async (transactionId) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/transactions/finish/${transactionId}`,
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

export {
  getTransactions,
  createTransactions,
  updateStatusSedangDikirim,
  updateStatusSelesai,
};
