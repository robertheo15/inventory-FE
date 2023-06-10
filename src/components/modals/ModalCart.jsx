import React, {useState} from 'react'
import useProducts from '../../hooks/useProducts';
import useProductVariants from '../../hooks/useProductVariants';
import { getProductVariants } from '../../utils/api/productsVariant';

const ModalCart = ({transactionChildState, onTransactionChild, transactionDetailsState, onTransactionDetail}) => {
    const { products } = useProducts();
    const [state, setState] = useState('');
    const { productVariants } = useProductVariants(state);

    let resProduct = products.data;
    // let resproductVariants = productVariants.data;
    console.log(transactionDetailsState);
    // console.log(variant)

    return (
        <div className="modal fade" id="modalCart" tabIndex="-1" aria-labelledby="modalCartLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="modalCartLabel">Cashier Carts</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
    
                    {/* Fill Input Modals */}
                    <div className="mb-3 row">
                    <label htmlFor="inputTitle1" className="col-sm-2 col-form-label">Produk:</label>
                    <div className="col-sm-10">
                    <select className="form-control" id="productType" 
                        onChange={e => {
                            onTransactionDetail({ ...transactionDetailsState, product_id: e.target.value });
                            // console.log(e.target.value);
                            console.log(transactionDetailsState.product_id);
                            getProductVariants(transactionDetailsState.product_id).then(result => 
                            console.log(result)
                            )
                            console.log();
                            
                            setState(e.target.value);
                        }}>
                            <option value={""}>Pilih produk</option>
                      {  
                        (resProduct != undefined ? 
                          (resProduct.map((product, key) => (
                            
                            <option key={key} value={ product.id } 
                              >{product.name}</option>
        
                          )))
                         : "")
                      }             
                      </select>
                        {/* <input type="text" className="form-control" id="inputTitle1"/> */}
                    </div>
                    </div>

                    <div className="mb-3 row">
                    <label htmlFor="inputTitle1" className="col-sm-2 col-form-label">Produk variant:</label>
                    <div className="col-sm-10">
                    <select className="form-control" id="productType" 
                        onChange={e => {
                            onTransactionDetail({ ...transactionDetailsState, pv_id: e.target.value });
                        }}>
                            <option value={""}>Pilih produk varian</option>
                      {/* {  
                        (resproductVariants != undefined ? 
                          (resproductVariants.map((variant, key) => (
                            
                            <option key={key} value={ variant.id } 
                              >{variant.name}</option>
        
                          )))
                         : "")
                      }              */}
                      </select>
                        {/* <input type="text" className="form-control" id="inputTitle1"/> */}
                    </div>
                    </div>

                    <div className="mb-3 row">
                    <label htmlFor="inputTitle2" className="col-sm-2 col-form-label">Jumlah:</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" id="inputTitle2" 
                            value={transactionDetailsState.qty}
                            onChange={e => {
                                onTransactionDetail({ ...transactionDetailsState, qty: e.target.value });
                            }}
                        />
                    </div>
                    </div>
                    <div className="mb-3 row">
                    <label htmlFor="inputTitle3" className="col-sm-2 col-form-label">Tipe harga:</label>
                    <div className="col-sm-10">
                        <select className="form-control">
                            <option value={""}>Pilih tipe harga</option>
                            <option value={"grosir"}>Grosir</option>
                            <option value={"eceran"}>Eceran</option>
                        </select>
                    </div>
                    </div>
                    <div className="mb-3 row">
                    <label htmlFor="inputTitle3" className="col-sm-2 col-form-label">Metode:</label>
                    <div className="col-sm-10">
                    <select className="form-control"
                        onChange={e => {
                                onTransactionChild({ ...transactionChildState, deliveryOption: e.target.value });
                            }}
                    >
                            <option value={""}>Pilih metode</option>
                            <option value={"pick-up"}>Pick up</option>
                            <option value={"pengiriman"}>Pengiriman</option>
                        </select>
                    </div>
                    </div>
                    <div className="mb-3 row px-3">
                        <button type="button" className="btn btn-primary ms-auto" style={{ width: 'fit-content' }}>
                            Add to Cart
                        </button>
                    </div>
                    {/* End Fill Input Modals */}
    
                    {/* Cashier Cart Table | Option Delete! */}
                    <div style={{ maxHeight: '250px', overflowY: 'scroll' }}>
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product</th>
                            <th scope="col">Qty</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">2</th>
                            <td>Snack</td>
                            <td>1</td>
                            <td>Rp 45.000</td>
                            <td>
                                <button type="submit" className="btn btn-danger mx-1">
                                <i className="bi bi-trash-fill"></i>
                                </button>
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalPreview">
                                <i className="bi bi-pencil-square"></i>
                                </button>
                                {/* <a id="" className="btn btn-primary view_data"><i className="bi bi-pencil-square"></i></a> */}
                            </td>
                        </tr>
                        
                       
                        
                        </tbody>
                    </table>
                    </div>
                    {/* End Cashier Cart Table | Option Delete! */}
    
                </div>
    
                <div className='d-flex justify-content-end px-3'>
                    <h6 className='me-2'>Total Prices: </h6>
                    <h6 className='fw-bolder'>Rp 135.000</h6>
                </div>
    
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-primary">Confirm</button>
                </div>
                </div>
            </div>
        </div>
      )
}

export default ModalCart
