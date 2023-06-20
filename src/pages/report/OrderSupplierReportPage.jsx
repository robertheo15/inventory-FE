import React, { useEffect, useState } from "react";
import SideBar from "../../components/navigation/SideBar";
import TopNavigation from "../../components/Navigation/TopNavigation";
import Footer from "../../components/navigation/Footer";
import title from "../../utils/const/title";

import useTransactionsSuppliers from "../../hooks/useTransactionsSuppliers";
import ModalReportExpense from "../../components/modals/report/ModalReportExpense";

const requestBody = {
  status: "selesai",
};

const OrderSupplierReportPage = () => {
  const { transactionSuppliers } = useTransactionsSuppliers(requestBody);
  const [transactionSupplier, setTransactionSupplier] = useState({});

  useEffect(() => {
    document.title = title.orderReport;
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
        <h3 className="card-header">Laporan pesanan ke supplier</h3>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped" style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Invoice</th>
                    <th>Status</th>
                    <th>Supplier</th>
                    <th>Tanggal pesanan</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {transactionSuppliers.data != undefined ? (
                    transactionSuppliers.data.map((transaction, key) => {
                      const createdDate = new Date(transaction.created_at);
                      const updatedDate = new Date(transaction.updated_at);
                      return (
                        <>
                          <tr key={`transaction-${key}`}>
                            <td>{key + 1}</td>
                            <td>{transaction.invoice}</td>
                            <td>{transaction.status}</td>
                            <td>{transaction.supplier.brand_name}</td>
                            <td>{createdDate.toDateString()}</td>
                            <td>{updatedDate.toDateString()}</td>

                            <td>
                              <button
                                type="button"
                                className="btn btn-primary mx-1"
                                data-bs-toggle="modal"
                                data-bs-target="#modalReportExpense"
                                onClick={() => {
                                  const data = findTransactionSupplier(
                                    transaction.id
                                  );
                                  setTransactionSupplier(data);
                                }}
                              >
                                <i className="bi bi-pencil-square"></i>
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })
                  ) : (
                    <tr></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <ModalReportExpense
          transactionSupplier={transactionSupplier}
        />
        <Footer />
      </main>
    </>
  );
};

export default OrderSupplierReportPage;
