import { useState, useEffect } from "react";
import { getTransactionsSupplier } from "../utils/api/transactionSupplier";

const useTransactionsSuppliers = (requestBody) => {
  const [transactionSuppliers, setTransactionSuppliers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTransactionsSupplier(requestBody);
      setTransactionSuppliers(data);
    };
    fetchData();
  }, []);
  return { transactionSuppliers };
};

export default useTransactionsSuppliers;
