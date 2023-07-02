import React from "react";

const ModalChangePassword = () => {
  return (
    <div
          className="modal fade"
          id="changePassword"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="changePasswordLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered"
            role="document"
            id="data_changePassword"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="changePasswordLabel">
                  Change Password
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
                <form action="" method="POST">
                  <div className="mb-3">
                    <label htmlFor="oldPassword">Old Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="oldPassword"
                      name="oldPassword"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="newPassword">New Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="newPassword"
                      name="newPassword"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      name="confirmPassword"
                    />
                  </div>
                  <button type="submit" className="btn btn-success mt-3">
                    Change
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
  )
}

export default ModalChangePassword;