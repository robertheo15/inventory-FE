import React, { useState } from "react";
import SideBar from "../../components/navigation/SideBar";
import TopNavigation from "../../components/Navigation/TopNavigation";
import Footer from "../../components/navigation/Footer";
import TableProducts from "../../components/tables/TableProducts";
import ModalProducts from "../../components/modals/ModalProductAdd";
import ModalItem from "../../components/modals/ModalItem";
import useProductVariants from "../../hooks/useProductVariants";
import TableProductVariants from "../../components/tables/TableProductVariants";
import { deleteProductVariantById } from "../../utils/api/productsVariant";
import ModalAddProductVariant from "../../components/modals/productVariant/ModalAddProductVariant";
import ModalEditProductVariant from "../../components/modals/productVariant/ModalEditProductVariant";

const ProductVariantPage = () => {
  const { productVariants } = useProductVariants();
  const [productVariant, setProductVariant] = useState({});

  const handleDeleteProductVariant = async (productVariantId) => {
    const result = confirm(
      "Apakah Anda yakin ingin menghapus produk varian ini?"
    );
    if (result) {
      const response = await deleteProductVariantById(productVariantId);
      console.log(response);
      if (!response.error) {
        alert(response.message);
        setProductVariant("");
      }
    }
  };

  return (
    <>
      <SideBar />
      <main className="content">
        <TopNavigation />

        <div className="row my-5">
          <div className="col-6">
            <h2 className="fw-bold mb-3">Produk varian</h2>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#modalProductVariant"
            >
              Tambah produk varian
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <TableProductVariants
              productVariants={productVariants}
              setProductVariant={setProductVariant}
              handleDeleteProductVariant={handleDeleteProductVariant}
            />
          </div>
        </div>

        {/* Modal Products */}
        <ModalAddProductVariant
          productVariant={productVariant}
          setProductVariant={setProductVariant}
        />

        {/* Modal Item List */}
        <ModalEditProductVariant
          productVariant={productVariant}
          setProductVariant={setProductVariant}
        />

      </main>
    </>
  );
};

export default ProductVariantPage;
