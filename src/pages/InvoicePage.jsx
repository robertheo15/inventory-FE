import React, { useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import SideBar from "../components/navigation/SideBar";
import TopNavigation from "../components/Navigation/TopNavigation";
import Footer from "../components/navigation/Footer";
import TableInvoice from "../components/tables/TableInvoice";
import title from "../utils/const/title";
import { ImPrinter } from "react-icons/im";


const InvoicePage = () => {
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
            <button type="button" className="btn btn-success col-5">
          <ImPrinter />
        </button>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <TableInvoice transactionChildren={transactionParent.children} />
          </div>
        </div>
      </main>
    </>
  );
};

export default InvoicePage;
