import React, { useEffect } from 'react';
import SideBar from '../components/navigation/SideBar';
import TopNavigation from '../components/Navigation/TopNavigation';
import Footer from '../components/navigation/Footer';
import {Helmet, HelmetProvider } from "react-helmet-async";
import title from '../utils/title';

const ExpensePage = () => {
  useEffect(() => {
      document.title = title.expenses;
      }, []);
  return (
    <>
      <SideBar/>
      <main className="content">
        <TopNavigation/>
        <div className="card border-0 shadow">
          <div className="card-header d-flex justify-content-end">
            {/* <?php if (session()->getFlashdata('success')) : ?> */}
                {/* <div className="alert alert-success" role="alert"> */}
                    {/* <?= session()->getFlashdata('success'); ?> */}
                {/* </div> */}
            {/* <?php endif; ?> */}
            {/* <?php if (session()->getFlashdata('error')) : ?> */}
                {/* <div className="alert alert-danger" role="alert"> */}
                {/* asd */}
                    {/* <?= session()->getFlashdata('error'); ?> */}
                {/* </div> */}
            {/* <?php endif; ?> */}

          </div>
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
          </div>
        </div>
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

export default ExpensePage;