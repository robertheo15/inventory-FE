import React from "react";

const ModalCustomer = () => {

  return (
    <div
      className="modal fade"
      id="modalCustomer"
      tabIndex="-1"
      aria-labelledby="modalCustomerLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalCustomerLabel">
              Edit Product
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {/* Fill Input Modals */}
            <div className="mb-3 row">
              <label htmlFor="inputTitle1" className="col-sm-2 col-form-label">
                Nama lengkap:
              </label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="inputTitle1" />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputTitle2" className="col-sm-2 col-form-label">
                No hp:
              </label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="inputTitle2" />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputTitle3" className="col-sm-2 col-form-label">
                Alamat:
              </label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="inputTitle3" />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputTitle3" className="col-sm-2 col-form-label">
                Alamat email:
              </label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="inputTitle3" />
              </div>
            </div>
            {/* End Fill Input Modals */}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="button" className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCustomer;
