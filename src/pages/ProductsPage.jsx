import React from 'react'
import SideBar from '../components/navigation/SideBar';
import TopNavigation from '../components/Navigation/TopNavigation';
import Footer from '../components/navigation/Footer';
import TableProducts from '../components/tables/TableProducts';
import ModalProducts from '../components/modals/ModalProducts';
import ModalItem from '../components/modals/ModalItem';

const ProductsPage = () => {
    
    return (
      <>
        <SideBar/>
        <main className="content">
          <TopNavigation/>
          
            <div class="row my-5">
                <div class="col-6">
                    <h2 className='fw-bold mb-3'>Add Product</h2>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalProducts">
                        Add Product
                    </button>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <TableProducts/>
                </div>
            </div>

            {/* Modal Products */}
            <ModalProducts/>

            {/* Modal Item */}
            <ModalItem/>

          <Footer/>
        </main>
      </>
    )
  }
  
  export default ProductsPage;