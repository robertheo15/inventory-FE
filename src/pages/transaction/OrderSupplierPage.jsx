import React, { useEffect } from "react";
import useTransactionsSuppliers from "../../hooks/useTransactionsSuppliers";

import TopNavigation from "../../components/Navigation/TopNavigation";
import Footer from "../../components/navigation/Footer";
import SideBar from "../../components/navigation/SideBar";
import title from "../../utils/const/title";

const requestBody = {
  status: "sedang dikemas",
};

const OrderSupplierPage = () => {
  const {transactionSuppliers}  = useTransactionsSuppliers(requestBody);

  useEffect(() => {
    document.title = title.sales;
  }, []);
  return (
    <>
      <SideBar />
      <main className="content">
        <TopNavigation />
        <div className="card border-0 shadow">
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-striped"
                style={{ width: "100%" }}
              >
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Question</th>
                    <th>Answer</th>
                    <th>Updated By</th>
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
                            <td>{transaction.status}</td>
                            <td>{date.toDateString()}</td>
                            <td>
                              <form className="d-inline">
                                <button
                                  type="submit"
                                  className="btn btn-danger"
                                >
                                  <i className="bi bi-trash-fill"></i>
                                </button>
                              </form>
                              <a id="" className="btn btn-primary view_data">
                                <i className="bi bi-pencil-square"></i>
                              </a>
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
        <Footer />
      </main>
    </>
  );
};

export default OrderSupplierPage;
