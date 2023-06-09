import React from "react";
import rupiah from "../../utils/helper";

const TableInvoice = ({ transactionChildren }) => {
  return (
    <div className="row mb-4">
      <div className="col-12">
        {transactionChildren?.map((child, key) => {
          return (
            <div key={key}>
              <h6 key={key}>
                <b>{child.invoice}</b>
                <br/>
                <b>{child.methode}</b>
              </h6>
              <div className="table-responsive table-bordered">
                <table
                  id="myTable"
                  className="table table-striped"
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Qty</th>
                      <th>Harga</th>
                    </tr>
                  </thead>
                  <tbody>
                    {child?.transaction_details?.map((detail) => {
                      return (
                        <tr key={key}>
                          <td>{`${detail?.product.name} - ${detail.productVariant.name} ${detail.productVariant.colour}`}</td>
                          <td>{detail.qty}</td>
                          <td>{rupiah(detail.qty * detail.price)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TableInvoice;
