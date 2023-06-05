import React from 'react'
import {Helmet, HelmetProvider } from "react-helmet-async";


const TableTransactions = () => {
  return (
    <>
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
              
              <td >
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
      <HelmetProvider>
        <Helmet>
          <script src="/js/dataTable.js" type="text/javascript"/>
        </Helmet>
      </HelmetProvider>
    </>   
  )
}

export default TableTransactions;