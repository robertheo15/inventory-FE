import React from 'react';

const SideBar = () => 

(
  <>
  <nav className="navbar navbar-dark navbar-theme-primary px-4 col-12 d-lg-none">
        <a className="navbar-brand me-lg-5" href="<?= base_url('/'); ?>">
            <img className="navbar-brand-dark" src="/assets/img/brand/light.svg" alt="Coffee logo" /> <img className="navbar-brand-light" src="<?= base_url('admin_assets/assets/img/brand/dark.svg'); ?>" alt="Coffee logo" />
        </a>
        <div className="d-flex align-items-center">
            <button className="navbar-toggler d-lg-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
    </nav>

    <nav id="sidebarMenu" className="sidebar d-lg-block bg-gray-800 text-white collapse" data-simplebar>
        <div className="sidebar-inner px-4 pt-3">
            <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">

                <div className="collapse-close d-md-none">
                    <a href="#sidebarMenu" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="true" aria-label="Toggle navigation">
                        <svg className="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </a>
                </div>
            </div>
            <ul className="nav flex-column pt-3 pt-md-0">
                <li className="nav-item">
                    <a href="/" className="nav-link d-flex align-items-center">
                        <span className="sidebar-icon">
                            <img src="/assets/img/brand/light.svg" height="20" width="20" alt="Coffee Logo" />
                        </span>
                        <span className="mt-1 ms-1 sidebar-text">CoffeeAI</span>
                    </a>
                </li>

                <li role="separator" className="dropdown-divider mt-4 mb-3 border-gray-700"></li>

                <li className="nav-item  active ">
                    <a href="/dashboard" className="nav-link">
                        <span className="sidebar-icon">
                            <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                            </svg>
                        </span>
                        <span className="sidebar-text">Dashboard</span>
                    </a>
                </li>



                <li className="nav-item">
                    <span className="nav-link  collapsed  d-flex justify-content-between align-items-center" data-bs-toggle="collapse" data-bs-target="#page_content">
                        <span>
                            <span className="sidebar-icon">
                                <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd"></path>
                                </svg>
                            </span>
                            <span className="sidebar-text">Page Management</span>
                        </span>
                        <span className="link-arrow">
                            <svg className="icon icon-sm" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                            </svg>
                        </span>
                    </span>
                    <div className="multi-level collapse " role="list" id="page_content" aria-expanded="false">
                        <ul className="flex-column nav">
                            <li className="nav-item ">
                                <a className="nav-link" href="<?= base_url('/admin/information'); ?>">
                                    <span className="sidebar-text">App Information</span>
                                </a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="<?= base_url('/admin/features'); ?>">
                                    <span className="sidebar-text">App Features</span>
                                </a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="<?= base_url('/admin/beans'); ?>">
                                    <span className="sidebar-text">Bean Directory</span>
                                </a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="<?= base_url('/admin/contents'); ?>">
                                    <span className="sidebar-text">Contents</span>
                                </a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="<?= base_url('/admin/sponsors'); ?>">
                                    <span className="sidebar-text">Sponsors</span>
                                </a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="<?= base_url('/admin/faqs'); ?>">
                                    <span className="sidebar-text">FaQ</span>
                                </a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="<?= base_url('/admin/teams'); ?>">
                                    <span className="sidebar-text">Teams</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>

                <li className="nav-item ">
                    <a href="<?= base_url('/admin/modelconfig'); ?>" className="nav-link">
                        <span className="sidebar-icon">
                            <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
                            </svg>
                        </span>
                        <span className="sidebar-text">ML Model Config</span>
                    </a>
                </li>

                <li role="separator" className="dropdown-divider mt-4 mb-3 border-gray-700"></li>


                <li className="nav-item">
                    <span className="nav-link  collapsed  d-flex justify-content-between align-items-center" data-bs-toggle="collapse" data-bs-target="#user_config">
                        <span>
                            <span className="sidebar-icon">
                                <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd"></path>
                                </svg>
                            </span>
                            <span className="sidebar-text">User Configuration</span>
                        </span>
                        <span className="link-arrow">
                            <svg className="icon icon-sm" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                            </svg>
                        </span>
                    </span>
                    <div className="multi-level collapse " role="list" id="user_config" aria-expanded="false">
                        <ul className="flex-column nav">
                            <li className="nav-item ">
                                <a className="nav-link" href="<?= base_url('/admin/profile'); ?>">
                                    <span className="sidebar-text">Profile</span>
                                </a>
                            </li>
                            {/* <?php if (session()->get('role') == '1') { ?> */}
                                <li className="nav-item ">
                                    <a className="nav-link" href="<?= base_url('/admin/management'); ?>">
                                        <span className="sidebar-text">Admin Management</span>
                                    </a>
                                </li>
                            {/* <?php } ?> */}
                        </ul>
                    </div>
                </li>

                <li className="nav-item">
                    <a href="https://github.com/kennethliem/CoffeeAI" target="_blank" className="nav-link d-flex align-items-center">
                        <span className="sidebar-icon">
                            <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                            </svg>
                        </span>
                        <span className="sidebar-text">Documentation</span>
                    </a>
                </li>

            </ul>
        </div>
    </nav>
    </>
);


export default SideBar;