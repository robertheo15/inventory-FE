import React, { useEffect, useState } from "react";
import useTransactionsSuppliers from "../../hooks/useTransactionsSuppliers";

import TopNavigation from "../../components/navigation/TopNavigation";
import Footer from "../../components/navigation/Footer";
import SideBar from "../../components/navigation/SideBar";
import title from "../../utils/const/title";
import { ImCheckmark } from "react-icons/im";
import ModalExpense from "../../components/modals/transaction/ModalExpense";

const requestBody = {
  status: "sedang dikirim",
};

const OrderSupplierPage = () => {
  const { transactionSuppliers } = useTransactionsSuppliers(requestBody);
  const [transactionSupplier, setTransactionSupplier] = useState({});
  useEffect(() => {
    document.title = title.sales;
  }, []);

  const findTransactionSupplier = (transactionSupplierId) => {
    return transactionSuppliers.data.find(
      (transaction) => transaction.id === transactionSupplierId
    );
  };
  return (
    <>
      <SideBar />
      <main className="content">
        <TopNavigation />
        <div className="card border-0 shadow">
          <h3 className="card-header">Transaksi ke supplier</h3>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped" style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Invoice</th>
                    <th>Supplier</th>
                    <th>Status</th>
                    <th>Tanggal pesanan</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {transactionSuppliers.data != undefined
                    ? transactionSuppliers.data.map((transaction, key) => {
                        const date = new Date(transaction.created_at);
                        return (
                          <tr key={key}>
                            <td>{key + 1}</td>
                            <td>{transaction.invoice}</td>
                            <td>{transaction.supplier.brand_name}</td>
                            <td>{transaction.status}</td>
                            <td>{date.toDateString()}</td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-primary view_data"
                                data-bs-toggle="modal"
                                data-bs-target="#modalExpense"
                                onClick={() => {
                                  const data = findTransactionSupplier(
                                    transaction.id
                                  );
                                  setTransactionSupplier(data);
                                }}
                              >
                                <i className="bi bi-pencil-square"></i>
                              </button>
                              <button
                                type="button"
                                className="btn btn-success mx-1"
                              >
                                <ImCheckmark />
                              </button>
                            </td>
                          </tr>
                        );
                      })
                    : ""}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <ModalExpense transactionSupplier={transactionSupplier} />
      </main>
    </>
  );
};

export default OrderSupplierPage;
