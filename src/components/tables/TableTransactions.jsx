import React from "react";
import rupiah from "../../utils/helper";

const TableTransactions = ({
  transactionParent,
  handleRemoveTransactionChildren,
}) => {
  // console.log(transactionParent.children);
  return (
    <>
      <div className="table-responsive">
        <table className="table table-bordered" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>No</th>
              <th>Transaksi</th>
              <th>Metode pengiriman</th>
              <th>Total harga</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {transactionParent.children.length > 0
              ? transactionParent.children.map((child, key) => {
                  return (
                    <tr key={key}>
                      <th scope="row">{key + 1}</th>
                      <td>{child.invoice}</td>
                      <td>{child.deliveryOption}</td>
                      <td>{rupiah(child.totalPrice)}</td>
                      <td>
                        <button
                          type="submit"
                          className="btn btn-danger mx-1"
                          onClick={() => {
                            handleRemoveTransactionChildren(key);
                          }}
                        >
                          <i className="bi bi-trash-fill"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#modalPreview"
                        >
                          <i className="bi bi-pencil-square"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })
              : <></>}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableTransactions;
