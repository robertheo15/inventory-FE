import React, { useState } from "react";
import { register } from "../../../utils/api/users";

const ModalAddAdmin = () => {
  const [user, setUser] = useState({});
  
  const handleCreateUser = async () => {
    const response = await register(user);
    if (response.error) {
      alert("Tidak berhasil!")
    } else {
      alert(response.message)
    }
  }; 

  return (
    <div
      className="modal fade"
      id="addAdmin"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="addAdminLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered"
        role="document"
        id="data_add_admin"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addAdminLabel">
              Tambah karyawan
            </h5>
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="fullname">Full name</label>
              <input
                type="text"
                className="form-control"
                id="fullname"
                name="full_name"
                onChange={(e) => {
                  setUser({ ...user, full_name: e.target.value });
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={(e) => {
                  setUser({ ...user, email: e.target.value });
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="number"
                className="form-control"
                id="phone"
                name="phone"
                onChange={(e) => {
                  setUser({ ...user, phone_number: e.target.value });
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                onChange={(e) => {
                  setUser({ ...user, address: e.target.value });
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                onChange={(e) => {
                  setUser({ ...user, password: e.target.value });
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="role">Role</label>
              <select
                className="form-select"
                id="role"
                name="select_role"
                onChange={(e) => {
                  setUser({ ...user, role: parseFloat(e.target.value) });
                }}
              >
                <option value="2" defaultValue={"selected"}>
                  Admin
                </option>
                <option value="3">Kurir</option>
              </select>
            </div>
            <button
              button
              type="submit"
              className="btn btn-success mt-3"
              onClick={() => {handleCreateUser();}}
            >
              Tambah
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAddAdmin;
