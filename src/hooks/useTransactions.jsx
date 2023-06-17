import { useState, useEffect } from "react";
import { getTransactions } from "../utils/api/transaction";


const useTransactions = (requestBody) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTransactions(requestBody);
      setTransactions(data);
    };
    fetchData();
  }, []);

  return { transactions };
};

export default useTransactions;
