import React, { useEffect, useRef } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import SideBar from "../components/navigation/SideBar";
import TopNavigation from "../components/navigation/TopNavigation";
import Footer from "../components/navigation/Footer";
import TableInvoice from "../components/tables/TableInvoice";
import title from "../utils/const/title";
import { ImPrinter } from "react-icons/im";
import rupiah from "../utils/helper";
import ReactToPrint from "react-to-print";

const InvoicePage = () => {
  const componentRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  const transactionParent = location.state;

  useEffect(() => {
    if (!transactionParent) {
      navigate("/cashier");
    }
  }, [navigate, transactionParent]);

  useEffect(() => {
    document.title = title.invoices;
  }, []);

  if (!transactionParent) {
    return null;
  }
  let total_price = 0;

  for (const transaction of transactionParent?.children) {
    total_price += transaction.totalPrice;
  }
  return (
    <>
      <SideBar />
      <main className="content">
        <TopNavigation />
        <div class="row mx-1 pt-5 printContent">
          <ReactToPrint
            documentTitle="UbahNamaDisini"
            trigger={() => (
              <button type="button" className="btn btn-success col-4">
                <ImPrinter />
              </button>
            )}
            content={() => componentRef.current}
          />
        </div>
        <div className="row" ref={componentRef}>
          <div className="row printContent p-3" ref={componentRef}>
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
              <div className="mb-2 d-flex">
                <h6 className="me-2">
                  <b>Total Price: {rupiah(total_price)}</b>
                </h6>
              </div>

              {/* <button type="button" className="btn btn-success col-5">
                <ImPrinter />
              </button> */}
            </div>
            <TableInvoice transactionChildren={transactionParent.children} />
          </div>
          {/* <div className="row" ref={componentRef}> */}
          {/* <div className="col-12"> */}
          {/* </div>
          </div> */}
        </div>
      </main>
    </>
  );
};

export default InvoicePage;
