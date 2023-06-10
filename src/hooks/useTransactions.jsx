import { useState, useEffect } from 'react';
import { getTransactions } from "../utils/api/transaction";


export const useTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTransactions();
        setTransactions(data);
    };
    fetchData();
  }, []);

  return { transactions};
};


export default useTransactions;
