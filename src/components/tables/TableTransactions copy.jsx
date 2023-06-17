import React from 'react'
import {Helmet, HelmetProvider } from "react-helmet-async";


export default function TableTransactions() {
  return (
    // <table className="table table-bordered">
    //     <thead>
    //     <tr>
    //         <th scope="col">Transaction</th>
    //         <th scope="col">Pickup</th>
    //         <th scope="col">Status</th>
    //         <th scope="col">Rating</th>
    //         <th scope="col">Preview</th>
    //     </tr>
    //     </thead>
    //     <tbody>
    //     <tr>
    //         <th scope="row">2</th>
    //         <td>Anter</td>
    //         <td>Waiting</td>
    //         <td>-</td>
    //         <td>
    //         <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalPreview">
    //             Preview
    //         </button>
    //         </td>
    //     </tr>
    //     <tr>
    //         <th scope="row">5</th>
    //         <td>Gojek</td>
    //         <td>Sent</td>
    //         <td>5</td>
    //         <td>
    //         <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalPreview">
    //             Preview
    //         </button>
    //         </td>
    //     </tr>
    //     <tr>
    //         <th scope="row">3</th>
    //         <td>Grab</td>
    //         <td>Completed</td>
    //         <td>4</td>
    //         <td>
    //         <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalPreview">
    //             Preview
    //         </button>
    //         </td>
    //     </tr>
    //     </tbody>
    // </table>
                <div className="card-body">
                  <div className="table-responsive">
                    <table id="myTable" className="table table-striped" style={{ width:'100%' }}>
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Question</th>
                          <th>Answer</th>
                          <th>Updated By</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>asd</td>
                          <td>asd</td>
                          <td>asd</td>
                          <td>
                            <form action="" method="POST" className="d-inline">
                                <button type="submit" className="btn btn-danger"><i className="bi bi-trash-fill"></i></button>
                            </form>
                            <a id="" className="btn btn-primary view_data"><i className="bi bi-pencil-square"></i></a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <HelmetProvider>
        <Helmet>
          <script src="/js/dataTable.js" type="text/javascript"/>
        </Helmet>
      </HelmetProvider>
                </div>
                
  )
}
