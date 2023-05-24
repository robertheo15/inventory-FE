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

            <div class="card-body">
              {/* <input type="text" class="form-control" id="uuid" value="<?= $profile['uuid']; ?>" name="uuid" disabled hidden/> */}
              <div class="mb-3">
                <label for="fullname" class="form-label">Full name</label>
                <input type="text" class="form-control" id="fullname" value="robert" name="fullname" disabled/>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="text" class="form-control" id="email" value="robert@mail.com" name="email" disabled/>
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label">Phone</label>
                <input type="text" class="form-control" id="phone" value="08123456" name="phone"/>
              </div>
              <div class="mb-3">
                <label for="address" class="form-label">Address</label>
                <input type="text" class="form-control" id="address" value="Jlni aja dulu" name="address"/>
              </div>

              <div class="mb-3">
                <label for="updatedBy" class="form-label">Updated By</label>
                <input type="text" class="form-control" id="updatedBy" value="Robert" name="updatedBy" disabled/>
              </div>
              <input type="hidden" name="_method" value="PUT"/>
            </div>
          </form>

          <div class="card-footer d-flex justify-content-end">
            <button type="button" class="btn btn-outline-gray-600 me-2" data-bs-toggle="modal" data-bs-target="#changePassword">
              <i class=" bi bi-person-fill-add me-1"></i>
              Ganti password
            </button>
            <button type="" class="btn btn-outline-gray-600">
              <i class=" bi bi-person-fill-add me-1"></i>
              Ubah data
            </button>
          </div>
        </div>

        <div class="modal fade" id="changePassword" tabindex="-1" role="dialog" aria-labelledby="changePasswordLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document" id="data_changePassword">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="changePasswordLabel">Change Password</h5>
                  <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div class="modal-body">
                <form action='' method="POST">
                  <div class="mb-3">
                    <label for="oldPassword">Old Password</label>
                    <input type="password" class="form-control" id="oldPassword" name="oldPassword"/>
                  </div>
                  <div class="mb-3">
                    <label for="newPassword">New Password</label>
                    <input type="password" class="form-control" id="newPassword" name="newPassword"/>
                  </div>
                  <div class="mb-3">
                    <label for="confirmPassword">Confirm Password</label>
                    <input type="password" class="form-control" id="confirmPassword" name="confirmPassword"/>
                  </div>
                  <button type="submit" class="btn btn-success mt-3">Change</button>
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