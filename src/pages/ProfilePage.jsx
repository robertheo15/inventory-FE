import React, { useEffect } from 'react';
import SideBar from '../components/navigation/SideBar';
import TopNavigation from '../components/Navigation/TopNavigation';
import Footer from '../components/navigation/Footer';
import {Helmet, HelmetProvider } from "react-helmet-async";
import title from '../utils/title';

const ProfilePage = () => {

  useEffect(() => {
      document.title = title.profile;
      }, []);

  return (
    <>
      <SideBar/>
      <main className="content">
        <TopNavigation/>
        <div class="card border-0 shadow">
          <form action='' method="POST">
            {/* <div class="card-header d-flex justify-content-between"> */}
              {/* <?php if (session()->getFlashdata('success')) : ?> */}
                  {/* <div class="alert alert-success alert-dismissible fade show" role="alert"> */}
                      {/* <span class="fas fa-bullhorn"></span> */}
                      {/* <?= session()->getFlashdata('success'); ?> */}
                      {/* <button type="button" class="btn-close btn-sm" data-bs-dismiss="alert" aria-label="Close"></button> */}
                  {/* </div> */}
              {/* <?php endif; ?> */}
              {/* <?php if (session()->getFlashdata('error')) : ?> */}
                  {/* <div class="alert alert-danger alert-dismissible fade show" role="alert"> */}
                      {/* <span class="fas fa-bullhorn"></span> */}
                      {/* <?= session()->getFlashdata('error'); ?> */}
                      {/* <button type="button" class="btn-close btn-sm" data-bs-dismiss="alert" aria-label="Close"></button> */}
                  {/* </div> */}
              {/* <?php endif; ?> */}

              
              {/* </div> */}

            <div className="card-body">
              {/* <input type="text" className="form-control" id="uuid" value="<?= $profile['uuid']; ?>" name="uuid" disabled hidden/> */}
              <div className="mb-3">
                <label htmlFor="fullname" className="form-label">Full name</label>
                <input type="text" className="form-control" id="fullname" value="robert" name="fullname" disabled/>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text" className="form-control" id="email" value="robert@mail.com" name="email" disabled/>
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="text" className="form-control" id="phone" value="08123456" name="phone"/>
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" className="form-control" id="address" value="Jlni aja dulu" name="address"/>
              </div>

              <div className="mb-3">
                <label htmlFor="updatedBy" className="form-label">Updated By</label>
                <input type="text" className="form-control" id="updatedBy" value="Robert" name="updatedBy" disabled/>
              </div>
              <input type="hidden" name="_method" value="PUT"/>
            </div>
          </form>

          <div className="card-footer d-flex justify-content-end">
            <button type="button" className="btn btn-outline-gray-600 me-2" data-bs-toggle="modal" data-bs-target="#changePassword">
              <i className=" bi bi-person-fill-add me-1"></i>
              Ganti password
            </button>
            <button type="" className="btn btn-outline-gray-600">
              <i className=" bi bi-person-fill-add me-1"></i>
              Ubah data
            </button>
          </div>
        </div>

        <div className="modal fade" id="changePassword" tabIndex="-1" role="dialog" aria-labelledby="changePasswordLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document" id="data_changePassword">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="changePasswordLabel">Change Password</h5>
                  <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div className="modal-body">
                <form action='' method="POST">
                  <div className="mb-3">
                    <label htmlFor="oldPassword">Old Password</label>
                    <input type="password" className="form-control" id="oldPassword" name="oldPassword"/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="newPassword">New Password</label>
                    <input type="password" className="form-control" id="newPassword" name="newPassword"/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" className="form-control" id="confirmPassword" name="confirmPassword"/>
                  </div>
                  <button type="submit" className="btn btn-success mt-3">Change</button>
                </form>
              </div>
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

export default ProfilePage;