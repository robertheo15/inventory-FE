import axios from "axios";
import BASE_URL from "../const/api-const";

const createProductVariant = async (productVariant) => {
  try {
    console.log(productVariant);
    const response = await axios.post(
      `${BASE_URL}/products/variants`,
      productVariant
    );
    return response.data;
  } catch (error) {
    return { error: true, data: null };
  }
};

const getProductVariantsByProductId = async (product_id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/products/${product_id}/variants`
    );
    return response.data;
  } catch (error) {
    return { error: true, data: null };
  }
};

const getProductVariants = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products/variants`);
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
  getProductVariants,
  deleteProductVariantById,
};
