import React from 'react'

const ModalPreview = () => {
    return (
        <div className="modal fade" id="modalPreview" tabIndex="-1" aria-labelledby="modalPreviewLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="modalCartLabel">Transaction 2 | Details</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
    
                    <div style={{ maxHeight: '450px', overflowY: 'scroll' }}>
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
                            <td >
                                <button type="submit" className="btn btn-danger mx-1">
                                <i className="bi bi-trash-fill"></i>
                                </button>
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalItem">
                                <i className="bi bi-pencil-square"></i>
                                </button>
                                {/* <a id="" className="btn btn-primary view_data"><i className="bi bi-pencil-square"></i></a> */}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Bread</td>
                            <td>2</td>
                            <td>Rp 35.000</td>
                            <td >
                                <button type="submit" className="btn btn-danger mx-1">
                                <i className="bi bi-trash-fill"></i>
                                </button>
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalItem">
                                <i className="bi bi-pencil-square"></i>
                                </button>
                                {/* <a id="" className="btn btn-primary view_data"><i className="bi bi-pencil-square"></i></a> */}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Soap</td>
                            <td>3</td>
                            <td>Rp 20.000</td>
                            <td >
                                <button type="submit" className="btn btn-danger mx-1">
                                <i className="bi bi-trash-fill"></i>
                                </button>
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalItem">
                                <i className="bi bi-pencil-square"></i>
                                </button>
                                {/* <a id="" className="btn btn-primary view_data"><i className="bi bi-pencil-square"></i></a> */}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Bread</td>
                            <td>2</td>
                            <td>Rp 35.000</td>
                            <td >
                                <button type="submit" className="btn btn-danger mx-1">
                                <i className="bi bi-trash-fill"></i>
                                </button>
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalItem">
                                <i className="bi bi-pencil-square"></i>
                                </button>
                                {/* <a id="" className="btn btn-primary view_data"><i className="bi bi-pencil-square"></i></a> */}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Soap</td>
                            <td>3</td>
                            <td>Rp 20.000</td>
                            <td >
                                <button type="submit" className="btn btn-danger mx-1">
                                <i className="bi bi-trash-fill"></i>
                                </button>
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalItem">
                                <i className="bi bi-pencil-square"></i>
                                </button>
                                {/* <a id="" className="btn btn-primary view_data"><i className="bi bi-pencil-square"></i></a> */}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Bread</td>
                            <td>2</td>
                            <td>Rp 35.000</td>
                            <td >
                                <button type="submit" className="btn btn-danger mx-1">
                                <i className="bi bi-trash-fill"></i>
                                </button>
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalItem">
                                <i className="bi bi-pencil-square"></i>
                                </button>
                                {/* <a id="" className="btn btn-primary view_data"><i className="bi bi-pencil-square"></i></a> */}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Soap</td>
                            <td>3</td>
                            <td>Rp 20.000</td>
                            <td >
                                <button type="submit" className="btn btn-danger mx-1">
                                <i className="bi bi-trash-fill"></i>
                                </button>
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalItem">
                                <i className="bi bi-pencil-square"></i>
                                </button>
                                {/* <a id="" className="btn btn-primary view_data"><i className="bi bi-pencil-square"></i></a> */}
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
    
                </div>
    
                <div className='d-flex justify-content-end px-3'>
                    <h6 className='me-2'>Total harga: </h6>
                    <h6 className='fw-bolder'>Rp 135.000</h6>
                </div>
    
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
      )
}

export default ModalPreview