import React from "react";
import getRole from "../../../utils/const/role";
import { ImStop2, ImPlay3 } from "react-icons/im";
const TableRoleManagement = ({ users }) => {
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
            <th>Address</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, key) => {
            return (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{user.full_name}</td>
                <td>{user.email}</td>
                <td>{user.phone_number}</td>
                <td>{user.address}</td>
                <td>{getRole(user.role)}</td>
                <td>
                  {user.active === 1 ? (
                    <button
                      type="submit"
                      className="btn btn-danger"
                      onClick={() => confirm("Are you sure?")}
                    >
                      <ImStop2 />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="btn btn-success"
                      onClick={() => confirm("Are you sure?")}
                    >
                      <ImPlay3 />
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableRoleManagement;
