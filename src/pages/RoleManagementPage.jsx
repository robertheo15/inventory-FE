import React, { useEffect } from 'react';import SideBar from '../components/navigation/SideBar';
import TopNavigation from '../components/Navigation/TopNavigation';
import Footer from '../components/navigation/Footer';
import {Helmet, HelmetProvider } from "react-helmet-async";


const RoleManagementPage = () => {
  return (
    <>
      <SideBar/>
      <main className="content">
        <TopNavigation/>
        <div className="card border-0 shadow">
          <div className="card-header d-flex justify-content-between">

          {/* <?php if (session()->getFlashdata('success')) : ?> */}
            {/* <div className="alert alert-success" role="alert"> */}
              {/* <?= session()->getFlashdata('success'); ?> */}
            {/* </div> */}
          {/* <?php endif; ?> */}
          {/* <?php if (session()->getFlashdata('error')) : ?> */}
            {/* <div className="alert alert-danger" role="alert">
                {/* <?= session()->getFlashdata('error'); ?> */}
              {/* asd */}
          {/* </div> */}
          {/* <?php endif; ?> */}
            <button type="button" className="btn btn-outline-gray-600 d-inline-flex align-items-center" data-bs-toggle="modal" data-bs-target="#addAdmin">
              <i className=" bi bi-person-fill-add me-2"></i>
              Add Admin
            </button>
          </div>

          <div className="card-body">
            <div className="table-responsive">
              <table id="myTable" className="table table-responsive table-striped" style={{ width:'100%' }}>
                <thead className="thead-light">
                  <tr>
                    <th>No</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Role</th>
                    <th>Updated By</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* <?php */}
                  {/* $no = 1; */}
                  {/* foreach ($users as $user) : ?> */}
                  <tr>
                    <td>1</td>
                    <td>asd</td>
                    <td>asd</td>
                    <td>asd</td>
                    {/* <?php if ($user['role'] == 2) { ?> */}
                        <td><span className="badge rounded-pill bg-primary">Admin</span></td>
                    {/* <?php } else if ($user['role'] == 1) { ?> */}
                        {/* <td><span className="badge rounded-pill bg-danger">Super Admin</span></td> */}
                    {/* <?php } ?> */}
                    <td>asd</td>
                    <td>
                      {/* <form action="<?= base_url('admin/management/delete/' . $user['uuid']); ?>" method="POST" className="d-inline"> */}
                      <form action="" method="POST" className="d-inline">
                        {/* <?= csrf_field(); ?> */}
                        <input type="hidden" name="_method" value="DELETE"/>
                        <button type="submit" className="btn btn-danger mb-1" onClick={() =>  confirm('Are you sure?')}><i className="bi bi-trash-fill"></i></button>
                      </form>
                      {/* <form action="<?= base_url('admin/management/setactive/' . $user['uuid']); ?>" method="POST" className="d-inline"> */}
                      <form action="" method="POST" className="d-inline">
                          {/* <?= csrf_field(); ?> */}
                          <input type="hidden" name="_method" value="PUT"/>
                          <input type="hidden" name="setactive" value="1"/>
                          {/* <input type="hidden" name="setactive" value="<?= $user['is_active'] ==  1 ? '0' : '1'; ?>"/> */}
                          {/* <input type="hidden" name="setactive" value="1"/> */}
                          {/* <button type="submit" className="btn btn-<?= $user['is_active'] ==  1 ? 'danger' : 'primary'; ?> mb-1"><i className="<?= $user['is_active'] ==  1 ? 'bi bi-stop-circle-fill' : 'bi bi-play-circle-fill'; ?>"></i></button> */}
                          {/* <button type="submit" className="btn btn-danger mb-1"><i className="<?= $user['is_active'] ==  1 ? 'bi bi-stop-circle-fill' : 'bi bi-play-circle-fill'; ?>"></i></button> */}
                          <button type="submit" className="btn btn-danger mb-1"><i className="bi bi-play-circle-fill"></i></button>
                      </form>
                    </td>
                  </tr>
                  {/* <?php
                      $no = $no + 1;
                  endforeach; ?> */}
                  </tbody>
                </table>
              </div>
          </div>
        </div>

        {/* <!-- Modal Add Admin--> */}
        <div className="modal fade" id="addAdmin" tabIndex="-1" role="dialog" aria-labelledby="addAdminLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document" id="data_add_admin">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addAdminLabel">Add Admin</h5>
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form action='<?= base_url("admin/management/addadmin"); ?>' method="POST">
                  <div className="mb-3">
                    <label htmlFor="fullname">FullName</label>
                    <input type="text" className="form-control" id="fullname" name="full_name"/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="example@gmail.com" name="email"/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="number" className="form-control" id="phone" name="phone"/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="address">Address</label>
                    <input type="text" className="form-control" id="address" name="address"/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name="password"/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="role">Role</label>
                    <select className="form-select" id="role" name="select_role">
                      <option value="1">Super Admin</option>
                      <option value="2" defaultValue={'selected'}>Admin</option>
                    </select>
                  </div>
                  <button button type="submit" className="btn btn-success mt-3">Tambah</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="edit_admin" tabIndex="-1" role="dialog" aria-labelledby="edit_admin" aria-hidden="true">
          <div className="modal-dialog" role="document" id="data_edit_admin">
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

export default RoleManagementPage;