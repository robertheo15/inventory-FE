import React from "react";

const TableInvoice = () => {
    return(
        <div class="row mb-4">
            <div class="col-12">
                <h6><b>INVOICE 1</b></h6>
                <div className="table-responsive table-bordered">
                    <table id="myTable" className="table table-striped" style={{ width:'100%' }}>
                    <thead>
                        <tr>
                        <th>Product</th>
                        <th>Qty</th>
                        <th>Harga</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>asd</td>
                            <td>asd</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>asd</td>
                            <td>asd</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>asd</td>
                            <td>asd</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TableInvoice;