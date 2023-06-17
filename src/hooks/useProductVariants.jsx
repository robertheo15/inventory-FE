import { useState, useEffect } from "react";
import { getProductVariants } from "../utils/api/productsVariant";

const useProductVariants = () => {
  const [productVariants, setProductVariants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductVariants();
      setProductVariants(data);
    };
    fetchData();
  }, []);

  return { productVariants };
};

export default useProductVariants;
