import axios from "axios";
import BASE_URL from "../const/api-const";
import token from "../const/token";

const login = async (requestBody) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, requestBody);
    return response.data;
  } catch (error) {
    return { error: true, data: null };
  }
};

const getUserDetails = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/details`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return { error: true, data: null };
  }
};

const register = async (requestBody) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/admins/registers`,
      requestBody,
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

const getUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/admins/users`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return { error: true, data: null };
  }
};

const updateActiveUser = async (email, active) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/admins/actives`,
      {
        email: email,
        active: active,
      },
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

const changePassword = async (requestBody, token) => {
  try {
    const response = await axios.post(`${BASE_URL}/customers`, requestBody, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return { error: true, data: null };
  }
};

const changeUserData = async (requestBody, token) => {
  try {
    const response = await axios.post(`${BASE_URL}/customers`, requestBody, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return { error: true, data: null };
  }
};

export {
  login,
  getUserDetails,
  updateActiveUser,
  getUsers,
  register,
  changePassword,
  changeUserData,
};
