import React from 'react';

const TopNavigation = () => 

(
  <nav className="navbar navbar-top navbar-expand navbar-dashboard navbar-dark ps-0 pe-2 pb-0">
    <div className="container-fluid px-0">
      <div className="d-flex justify-content-between w-100" id="navbarSupportedContent">
        <div className="d-flex align-items-center">
          <div className="media d-flex align-items-center">
            <div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">
              <span className="mb-0 font-small fw-bold text-gray-900">2023/04/30 05:04</span>
            </div>
          </div>
      </div>
      {/* <!-- Navbar links --> */}
      <ul className="navbar-nav align-items-center">
        <li className="nav-item dropdown ms-lg-3">
          <a className="nav-link dropdown-toggle pt-1 px-0" href="<?= base_url(''); ?>#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <div className="media d-flex align-items-center">
              <div className="media-body ms-2 text-dark align-items-center d-none d-lg-block me-2">
                <span className="mb-0 font-small fw-bold text-gray-900">
                  Robert
                </span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </div>
          </a>
          <div className="dropdown-menu dashboard-dropdown dropdown-menu-end mt-2 py-1">
            <a className="dropdown-item d-flex align-items-center" href="<?= base_url('/admin/profile'); ?>#">
              <svg className="dropdown-icon text-gray-400 me-2" fill="gray" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
              </svg>
              MyProfile
            </a>
            <div role="separator" className="dropdown-divider my-1"></div>
            <a className="dropdown-item d-flex align-items-center" href="<?= base_url('/admin/signout'); ?>">
              <svg className="dropdown-icon text-danger me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
              </svg>
             Logout
            </a>
          </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);


export default TopNavigation;