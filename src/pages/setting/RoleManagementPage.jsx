import React, { useEffect, useState } from "react";
import SideBar from "../../components/navigation/SideBar";
import TopNavigation from "../../components/Navigation/TopNavigation";
import TableRoleManagement from "../../components/tables/setting/TableRoleManagement";
import ModalAddAdmin from "../../components/modals/setting/ModalAddAdmin";
import Footer from "../../components/navigation/Footer";

const RoleManagementPage = () => {
  const [user, setUser] = useState({});

  return (
    <>
      <SideBar />
      <main className="content">
        <TopNavigation />
        <div className="card border-0 shadow">
          <h3 className="card-header">Manajemen karyawan</h3>
          <div className="card-header d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-outline-gray-600 d-inline-flex align-items-center"
              data-bs-toggle="modal"
              data-bs-target="#addAdmin"
            >
              <i className=" bi bi-person-fill-add me-2"></i>
              Tambah karyawan
            </button>
          </div>

          <div className="card-body">
            <TableRoleManagement />
          </div>
        </div>

        {/* <!-- Modal Add Admin--> */}
        <ModalAddAdmin />
        <div
          className="modal fade"
          id="edit_admin"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="edit_admin"
          aria-hidden="true"
        >
          <div
            className="modal-dialog"
            role="document"
            id="data_edit_admin"
          ></div>
        </div>
      </main>
    </>
  );
};

export default RoleManagementPage;
