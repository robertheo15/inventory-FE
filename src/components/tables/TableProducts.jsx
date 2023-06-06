import React from "react"

const TableProducts = () => {
    return (
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
    )
}

export default TableProducts