import { useState, useEffect } from 'react';
import { getSuppliers } from '../utils/api/suppliers';


export const useSuppliers = () => {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSuppliers();
      setSuppliers(data);
    };
    fetchData();
  }, []);

  return { suppliers};
};


export default useSuppliers;
