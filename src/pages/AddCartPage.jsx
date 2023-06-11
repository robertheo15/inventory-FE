import React, { useState } from 'react'
import SideBar from '../components/navigation/SideBar'
import TopNavigation from '../components/Navigation/TopNavigation'
import Footer from '../components/navigation/Footer'
import ModalCart from '../components/Modals/ModalCart'
import ModalPreview from '../components/Modals/ModalPreview'
import TableTransactions from '../components/Tables/TableTransactions'
import {Helmet, HelmetProvider } from "react-helmet-async";
import { createTransactions } from '../utils/api/transaction'
import useCustomers from '../hooks/useCustomers'
import rupiah from '../utils/helper'


const transactionParentModel = {
  customer: "",
  status: "sedang dikemas",
  type: "parent",
  children :[]
};

const transactionChildren = {
  customer: "",
  status: "sedang dikemas",
  deliveryOption : "",
  priceType: "",
  type: "child",
  transactionDetails :[]
};

const  newTransactionDetails = {
  transactionDetails: [],
  deliveryOption: "",
  priceType: "",
  totalPrice: 0,

};

const  newTransactionDetail = {
  product : {},
  productVariant: {},
  qty: 0,
  deliveryOption: "",
  priceType: "",
  price: 0,

};

const AddCartPage = () => {
  const { customers } = useCustomers();
  const [transactionParent, setTransactionParent] = useState(transactionParentModel);

  const [transactionChild, setTransactionChild] = useState(transactionChildren);

  const [transactionDetail, setTransactionDetail] = useState(newTransactionDetail);
  const [transactionDetails, setTransactionDetails] = useState([]);

  const findCustomers = (customerId) => {
    return customers.data.find((customer) => customer.id === customerId);
  };

  const handleRemoveTransactionChildren = (index) => {
    const updatedChildren = transactionParent.children.filter((_, i) => i !== index);
    const updatedTransactionParent = { ...transactionParent, children: updatedChildren };
    setTransactionParent(updatedTransactionParent);
  };
  
  const totalPrice = transactionParent.children.reduce((acc, child) => acc + child.totalPrice, 0);

  console.log(transactionParent);

  return (
    <>
    <SideBar/>
    <main className="content">
    <TopNavigation/>

      <main>
        <section className="vh-100 d-flex align-items-start justify-content-center my-5">
          <div className="container">
            <div className="row align-items-start justify-content-start">
              <div className="col-12 col-lg-6 order-2 order-lg-1 text-center text-lg-left flex">

                <div className="mb-3 row">
                  <label htmlFor="inputName" className="col-sm-4 col-form-label">Nama pembeli:</label>
                    <div className="col-sm-8">
                      <select className="form-control" id="productType" onChange={e => {
                                const customer = findCustomers(e.target.value);
                                setTransactionParent({ ...transactionParent, customer: customer });
                                setTransactionChild({ ...transactionChild, customer: customer });
                            }}>
                            <option value={""}>pilih customer</option>
                      {  
                        (customers.data != undefined ? 
                          (customers.data.map((customer, key) => (
                            
                            <option key={key} value={customer.id} 
                              >{customer.full_name}</option>
        
                          )))
                         : "")
                      }             
                      </select>
                    </div>
                  </div>
                {/* <div className="mb-3 row">
                  
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Name:</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputName" value={transactionParentState.c_id} 
                    onChange={e => {
                      setTransactionParent({ ...transactionParentState, c_id: e.target.value });
                    }} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputNumber" className="col-sm-2 col-form-label">Number:</label>
                    <div className="col-sm-10">
                    <input type="number" className="form-control" id="inputNumber"/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputAddress" className="col-sm-2 col-form-label">Address:</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputAddress"/>
                    </div>
                </div> */}
                <div className="mt-5 row">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalCart">
                        Tambah
                    </button>
                </div>

              </div>

              <div className="col-12 col-lg-6 order-1 order-lg-2 text-end d-flex flex-column align-items-end justify-content-end">
                <h6>Total Price</h6>
                <h4>
                  <b>
                      {
                        rupiah(totalPrice)
                      }
                    </b>
                  </h4>

                  {/* Button Checkout */}
                    <button type="button" className="btn btn-primary" onClick={createTransactions}>
                        checkout
                    </button>
              </div>
              
            </div>
            <br/>
            <div className="row">
              <div className="col-12">

                {/* Table Transacti */}
                 
                <TableTransactions transactionParent={transactionParent} handleRemoveTransactionChildren={handleRemoveTransactionChildren}/>

              </div>
            </div>

            {/* Modals Cart */}
            <ModalCart 
              transactionParent={transactionParent}
              setTransactionParent={setTransactionParent}

              transactionChild={transactionChild}
              setTransactionChild={setTransactionChild}

              transactionDetails={transactionDetails}
              setTransactionDetails={setTransactionDetails}

              transactionDetail={transactionDetail}
              setTransactionDetail={setTransactionDetail}
              />
            {/* End Modals Cart */}


            {/* Modals Preview */}
            {/* <ModalPreview/> */}
            {/* End Modals Preview */}

          </div>
        </section>
      </main>

      <Footer/>
    </main>
    <HelmetProvider>
        <Helmet>
          <script src="/js/dataTable.js" type="text/javascript"/>
        </Helmet>
      </HelmetProvider>
  </>
  )
}

export default AddCartPage