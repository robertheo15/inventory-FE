import React, { useEffect } from "react";

import title from "../../utils/const/title";
import SideBar from "../../components/navigation/SideBar";
import TopNavigation from "../../components/Navigation/TopNavigation";
import Footer from "../../components/navigation/Footer";
import ModalCustomer from "../../components/modals/ModalCustomer";
import useCustomers from "../../hooks/useCustomers";

const CustomerPage = () => {
  const { customers } = useCustomers();

  useEffect(() => {
    document.title = title.sales;
  }, []);

  return (
    <>
      <SideBar />
      <main className="content">
        <TopNavigation />
        <div className="card border-0 shadow">
          <div className="card-header d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-outline-gray-600 d-inline-flex align-items-center"
              data-bs-toggle="modal"
              data-bs-target="#modalCustomer"
            >
              <i className=" bi bi-person-fill-add me-2"></i>
              Tambah pelanggan
            </button>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped" style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>nama pelanggan</th>
                    <th>No hp</th>
                    <th>Alamat email</th>
                    <th>Alamat</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.data != undefined
                    ? customers.data.map((customer, key) => {
                        console.log(customer);
                        return (
                          <tr key={key}>
                            <td>{key + 1}</td>
                            <td>{customer.full_name}</td>
                            <td>{customer.phone_number}</td>
                            <td>{customer.email}</td>
                            <td>{customer.address}</td>
                            <td>
                              <button type="submit" className="btn btn-danger mx-1">
                                <i className="bi bi-trash-fill "></i>
                              </button>

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
      </main>
      <ModalCustomer />
    </>
  );
};

export default CustomerPage;
