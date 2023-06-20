import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SideBar from "../../components/navigation/SideBar";
import TopNavigation from "../../components/Navigation/TopNavigation";
import Footer from "../../components/navigation/Footer";
import rupiah from "../../utils/helper";
import ModalCartSupplier from "../../components/modals/orders/ModalCartSupplier";
import TableOrders from "../../components/tables/orders/TableOrders";

// const transactionParentModel = {
//   customer: "",
//   status: "sedang dikemas",
//   type: "parent",
//   children: [],
// };

// const transactionChildren = {
//   customer: "",
//   status: "sedang dikemas",
//   deliveryOption: "",
//   priceType: "",
//   type: "child",
//   transactionDetails: [],
// };

// const newTransactionDetails = {
//   transactionDetails: [],
//   deliveryOption: "",
//   priceType: "",
//   totalPrice: 0,
// };

// const newTransactionDetail = {
//   product: {},
//   productVariant: {},
//   qty: 0,
//   deliveryOption: "",
//   priceType: "",
//   price: 0,
// };

const AddCartPageSupplier = () => {
  const [transaction, setTransaction] = useState({});
  const [transactionDetails, setTransactionDetails] = useState([]);
  // const [totalPrice, setTotalPrice] = useState(0);
  // let sumTotalPrice = 0;
  // console.log(sumTotalPrice);
  // const totalPrice = () => {
  //   let result = transactionDetails.map((detail) => {
  //     console.log(detail.totalPrice);
  //     price += detail.totalPrice
  //   })
  //   console.log(result);
  //   return result;
  // }
  // const findCustomers = (customerId) => {
  //   return customers.data.find((customer) => customer.id === customerId);
  // };

  // const handleCreateTransaction = (transaction) => {
  // if (transaction.children.length == 0) {
  //   alert("Isi terlebih dahulu produk yang ingin dipesan!");
  // }
  // const transactionRequest = {
  //   c_id: transaction.customer.id,
  //   status: "sedang dikemas",
  //   type: "parent",
  //   children: transaction.children,
  // };
  // console.log(transactionRequest);

  // const response = createTransactions(transatransactionRequestctionParent);
  // navigate("/invoices", { state: transactionParent });
  // };

  // const handleRemoveTransactionChildren = (index) => {
  //   const updatedChildren = transactionParent.children.filter(
  //     (_, i) => i !== index
  //   );
  //   const updatedTransactionParent = {
  //     ...transactionParent,
  //     children: updatedChildren,
  //   };
  //   setTransactionParent(updatedTransactionParent);
  // };

  // const totalPrice = transactionParent.children.reduce(
  //   (acc, child) => acc + child.totalPrice,
  //   0
  // );
  // console.log(transactionParent);
  console.log(transactionDetails);
  console.log(transaction);

  const totalPrice = () => {
    let price = 0;
    transactionDetails.map((detail) => {
      price = price + detail.totalPrice;
    });
    return price;
  };
  return (
    <>
      <SideBar />
      <main className="content">
        <TopNavigation />

        <main>
          <section className="vh-100 d-flex align-items-start justify-content-center my-5">
            <div className="container">
              <h3>Pesan ke supplier</h3>

              <div className="row align-items-start justify-content-start">
                <div className="col-12 col-lg-6 order-2 order-lg-1 text-center text-lg-left flex">
                  <div className="mt-5 row">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#modalCartSupplier"
                    >
                      Tambah
                    </button>
                  </div>
                </div>

                <div className="col-12 col-lg-6 order-1 order-lg-2 text-end d-flex flex-column align-items-end justify-content-end">
                  <h6>Total harga</h6>
                  <h4>
                    <b>
                      {transactionDetails.length > 0 &&
                      Array.isArray(transactionDetails) ? (
                        <h6 className="fw-bolder">{rupiah(totalPrice())}</h6>
                      ) : (
                        0
                      )}
                    </b>
                  </h4>

                  {/* Button Checkout */}
                  <button
                    type="button"
                    className="btn btn-primary"
                    // onClick={() => {
                    //   handleCreateTransaction(transactionParent);
                    // }}
                  >
                    checkout
                  </button>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-12">
                  {/* Table Transacti */}
                  <TableOrders
                    transactionDetails={transactionDetails}
                    setTransactionDetails={setTransactionDetails}
                  />
                </div>
              </div>

              {/* Modals Cart */}
              <ModalCartSupplier
                transactionDetails={transactionDetails}
                setTransactionDetails={setTransactionDetails}
              />
              {/* End Modals Cart */}

              {/* Modals Preview */}
              {/* <ModalPreview/> */}
              {/* End Modals Preview */}
            </div>
          </section>
        </main>

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

export default AddCartPageSupplier;
