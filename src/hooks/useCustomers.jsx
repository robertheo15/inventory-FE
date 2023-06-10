import { useState, useEffect } from 'react';
import { getCustomers } from '../utils/api/customers';


export const useCustomers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCustomers();
      setCustomers(data);
    };
    fetchData();
  }, []);

  return { customers};
};


export default useCustomers;
