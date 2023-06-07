import React from "react";

const ModalProducts = () => {
    return(
        <div className="modal fade" id="modalProducts" tabIndex="-1" aria-labelledby="modalProductsLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="modalProductsLabel">Add Products</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            

                <div style={{ maxHeight: '250px', overflowY: 'scroll' }}>
                <div className="table-responsive">
                    <table id="myTable" className="table table-striped" style={{ width:'100%' }}>
                        <thead>
                            <tr>
                            <th>No</th>
                            <th>Product</th>
                            <th>Total</th>
                            <th>Price</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>asd</td>
                            <td>asd</td>
                            <td>asd</td>
                            
                            <td >
                                <button type="submit" className="btn btn-danger mx-1">
                                    -
                                </button>
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalPreview">
                                 +
                                </button>
                                {/* <a id="" className="btn btn-primary view_data"><i className="bi bi-pencil-square"></i></a> */}
                            </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>

            </div>

            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-primary">Add</button>
            </div>
            </div>
        </div>
    </div>
    )
}

export default ModalProducts