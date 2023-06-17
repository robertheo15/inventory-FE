import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SideBar from "../../components/navigation/SideBar";
import TopNavigation from "../../components/Navigation/TopNavigation";
import Footer from "../../components/navigation/Footer";
import title from "../../utils/const/title";
import useTransactions from "../../hooks/useTransactions";

const requestBody = {
  status: "sedang dikemas",
};

const SalesPage = () => {
  const { transactions } = useTransactions(requestBody);


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
                // id="myTable"
                className="table table-striped"
                style={{ width: "100%" }}
              >
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Invoice</th>
                    <th>Status</th>
                    <th>Answer</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.data != undefined
                    ? transactions.data.map((transaction, key) => {
                        console.log(transactions.data);
                        const date = new Date(transaction.created_at);
                        return (
                          <tr key={key}>
                            <td>{key + 1}</td>
                            <td>{transaction.invoice}</td>
                            <td>{transaction.status}</td>
                            <td>{date.toDateString()}</td>
                            <td>
                              <form
                                action=""
                                method="POST"
                                className="d-inline"
                              >
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
      <HelmetProvider>
        <Helmet>
          <script src="/js/dataTable.js" type="text/javascript" />
        </Helmet>
      </HelmetProvider>
    </>
  );
};

export default SalesPage;
