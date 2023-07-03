import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TopNavigation from "../../components/navigation/TopNavigation";
import ModalCart from "../../components/Modals/ModalCart";
import TableTransactions from "../../components/Tables/TableTransactions";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { createTransactions } from "../../utils/api/transaction";
import useCustomers from "../../hooks/useCustomers";
import rupiah from "../../utils/helper";
import SideBar from "../../components/navigation/SideBar";
import title from "../../utils/const/title";

const transactionParentModel = {
  customer: "",
  status: "sedang dikemas",
  type: "parent",
  children: [],
};

const transactionChildren = {
  customer: "",
  status: "sedang dikemas",
  methode: "",
  priceType: "",
  type: "child",
  transaction_details: [],
};

const newTransaction_details = {
  transaction_details: [],
  methode: "",
  priceType: "",
  totalPrice: parseFloat(),
};

const newTransactionDetail = {
  product: {},
  productVariant: {},
  qty: parseFloat(),
  methode: "",
  priceType: "",
  price: parseFloat(),
};

const AddCartPage = () => {
  const navigate = useNavigate();
  const { customers } = useCustomers();
  const [transactionParent, setTransactionParent] = useState(
    transactionParentModel
  );

  useEffect(() => {
    document.title = title.cashier;
  }, []);

  const [transactionChild, setTransactionChild] = useState(transactionChildren);

  const [transactionDetail, setTransactionDetail] =
    useState(newTransactionDetail);
  const [transaction_details, setTransaction_details] = useState([]);

  const findCustomers = (customerId) => {
    return customers.data.find((customer) => customer.id === customerId);
  };

  const handleCreateTransaction = async (transaction) => {
    if (transaction.children.length == 0) {
      alert("Isi terlebih dahulu produk yang ingin dipesan!");
    }
    const transactionRequest = {
      invoice: `KRSX-${Date.now()}`,
      c_id: transaction.customer.id,
      status: "sedang dikemas",
      type: "parent",
      children: transaction.children,
    };

    const response = await createTransactions(transactionRequest);
    navigate("/invoices", { state: transactionParent });
  };

  const handleRemoveTransactionChildren = (index) => {
    const updatedChildren = transactionParent.children.filter(
      (_, i) => i !== index
    );
    const updatedTransactionParent = {
      ...transactionParent,
      children: updatedChildren,
    };
    setTransactionParent(updatedTransactionParent);
  };

  const totalPrice = transactionParent.children.reduce(
    (acc, child) => acc + child.totalPrice,
    0
  );

  return (
    <>
      <SideBar />
      <main className="content">
        <TopNavigation />

        <main>
          <section className="vh-100 d-flex align-items-start justify-content-center my-5">
            <div className="container">
              <h3>Kasir</h3>
              <hr />
              <div className="row align-items-start justify-content-start">
                <div className="col-12 col-lg-6 order-2 order-lg-1 text-center text-lg-left flex">
                  <div className="mb-3 row">
                    <label
                      htmlFor="inputName"
                      className="col-sm-4 col-form-label"
                    >
                      Nama pembeli:
                    </label>
                    <div className="col-sm-8">
                      <select
                        className="form-control"
                        id="productType"
                        onChange={(e) => {
                          const customer = findCustomers(e.target.value);
                          setTransactionParent({
                            ...transactionParent,
                            customer: customer,
                          });
                          setTransactionChild({
                            ...transactionChild,
                            customer: customer,
                            c_id: e.target.value,
                          });
                        }}
                      >
                        <option value={""}>pilih customer</option>
                        {customers.data != undefined
                          ? customers.data.map((customer, key) => (
                              <option key={key} value={customer.id}>
                                {customer.full_name}
                              </option>
                            ))
                          : ""}
                      </select>
                    </div>
                  </div>
                  <div className="mt-5 row">
                    {transactionParent.customer == "" ||
                    transactionParent.customer == undefined ? (
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => {
                          alert("Pilih pembeli terlebih dahulu!");
                        }}
                      >
                        Tambah
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#modalCart"
                      >
                        Tambah
                      </button>
                    )}
                  </div>
                </div>

                <div className="col-12 col-lg-6 order-1 order-lg-2 text-end d-flex flex-column align-items-end justify-content-end">
                  <h6>Total harga</h6>
                  <h4>
                    <b>{rupiah(totalPrice)}</b>
                  </h4>

                  {/* Button Checkout */}
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      handleCreateTransaction(transactionParent);
                      // console.log(transactionParent);
                    }}
                  >
                    checkout
                  </button>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-12">
                  {/* Table Transacti */}

                  <TableTransactions
                    transactionParent={transactionParent}
                    handleRemoveTransactionChildren={
                      handleRemoveTransactionChildren
                    }
                  />
                </div>
              </div>

              {/* Modals Cart */}
              <ModalCart
                customerId={transactionParent.customer.id}
                transactionParent={transactionParent}
                setTransactionParent={setTransactionParent}
                transactionChild={transactionChild}
                setTransactionChild={setTransactionChild}
                transaction_details={transaction_details}
                setTransaction_details={setTransaction_details}
                transactionDetail={transactionDetail}
                setTransactionDetail={setTransactionDetail}
              />
              {/* End Modals Cart */}

              {/* Modals Preview */}
              {/* <ModalPreview/> */}
              {/* End Modals Preview */}
            </div>
          </section>
        </main>
      </main>
      <HelmetProvider>
        <Helmet>
          <script src="/js/dataTable.js" type="text/javascript" />
        </Helmet>
      </HelmetProvider>
    </>
  );
};

export default AddCartPage;
