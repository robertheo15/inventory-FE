import React from "react";
import useProducts from "../../../hooks/useProducts";
import useProductVariants from "../../../hooks/useProductVariants";
import rupiah from "../../../utils/helper";

const ModalBarangMasuk = ({ transactionSupplier }) => {
  const { products } = useProducts();
  const { productVariants } = useProductVariants();
  // console.log(transactionSupplier);

  const findProduct = (productId) => {
    return products.data.find((product) => product.id === productId);
  };

  const findProductVariant = (variantId) => {
    // console.log(
    //   productVariants.data.find((variant) => variant.id === variantId)
    // );
    return productVariants.data.find((variant) => variant.id === variantId);
  };

  return (
    <div
      className="modal fade"
      id="modalBarangMasuk"
      tabIndex="-1"
      aria-labelledby="modalBarangMasukLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalBarangMasukLabel">
              Detail transaksi
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div
              style={{
                maxHeight: "300px",
                overflowY: "scroll",
                maxWidth: "100%",
              }}
            >
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Produk</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Harga</th>
                    <th scope="col">Total harga</th>
                    <th scope="col">Tanggal pesanan</th>
                    <th scope="col">Tanggal pesanan sampai</th>
                  </tr>
                </thead>
                <tbody>
                  {transactionSupplier.transaction_details != undefined ? (
                    transactionSupplier.transaction_details.map(
                      (detail, key) => {
                        const createdDate = new Date(detail.created_at);
                        const updatedDate = new Date(detail.updated_at);
                        const product = findProduct(detail.p_id);
                        const productVariant = findProductVariant(detail.pv_id);

                        return (
                          <tr key={key}>
                            <td>{key + 1}</td>
                            <td>{`${product.name} - ${productVariant.name} ${productVariant.colour}`}</td>
                            <td>{detail.qty}</td>
                            <td>{rupiah(detail.price)}</td>
                            <td>{rupiah(detail.qty * detail.price)}</td>
                            <td>{createdDate.toDateString()}</td>
                            <td>{updatedDate.toDateString()}</td>
                          </tr>
                        );
                      }
                    )
                  ) : (
                    <tr></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBarangMasuk;
