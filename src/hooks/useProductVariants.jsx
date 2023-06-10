import { useState, useEffect } from 'react';
import { getProductVariants } from '../utils/api/productsVariant';


export const useProductVariants = ({product_id}) => {
  const [productVariants, setProductVariants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductVariants({product_id});
      setProductVariants(data);
    };
    fetchData();
  }, []);

  return { productVariants};
};


export default useProductVariants;
