import React from "react";
import useProducts from "../../../hooks/useProducts";
import { createProductVariant } from "../../../utils/api/productsVariant";

const ModalProductAddProductVariant = ({
  productVariant,
  setProductVariant,
}) => {
  const { products } = useProducts();

  // const findSupplier = (supplierId) => {
  //   return suppliers.data.find((supplier) => supplier.id === supplierId);
  // };

  const handleCreateProductVariant = async (productVariant) => {
    console.log(productVariant);
    const productVariantrReqBody = {
      p_id: productVariant.p_id,
      pv_id: "",
      name: productVariant.name,
      colour: productVariant.colour,
      stock: parseFloat(),
      type: productVariant.type,
    };
    const response = await createProductVariant(productVariantrReqBody);
    if (!response.error) {
      alert(response.message);
      setProductVariant("");
    }
  };

  return (
    <div
      className="modal fade"
      id="modalProductVariant"
      tabIndex="-1"
      aria-labelledby="modalProductVariant"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalProductVariant">
              Tambah produk varian
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

            {/* Product */}
            <div className="mb-3 row">
              <div className="form-group">
                <div className="row">
                  <div className="col-sm-2">
                    <label htmlFor="suppliers">Produk</label>
                  </div>
                  <div className="col-sm-10">
                    <select
                      className="form-control"
                      id="suppliers"
                      onChange={(e) => {
                        setProductVariant({
                          ...productVariant,
                          p_id: e.target.value,
                        });
                      }}
                    >
                      <option value={""}>pilih produk</option>
                      {products.data != undefined
                        ? products.data.map((product, key) => (
                            <option key={key} value={product.id}>
                              {product.name}
                            </option>
                          ))
                        : ""}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* varian name */}
            <div className="mb-3 row">
              <label htmlFor="inputNama" className="col-sm-2 col-form-label">
                Nama produk varian
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputNama"
                  value={productVariant.name}
                  onChange={(e) => {
                    setProductVariant({
                      ...productVariant,
                      name: e.target.value,
                    });
                  }}
                />
              </div>
            </div>

            {/* variant colour */}
            <div className="mb-3 row">
              <label htmlFor="inputBrabnd" className="col-sm-2 col-form-label">
                Nama varian warna
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputBrabnd"
                  value={productVariant.colour}
                  onChange={(e) => {
                    setProductVariant({
                      ...productVariant,
                      colour: e.target.value,
                    });
                  }}
                />
              </div>
            </div>

            {/* Stock */}
            <div className="mb-3 row">
              <label htmlFor="inputStock" className="col-sm-2 col-form-label">
                Stok
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  id="inputStock"
                  value={productVariant.stock}
                  onChange={(e) => {
                    setProductVariant({
                      ...productVariant,
                      stock: e.target.value,
                    });
                  }}
                />
              </div>
            </div>

            {/* Location */}
            <div className="mb-3 row">
              <label
                htmlFor="inputBasePrice"
                className="col-sm-2 col-form-label"
              >
                Lokasi
              </label>
              <div className="col-sm-10">
                <select
                  className="form-control"
                  id="suppliers"
                  onChange={(e) => {
                    setProductVariant({
                      ...productVariant,
                      location: e.target.value,
                    });
                  }}
                >
                  <option value={""}>pilih lokasi</option>
                  <option value={"gudang"}>Gudang</option>
                  <option value={"toko"}>Toko</option>
                </select>
              </div>
            </div>
            <div className="mb-3 row">
              <label
                htmlFor="inputBasePrice"
                className="col-sm-2 col-form-label"
              >
                Tipe produk varian
              </label>
              <div className="col-sm-10">
                <select
                  className="form-control"
                  id="suppliers"
                  onChange={(e) => {
                    setProductVariant({
                      ...productVariant,
                      type: e.target.value,
                    });
                  }}
                >
                  <option value={""}>pilih tipe</option>
                  <option value={"parent"}>Stock grosir</option>
                </select>
              </div>
            </div>
            {/* End Fill Input Modals */}
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                handleCreateProductVariant(productVariant);
              }}
            >
              Tambah produk varian
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProductAddProductVariant;
