import React, { useState } from "react";
import rupiah from "../../utils/helper";
import ModalProductEdit from "../modals/ModalProductEdit";

const TableProductVariants = ({
  productVariants,
  handleDeleteProductVariant,
  setProductVariant,
  // handleUpdateProduct,
  // handleDeleteProduct,
}) => {

  const findProductVariant = (productVariantId) => {
    return productVariants.data.find((productVariant) => productVariant.id === productVariantId);
  };

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
            <th>Nama produk varianw</th>
            <th>Warna</th>
            <th>Lokasi</th>
            <th>Stok</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {productVariants.data != undefined
            ? productVariants.data.map((productVariant, key) => {
                return (
                  <tr key={key}>
                    <td>{key + 1}</td>
                    <td>{productVariant.product_name}</td>
                    <td>{productVariant.name}</td>
                    <td>{productVariant.colour}</td>
                    <td>{productVariant.location}</td>
                    <td>{productVariant.stock}</td>

                    <td>
                      <button
                        type="submit"
                        className="btn btn-danger mx-1"
                        onClick={() => {
                          console.log(productVariant.id)
                          handleDeleteProductVariant(productVariant.id);
                        }}
                      >
                        <i className="bi bi-trash-fill"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#modalProductVariantEdit"
                        onClick={() => {
                          console.log(productVariant)
                          setProductVariant(productVariant);
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
      {/* <ModalProductEdit */}
      {/* // product={product}
        // setProduct={setProduct}
        // handleUpdateProduct={handleUpdateProduct} */}
      {/* /> */}
    </div>
  );
};

export default TableProductVariants;
