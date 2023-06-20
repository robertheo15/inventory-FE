import React, { useEffect, useState } from "react";
import SideBar from "../../components/navigation/SideBar";
import TopNavigation from "../../components/Navigation/TopNavigation";
import Footer from "../../components/navigation/Footer";
import title from "../../utils/const/title";
import useTransactions from "../../hooks/useTransactions";
import { ImArrowDown2, ImCheckmark } from "react-icons/im";
import { updateStatusSedangDikirim } from "../../utils/api/transaction";
import ModalReportSales from "../../components/modals/report/ModalReportSales";

const requestBody = {
  status: "selesai",
};

const SalesPageReport = () => {
  const { transactions } = useTransactions(requestBody);
  const [transactionCustomer, setTransactionCustomer] = useState({});
  useEffect(() => {
    document.title = title.sales;
  }, []);

  const findTransactionCustomer = (transactionCustomerId) => {
    return transactions.data.find(
      (transaction) => transaction.id === transactionCustomerId
    );
  };

  return (
    <>
      <SideBar />
      <main className="content">
        <TopNavigation />
        <div className="card border-0 shadow">
          <h3 className="card-header">Laporan penjualan</h3>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped" style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Invoice</th>
                    <th>Status</th>
                    <th>Pembeli</th>
                    <th>Tanggal pesanan</th>
                    <th>Tanggal slesai</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.data != undefined ? (
                    transactions.data.map((transaction, key) => {
                      const createdDate = new Date(transaction.created_at);
                      const updatedDate = new Date(transaction.updated_at);
                      return (
                        <>
                          <tr key={`transaction-${key}`}>
                            <td>{key + 1}</td>
                            <td>{transaction.invoice}</td>
                            <td>{transaction.status}</td>
                            <td>{transaction.customer.full_name}</td>
                            <td>{createdDate.toDateString()}</td>
                            <td>{updatedDate.toDateString()}</td>

                            <td>
                              <button
                                type="button"
                                className="btn btn-info"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse-${key}`}
                                aria-expanded="false"
                                aria-controls={`collapse-${key}`}
                              >
                                <ImArrowDown2 />
                              </button>
                            </td>
                          </tr>
                          <tr
                            className="collapse"
                            id={`collapse-${key}`}
                            key={`collapse-${key}`}
                          >
                            <td colSpan="7">
                              <table
                                className="table"
                                style={{ width: "100%" }}
                              >
                                <thead>
                                  <tr>
                                    <th>No</th>
                                    <th>Child invoice</th>
                                    <th>Status</th>
                                    <th>Pembeli</th>
                                    <th>Tanggal pesanan</th>
                                    <th>Tanggal Selesai</th>
                                    <th>Aksi</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {transaction.children != undefined ? (
                                    transaction.children.map((child, key) => {
                                      const createdDate = new Date(
                                        transaction.created_at
                                      );
                                      const updatedDate = new Date(
                                        transaction.updated_at
                                      );

                                      return (
                                        <tr key={`child-${key}`}>
                                          <td>{key + 1}</td>
                                          <td>{child.invoice}</td>
                                          <td>{child.status}</td>
                                          <td>{child.customer.full_name}</td>
                                          <td>{updatedDate.toDateString()}</td>
                                          <td>{createdDate.toDateString()}</td>

                                          <td>
                                            <button
                                              type="button"
                                              className="btn btn-primary mx-1"
                                              data-bs-toggle="modal"
                                              data-bs-target="#modalReportSales"
                                              onClick={() => {
                                                const data = findTransactionCustomer(
                                                  child.id
                                                );
                                                setTransactionCustomer(
                                                  child.transaction_details
                                                );
                                              }}
                                            >
                                              <i className="bi bi-pencil-square"></i>
                                            </button>
                                          </td>
                                        </tr>
                                      );
                                    })
                                  ) : (
                                    <tr></tr>
                                  )}
                                </tbody>
                              </table>
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
        <ModalReportSales 
          transactionCustomer={transactionCustomer}  
        />
        <Footer />
      </main>
    </>
  );
};

export default SalesPageReport;
