import axios from "axios";
import BASE_URL from "../const/api-const";
import token from "../const/token";

const createProductVariant = async (productVariant) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/products/variants`,
      productVariant,
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

const getProductVariantsByProductId = async (productId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/products/${productId}/variants`,
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

const getProductVariants = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products/variants`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return { error: true, data: null };
  }
};

const getProductVariantById = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/products/variants/${id}`,
      {
        id: id,
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

const updateProductVariantById = async (productVariant) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/products/variants`,
      productVariant,
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

const deleteProductVariantById = async (productVariantId) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/products/variants/${productVariantId}`,
      {
        id: productVariantId,
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

export {
  createProductVariant,
  getProductVariantsByProductId,
  getProductVariantById,
  getProductVariants,
  updateProductVariantById,
  deleteProductVariantById,
};
