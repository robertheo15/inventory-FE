import React, { useState } from "react";
import useProducts from "../../../hooks/useProducts";
import rupiah from "../../../utils/helper";
import useSuppliers from "../../../hooks/useSuppliers";
import { getProductVariantsByProductId } from "../../../utils/api/productsVariant";
import { getProductsBySupplierId } from "../../../utils/api/products";

const ModalCartSupplier = ({
  transactionDetails,
  setTransactionDetails,
  // transactionParent,
  // setTransactionParent,
  // transactionChild,
  // setTransactionChild,

  // transactionDetail,
  // setTransactionDetail,
}) => {
  const { suppliers } = useSuppliers();
  const [products, setProducts] = useState([]);
  // const { products } = useProducts();
  const [productVariants, setProductVariants] = useState([]);
  const [transactionDetail, setTransactionDetail] = useState({});

  const findProducts = (productId) => {
    return products.data.find((product) => product.id === productId);
  };

  const findProductVariants = (variantId) => {
    return productVariants.data.find((variant) => variant.id === variantId);
  };

  // console.log(suppliers.data);
  // console.log(products);
  // console.log(productVariants);
  // console.log(transactionDetail);
  // console.log(transactionDetails);
  // const handleRemoveTransactionDetail = (index) => {
  //   const updatedTransactionDetails = transactionDetails.filter(
  //     (_, i) => i !== index
  //   );
  //   setTransactionDetails(updatedTransactionDetails);
  // };

  // const findProducts = (productId) => {
  //   return products.data.find((product) => product.id === productId);
  // };

  // const findProductVariants = (variantId) => {
  //   return productVariants.data.find((variant) => variant.id === variantId);
  // };

  return (
    <div
      className="modal fade"
      id="modalCartSupplier"
      tabIndex="-1"
      aria-labelledby="modalCartSupplierLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalCartSupplierLabel">
              Keranjang order
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
                Supplier:
              </label>
              <div className="col-sm-10">
                <select
                  className="form-control"
                  id="productType"
                  onChange={(e) => {
                    getProductsBySupplierId(e.target.value).then((products) => {
                      setProducts(products);
                    });
                    console.log(products);
                  }}
                >
                  <option value={""}>Pilih supplier</option>
                  {suppliers.data != undefined
                    ? suppliers.data.map((supplier, key) => (
                        <option key={key} value={supplier.id || ""}>
                          {supplier.brand_name}
                        </option>
                      ))
                    : ""}
                </select>
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputTitle1" className="col-sm-2 col-form-label">
                Produk:
              </label>
              <div className="col-sm-10">
                <select
                  className="form-control"
                  id="productType"
                  onChange={(e) => {
                    getProductVariantsByProductId(e.target.value).then(
                      (result) => setProductVariants(result)
                    );
                    const product = findProducts(e.target.value);
                    setTransactionDetail({
                      ...transactionDetail,
                      p_id: e.target.value,
                      product: product,
                    });
                  }}
                >
                  <option value={""}>Pilih produk</option>
                  {products.data != undefined
                    ? products.data.map((product, key) => (
                        <option key={key} value={product.id || ""}>
                          {product.name}
                        </option>
                      ))
                    : ""}
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
                    const productVariant = findProductVariants(e.target.value);
                    setTransactionDetail({
                      ...transactionDetail,
                      pv_id: e.target.value,
                      productVariant: productVariant,
                    });
                  }}
                >
                  <option value={""}>Pilih produk varian</option>
                  {productVariants.data != undefined
                    ? productVariants.data.map((variant, key) => (
                        <option
                          key={key}
                          value={variant.id || ""}
                        >{`${variant.name} ${variant.colour} - Stok ${variant.stock} - GUDANG`}</option>
                      ))
                    : ""}
                </select>
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="qty" className="col-sm-2 col-form-label">
                Jumlah:
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  id="qty"
                  value={transactionDetail.qty || ""}
                  onChange={(e) => {
                    setTransactionDetail({
                      ...transactionDetail,
                      qty: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputPrice" className="col-sm-2 col-form-label">
                Harga order:
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  id="inputPrice"
                  value={transactionDetail.price || ""}
                  onChange={(e) => {
                    setTransactionDetail({
                      ...transactionDetail,
                      price: e.target.value,
                      totalPrice: transactionDetail.qty * e.target.value,
                    });
                  }}
                />
              </div>
            </div>

            {/* End Cashier Cart Table | Option Delete! */}
          </div>

          {/* <div className="d-flex justify-content-end px-3">
            <h6 className="me-2">Total harga: </h6>
            {transactionDetails.length > 0 ? (
              <h6 className="fw-bolder">
                {rupiah(
                  transactionDetails.reduce(
                    (total, transactionDetail) =>
                      total + transactionDetail.qty * transactionDetail.price,
                    0
                  )
                )}
              </h6>
            ) : (
              0
            )}
          </div> */}

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
                setTransactionDetails([
                  ...transactionDetails,
                  transactionDetail,
                ]);
                //   if (transactionDetails.length == 0) {
                //     alert("isi keranjang terlebih dahulu!");
                //   } else {
                //     setTransactionParent((prevState) => ({
                //       ...prevState,
                //       children: [
                //         ...prevState.children,
                //         {
                //           invoice: `KRSX-${Date.now()}`,
                //           transactionDetails: transactionDetails,
                //           totalPrice: transactionDetails.reduce(
                //             (total, transactionDetail) =>
                //               total +
                //               transactionDetail.qty * transactionDetail.price,
                //             0
                //           ),
                //           deliveryOption: transactionDetails[0].deliveryOption,
                //         },
                //       ],
                //     }));
                //   }
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

export default ModalCartSupplier;
