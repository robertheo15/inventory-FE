import axios from "axios";
import BASE_URL from "../const/api-const";

const getProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    return { error: true, data: null };
  }
};

const getProductById = async (productId) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/${productId}`, {
      id: productId,
    });
    return response.data;
  } catch (error) {
    return { error: true, data: null };
  }
};

const getProductsBySupplierId = async (supplierId) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/suppliers/${supplierId}`, {
      supplier_id: supplierId,
    });
    return response.data;
  } catch (error) {
    return { error: true, data: null };
  }
};

const createProduct = async (product) => {
  try {
    const response = await axios.post(`${BASE_URL}/products`, product);
    return response.data;
  } catch (error) {
    return { error: true, data: null };
  }
};

const updateProductById = async (product) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/products/${product.id}`,
      product
    );
    return response.data;
  } catch (error) {
    return { error: true, data: null };
  }
};

const deleteProductByID = async (productId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/products/${productId}`, {
      id: productId,
    });
    return response.data;
  } catch (error) {
    return { error: true, data: null };
  }
};

export {
  getProducts,
  getProductById,
  getProductsBySupplierId,
  createProduct,
  updateProductById,
  deleteProductByID,
};
