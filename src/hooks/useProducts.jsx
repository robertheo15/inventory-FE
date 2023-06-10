import { useState, useEffect } from 'react';
import { getProducts } from '../utils/api/products';


export const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchData();
  }, []);

  return { products};
};


export default useProducts;
