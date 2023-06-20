import React, { useEffect } from "react";
import SideBar from "../../components/navigation/SideBar";
import TopNavigation from "../../components/Navigation/TopNavigation";
import Footer from "../../components/navigation/Footer";
import title from "../../utils/const/title";
import useTransactions from "../../hooks/useTransactions";
import { ImArrowDown2, ImCheckmark } from "react-icons/im";
import { updateStatusSedangDikirim } from "../../utils/api/transaction";
import useTransactionsSuppliers from "../../hooks/useTransactionsSuppliers";

const requestBody = {
  status: "sedang dikirim",
};

const BarangMasukPage = () => {
  const { transactionSuppliers } = useTransactionsSuppliers(requestBody);

  useEffect(() => {
    document.title = title.salesReport;
  }, []);

  const handleUpdateStatusSedangDikirim = async (transactionId) => {
    console.log(transactionId);
    const response = await updateStatusSedangDikirim(transactionId);
    if (!response.error) {
      alert(response.message);
    }
  };

  console.log(transactionSuppliers);

  return (
    <>
      <SideBar />
      <main className="content">
        <TopNavigation />
        <div className="card border-0 shadow">
          <h3 className="card-header">Barang masuk</h3>
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
                    <th>Tanggal selesai</th>
                    <th>Action</th>
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
                                data-bs-target="#modalPreview"
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

        <Footer />
      </main>
    </>
  );
};

export default BarangMasukPage;
