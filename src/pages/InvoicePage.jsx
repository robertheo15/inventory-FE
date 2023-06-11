import React, { useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import SideBar from "../components/navigation/SideBar";
import TopNavigation from "../components/Navigation/TopNavigation";
import Footer from "../components/navigation/Footer";
import TableInvoice from "../components/tables/TableInvoice";

const InvoicePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const transactionParent = location.state;

  // const navigateToAddCart = () => {
  //   useEffect(() => {
  //     navigate("/carts");
  //   }, []);
  // };

  // if (transactionParent == undefined || transactionParent == null) {
  //   navigateToAddCart();
  // }
  useEffect(() => {
    if (!transactionParent) {
    navigate("/carts");
    }
    }, [navigate, transactionParent]);
    
    if (!transactionParent) {
    return null;
    }

  return (
    <>
      <SideBar />
      <main className="content">
        <TopNavigation />

        <div className="row my-5">
          <div className="col-6">
            <div className="mb-2 d-flex">
              <h6 className="me-2">
                <b>Nama: </b>
              </h6>
              <h6 className="">{transactionParent?.customer.full_name}</h6>
            </div>
            <div className="mb-2 d-flex">
              <h6 className="me-2">
                <b>No HP: </b>
              </h6>
              <h6 className="">{transactionParent?.customer.phone_number}</h6>
            </div>
            <div className="mb-2 d-flex">
              <h6 className="me-2">
                <b>Alamat: </b>
              </h6>
              <h6 className="">{transactionParent?.customer.address}</h6>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <TableInvoice transactionChildren={transactionParent.children} />
            {/* 1 invoice = 1 component TableInvoice, tapi klo mau di modip juga bebas wkwkwkwk */}
            {/* <TableInvoice/> */}
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
};

export default InvoicePage;
