import React, { useState } from "react";
import rupiah from "../../utils/helper";
import ModalProductEdit from "../modals/ModalProductEdit";

const TableProducts = ({
  product,
  setProduct,
  products,
  handleUpdateProduct,
  handleDeleteProduct,
}) => {
  return (
    <div className="table-responsive">
      <table
        id="myTable"
        className="table table-striped"
        style={{ width: "100%" }}
      >
        <thead>
          <tr>
            <th>No</th>
            <th>Nama produk</th>
            <th>Deskripsi</th>
            <th>Harga dasar</th>
            <th>Harga eceran</th>
            <th>Harga grosir</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.data != undefined
            ? products.data.map((product, key) => {
                return (
                  <tr key={key}>
                    <td>{key + 1}</td>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{rupiah(product.base_price)}</td>
                    <td>{rupiah(product.eceran_price)}</td>
                    <td>{rupiah(product.grosir_price)}</td>

                    <td>
                      <button type="submit" className="btn btn-danger mx-1"
                        onClick={() => {
                          handleDeleteProduct(product);
                        }}
                      >
                        <i className="bi bi-trash-fill"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#modalProductEdit"
                        onClick={() => {
                          setProduct(product);
                        }}
                      >
                        <i className="bi bi-pencil-square"></i>
                      </button>
                    </td>
                  </tr>
                );
              })
            : undefined}
        </tbody>
      </table>
      {/* Modal Item List */}
      <ModalProductEdit
        product={product}
        setProduct={setProduct}
        handleUpdateProduct={handleUpdateProduct}
      />
    </div>
  );
};

export default TableProducts;
