import React from "react";

const ModalAddAdmin = () => {
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
            <form
              action='<?= base_url("admin/management/addadmin"); ?>'
              method="POST"
            >
              <div className="mb-3">
                <label htmlFor="fullname">FullName</label>
                <input
                  type="text"
                  className="form-control"
                  id="fullname"
                  name="full_name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="example@gmail.com"
                  name="email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  name="phone"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="role">Role</label>
                <select className="form-select" id="role" name="select_role">
                  {/* <option value="1">Super Admin</option> */}
                  <option value="1" defaultValue={"selected"}>
                    Admin
                  </option>
                  <option value="2">Kurir</option>
                </select>
              </div>
              <button button type="submit" className="btn btn-success mt-3">
                Tambah
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAddAdmin;
