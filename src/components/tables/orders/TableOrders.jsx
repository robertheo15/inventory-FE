import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import rupiah from "../../../utils/helper";

const TableOrders = ({ transactionDetails, setTransactionDetails }) => {
  const handleRemoveTransactionDetail = (index) => {
    const result = confirm("Apakah Anda yakin ingin menghapus produk ini?");
    if (result) {
      const updatedTransactionDetails = transactionDetails.filter(
        (_, i) => i !== index
      );
      setTransactionDetails(updatedTransactionDetails);      console.log(response);
      if (!response.error) {
        alert(response.message);
        setProduct("");
      }
    }
  };  
  
  return (
    <>
      <div className="table-responsive">
        <table className="table table-bordered" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama produk</th>
              <th>Nama produk varian</th>
              <th>Qty</th>
              <th>Total harga</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {transactionDetails.length > 0
              ? transactionDetails.map((detail, key) => {
                  return (
                    <tr key={key}>
                      <th scope="row">{key + 1}</th>
                      <td>{detail.product.name}</td>
                      <td>{`${detail.productVariant.name} ${detail.productVariant.colour}`}</td>
                      <td>{detail.qty}</td>
                      <td>{rupiah(detail.price)}</td>
                      <td>
                        <button
                          type="submit"
                          className="btn btn-danger mx-1"
                          onClick={() => {
                            handleRemoveTransactionDetail(key);
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
              : ""}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableOrders;
