import React, { useState } from "react";
import useProducts from "../../hooks/useProducts";
import rupiah from "../../utils/helper";
import { getProductVariantsByProductId } from "../../utils/api/productsVariant";

const ModalCart = ({
  customerId,
  transactionParent,
  setTransactionParent,
  transactionChild,
  setTransactionChild,
  transaction_details,
  setTransaction_details,
  transactionDetail,
  setTransactionDetail,
}) => {
  const { products } = useProducts();
  const [productVariants, setProductVariants] = useState([]);
  // const [transactionDetail, setTransactionDetail] = useState(newTransactionDetail);
  const handleRemoveTransactionDetail = (index) => {
    const updatedtransaction_details = transaction_details.filter(
      (_, i) => i !== index
    );
    setTransaction_details(updatedtransaction_details);
  };

  const findProducts = (productId) => {
    return products.data.find((product) => product.id === productId);
  };

  const findProductVariants = (variantId) => {
    return productVariants.data.find((variant) => variant.id === variantId);
  };

  return (
    <div
      className="modal fade"
      id="modalCart"
      tabIndex="-1"
      aria-labelledby="modalCartLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalCartLabel">
              Cashier Carts
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
                Produk:
              </label>
              <div className="col-sm-10">
                <select
                  className="form-control"
                  id="productType"
                  onChange={(e) => {
                    const product = findProducts(e.target.value);
                    setTransactionDetail({
                      ...transactionDetail,
                      c_id: customerId,
                      product: product,
                      product_id: e.target.value,
                      // product_name: product.handleRemoveTransactionDetail
                    });

                    getProductVariantsByProductId(e.target.value).then(
                      (result) => setProductVariants(result)
                    );
                  }}
                >
                  <option value={""}>Pilih produk</option>
                  {products.data != undefined ? (
                    products.data.map((product, key) => (
                      <option key={key} value={product.id}>
                        {product.name}
                      </option>
                    ))
                  ) : (
                    <></>
                  )}
                </select>
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="inputTitle1" className="col-sm-2 col-form-label">
                Produk variant:
              </label>
              <div className="col-sm-10">
                <select
                  className="form-control"
                  id="productType"
                  onChange={(e) => {
                    const variant = findProductVariants(e.target.value);
                    setTransactionDetail({
                      ...transactionDetail,
                      productVariant: variant,
                      product_variant_id: e.target.value,
                    });
                  }}
                >
                  <option value={""}>Pilih produk varian</option>
                  {productVariants.data != undefined ? (
                    productVariants.data.map((variant, key) => (
                      <option
                        key={key}
                        value={variant.id}
                      >{`${variant.name} ${variant.colour} - Stok ${variant.stock} - GUDANG`}</option>
                    ))
                  ) : (
                    <></>
                  )}
                </select>
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="inputTitle2" className="col-sm-2 col-form-label">
                Jumlah:
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  id="inputTitle2"
                  value={transactionDetail.qty}
                  onChange={(e) => {
                    setTransactionDetail({
                      ...transactionDetail,
                      qty: parseFloat(e.target.value),
                    });
                  }}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputTitle3" className="col-sm-2 col-form-label">
                Tipe harga:
              </label>
              <div className="col-sm-10">
                <select
                  className="form-control"
                  onChange={(e) => {
                    const price =
                      e.target.value === "grosir"
                        ? transactionDetail.product.grosir_price
                        : transactionDetail.product.eceran_price;
                    setTransactionDetail({
                      ...transactionDetail,
                      priceType: e.target.value,
                      price: price,
                    });
                  }}
                >
                  <option value={""}>Pilih tipe harga</option>
                  <option value={"grosir"}>Grosir</option>
                  <option value={"eceran"}>Eceran</option>
                </select>
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputTitle3" className="col-sm-2 col-form-label">
                Metode:
              </label>
              <div className="col-sm-10">
                <select
                  className="form-control"
                  onChange={(e) => {
                    setTransactionDetail({
                      ...transactionDetail,
                      methode: e.target.value,
                    });
                    // console.log(transactionDetail);
                  }}
                >
                  <option value={""}>Pilih metode</option>
                  <option value={"pick-up"}>Pick up</option>
                  <option value={"pengiriman"}>Pengiriman</option>
                  <option value={"indent"}>Indent</option>
                </select>
              </div>
            </div>
            <div className="mb-3 row px-3">
              <button
                type="button"
                className="btn btn-primary ms-auto"
                style={{ width: "fit-content" }}
                onClick={() => {
                  if (
                    Object.keys(transactionDetail.product).length === 0 &&
                    transactionParent.detail == undefined &&
                    transactionParent.detail == null
                  ) {
                    alert("Tambah produk terlebih dahulu!");
                  } else {
                    setTransaction_details([
                      ...transaction_details,
                      transactionDetail,
                    ]);
                  }
                }}
              >
                Add to Cart
              </button>
            </div>
            {/* End Fill Input Modals */}

            {/* Cashier Cart Table | Option Delete! */}
            <div style={{ maxHeight: "250px", overflowY: "scroll" }}>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Metode</th>
                    <th scope="col">Harga</th>
                    <th scope="col">Total harga</th>
                    <th scope="col">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {transaction_details != undefined ? (
                    transaction_details.map((detail, key) => {
                      return (
                        <tr key={key}>
                          <th scope="row">{key + 1}</th>
                          <td>{`${detail.product.name} ${detail.productVariant.name} ${detail.productVariant.colour}`}</td>
                          <td>{detail.qty}</td>
                          <td>{detail.methode}</td>
                          <td>{rupiah(detail.price)}</td>
                          <td>{rupiah(detail.price * detail.qty)}</td>
                          <td>
                            <button
                              type="submit"
                              className="btn btn-danger mx-1"
                              onClick={() => handleRemoveTransactionDetail(key)}
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
                  ) : (
                    <></>
                  )}
                </tbody>
              </table>
            </div>
            {/* End Cashier Cart Table | Option Delete! */}
          </div>

          <div className="d-flex justify-content-end px-3">
            <h6 className="me-2">Total harga: </h6>
            {transaction_details.length > 0 ? (
              <h6 className="fw-bolder">
                {rupiah(
                  transaction_details.reduce(
                    (total, transactionDetail) =>
                      total + transactionDetail.qty * transactionDetail.price,
                    0
                  )
                )}
              </h6>
            ) : (
              0
            )}
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={() => {
                if (transaction_details == 0) {
                  alert("isi keranjang terlebih dahulu!");
                } else {
                  setTransactionParent((prevState) => ({
                    ...prevState,
                    children: [
                      ...prevState.children,
                      {
                        c_id : customerId,
                        invoice: `KRSX-${Date.now()}`,
                        transaction_details: transaction_details,
                        totalPrice: transaction_details.reduce(
                          (total, transactionDetail) =>
                            total +
                            transactionDetail.qty * transactionDetail.price,
                          0
                        ),
                        methode: transaction_details[0].methode,
                      },
                    ],
                  }));
                  setTransaction_details([]);
                  setTransactionDetail({});
                }
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCart;
