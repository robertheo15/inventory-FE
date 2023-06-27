import React, { useState, useEffect } from "react";
import SideBar from "../../components/navigation/SideBar";
import TopNavigation from "../../components/Navigation/TopNavigation";
import Footer from "../../components/navigation/Footer";
import TableProducts from "../../components/tables/TableProducts";
import ModalProducts from "../../components/modals/ModalProductAdd";
import ModalItem from "../../components/modals/ModalItem";
import {
  createProduct,
  deleteProductByID,
  updateProductById,
} from "../../utils/api/products";
import useProducts from "../../hooks/useProducts";
import ModalChildProduct from "../../components/modals/ModalChildProduct";
import ModalProductAdd from "../../components/modals/ModalProductAdd";
import ModalProductEdit from "../../components/modals/ModalProductEdit";
import useSuppliers from "../../hooks/useSuppliers";

const ProductsPage = () => {
  const [product, setProduct] = useState({});
  const { products } = useProducts();
  const { suppliers } = useSuppliers();

  const handleCreateProduct = async (product) => {
    setProduct({
      ...product,
      product_id: "",
      type: "parent",
    });
    const productRequestBody = {
      product_id: "",
      type: product.type,
      name: product.name,
      brand: product.brand,
      description: product.description,
      base_price: parseFloat(product.base_price),
      eceran_price: parseFloat(product.eceran_price),
      grosir_price: parseFloat(product.grosir_price),
      supplier_id: "15818528-e7ad-4ab8-98c4-63de8cbddc22",
    };

    const response = await createProduct(productRequestBody);
    if (!response.error) {
      alert(response.message);
      setProduct("");
    }
  };

  const handleUpdateProduct = async (product) => {
    console.log(product);
    setProduct({
      ...product,
      product_id: "",
      type: "parent",
    });
    const productRequestBody = {
      product_id: "",
      type: product.type,
      name: product.name,
      brand: product.brand,
      description: product.description,
      base_price: parseFloat(product.base_price),
      eceran_price: parseFloat(product.eceran_price),
      grosir_price: parseFloat(product.grosir_price),
      supplier_id: "15818528-e7ad-4ab8-98c4-63de8cbddc22",
    };
    console.log(product);
    const response = await updateProductById(product);
    console.log(response);
    if (!response.error) {
      alert(response.message);
      setProduct("");
    }
  };

  const handleDeleteProduct = async (product) => {
    const result = confirm("Apakah Anda yakin ingin menghapus produk ini?");
    if (result) {
      const response = await deleteProductByID(product.id);
      console.log(response);
      if (!response.error) {
        alert(response.message);
        setProduct("");
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
            <h2 className="fw-bold mb-3">Produk</h2>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#modalProducts"
            >
              Tambah produk
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <TableProducts
              product={product}
              setProduct={setProduct}
              products={products}
              handleUpdateProduct={handleUpdateProduct}
              handleDeleteProduct={handleDeleteProduct}
            />
          </div>
        </div>
      
        {/* Modal Products */}
        <ModalProductAdd
          product={product}
          setProduct={setProduct}
          handleCreateProduct={handleCreateProduct}
          suppliers={suppliers}
        />

      </main>
    </>
  );
};

export default ProductsPage;
