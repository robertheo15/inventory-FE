import React from "react";

const TableRoleManagement = () => {
  return (
    <div className="table-responsive">
      <table
        id=""
        className="table table-responsive table-striped"
        style={{ width: "100%" }}
      >
        <thead className="thead-light">
          <tr>
            <th>No</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Role</th>
            <th>Updated By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>asd</td>
            <td>asd</td>
            <td>asd</td>
            <td>
              <span className="badge rounded-pill bg-primary">Admin</span>
            </td>
            <td>asd</td>
            <td>
              <button
                type="submit"
                className="btn btn-danger"
                onClick={() => confirm("Are you sure?")}
              >
                <i className="bi bi-trash-fill"></i>
              </button>
              {/* <button type="submit" className="btn btn-danger mb-1">
            <i className="bi bi-play-circle-fill"></i>
          </button> */}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableRoleManagement;