import React from "react";

const TableDocs = () => {
    return(
        <>
            <div class="row my-4">
                <div class="col-12">
                    <h3><b>Surat Jalan</b></h3>
                    <h5><b>ID: </b> 13/87/nn</h5>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div className="d-flex align-content-center justify-content-start">
                        <div className="d-flex align-content-center justify-content-start me-3">
                            <h6 className="me-1"><b>Ship To:</b></h6>
                            <h6>Matana University</h6>
                        </div>
                        <div className="d-flex align-content-center justify-content-start">
                            <h6 className="me-1"><b>Address:</b></h6>
                            <h6>Matana University</h6>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <table id="myTable" className="table table-striped table-bordered" style={{ width:'100%' }}>
                <thead>
                    <tr>
                    <th>No.</th>
                    <th>Product</th>
                    <th>Qty</th>
                    <th>Harga</th>
                    <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>5</td>
                        <td>asd</td>
                        <td>asd</td>
                        <td>asd</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>5</td>
                        <td>asd</td>
                        <td>asd</td>
                        <td>asd</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>5</td>
                        <td>asd</td>
                        <td>asd</td>
                        <td>asd</td>
                    </tr>
                </tbody>
            </table>
                </div>
            </div>
        </>
    )
}

export default TableDocs;