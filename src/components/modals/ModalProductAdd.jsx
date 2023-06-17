import React from "react";

const ModalProductAdd = ({
  product,
  setProduct,
  handleCreateProduct,
  suppliers,
}) => {
  const findSupplier = (supplierId) => {
    return suppliers.data.find((supplier) => supplier.id === supplierId);
  };

  return (
    <div
      className="modal fade"
      id="modalProducts"
      tabIndex="-1"
      aria-labelledby="modalProductsLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalProductsLabel">
              Add Products
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

            {/* Name */}
            <div className="mb-3 row">
              <label htmlFor="inputNama" className="col-sm-2 col-form-label">
                Nama
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputNama"
                  value={product.name}
                  onChange={(e) => {
                    setProduct({
                      ...product,
                      name: e.target.value,
                    });
                  }}
                />
              </div>
            </div>

            {/* Brand */}
            <div className="mb-3 row">
              <label htmlFor="inputBrabnd" className="col-sm-2 col-form-label">
                Brand
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputBrabnd"
                  value={product.brand}
                  onChange={(e) => {
                    setProduct({
                      ...product,
                      brand: e.target.value,
                    });
                  }}
                />
              </div>
            </div>

            {/* Stock */}
            <div className="mb-3 row">
              <label
                htmlFor="inputDescription"
                className="col-sm-2 col-form-label"
              >
                Description
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputDescription"
                  value={product.description}
                  onChange={(e) => {
                    setProduct({
                      ...product,
                      description: e.target.value,
                    });
                  }}
                />
              </div>
            </div>

            {/* Base Price */}
            <div className="mb-3 row">
              <label
                htmlFor="inputBasePrice"
                className="col-sm-2 col-form-label"
              >
                Base Price
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  min={0}
                  className="form-control"
                  id="inputBasePrice"
                  value={product.base_price}
                  onChange={(e) => {
                    setProduct({
                      ...product,
                      base_price: e.target.value,
                    });
                  }}
                />
              </div>
            </div>

            {/* Price Eceran */}
            <div className="mb-3 row">
              <label
                htmlFor="inputPriceEceran"
                className="col-sm-2 col-form-label"
              >
                Price Eceran
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  min={0}
                  className="form-control"
                  id="inputPriceEceran"
                  value={product.eceran_price}
                  onChange={(e) => {
                    setProduct({
                      ...product,
                      eceran_price: e.target.value,
                    });
                  }}
                />
              </div>
            </div>

            {/* Price Grosir */}
            <div className="mb-3 row">
              <label
                htmlFor="inputPriceGrosir"
                className="col-sm-2 col-form-label"
              >
                Price Grosir
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  min={0}
                  className="form-control"
                  id="inputPriceGrosir"
                  value={product.grosir_price}
                  onChange={(e) => {
                    setProduct({
                      ...product,
                      grosir_price: e.target.value,
                    });
                  }}
                />
              </div>
            </div>

            {/* Supplier */}
            <div className="mb-3 row">
              <div className="form-group">
                <div className="row">
                  <div className="col-sm-2">
                    <label htmlFor="suppliers">Supplier</label>
                  </div>
                  <div className="col-sm-10">
                    <select
                      className="form-control"
                      id="suppliers"
                      onChange={(e) => {
                        const supplier = findSupplier(e.target.value);
                        setProduct({
                          ...product,
                          supplier: supplier,
                        });
                      }}
                    >
                      <option value={""}>pilih supplier</option>
                      {suppliers.data != undefined
                        ? suppliers.data.map((supplier, key) => (
                            <option key={key} value={supplier.id}>
                              {supplier.brand_name}
                            </option>
                          ))
                        : ""}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            {/* End Fill Input Modals */}
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                handleCreateProduct(product);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProductAdd;
