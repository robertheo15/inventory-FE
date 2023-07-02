import { useState, useEffect } from "react";
import { getProductVariantsByProductId } from "../utils/api/productsVariant";

const useProductVariantsByProductId = ({ product_id }) => {
  const [productVariantsByProductId, setProductVariantsByProductId] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductVariantsByProductId({ product_id });
      setProductVariantsByProductId(data);
    };
    fetchData();
  }, []);

  return { productVariantsByProductId };
};

export default useProductVariantsByProductId;
