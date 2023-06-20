import React from "react";
import {
  ImList2,
  ImStatsDots,
  ImCoinDollar,
  ImWrench,
  ImBook,
  ImCreditCard,
} from "react-icons/im";
import title from "../../utils/const/title";

const SideBar = () => (
  <>
    <nav className="navbar navbar-dark navbar-theme-primary px-4 col-12 d-lg-none">
      <a className="navbar-brand me-lg-5" href="/">
        <img
          className="navbar-brand-dark"
          src="/img/brand/light.svg"
          alt="Coffee logo"
        />{" "}
        <img
          className="navbar-brand-light"
          src="/img/brand/dark.svg"
          alt="Coffee logo"
        />
      </a>
      <div className="d-flex align-items-center">
        <button
          className="navbar-toggler d-lg-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>

    <nav
      id="sidebarMenu"
      className="sidebar d-lg-block bg-gray-800 text-white collapse"
      data-simplebar
    >
      <div className="sidebar-inner px-4 pt-3">
        <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
          <div className="collapse-close d-md-none">
            <a
              href="#sidebarMenu"
              data-bs-toggle="collapse"
              data-bs-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <svg
                className="icon icon-xs"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <ul className="nav flex-column pt-3 pt-md-0">
          <li className="nav-item">
            <a href="/" className="nav-link d-flex align-items-center">
              <span className="sidebar-icon">
                <img
                  src="/img/brand/light.svg"
                  height="20"
                  width="20"
                  alt="Coffee Logo"
                />
              </span>
              <span className="mt-1 ms-1 sidebar-text">{title.brand}</span>
            </a>
          </li>

          <li
            role="separator"
            className="dropdown-divider mt-4 mb-3 border-gray-700"
          ></li>

          <li className="nav-item">
            <a href="/cashier" className="nav-link">
              <span className="sidebar-icon">
                <ImCoinDollar />
              </span>
              <span className="sidebar-text">Kasir</span>
            </a>
          </li>

          <li className="nav-item">
            <a href="/orders" className="nav-link">
              <span className="sidebar-icon">
                <ImCreditCard />
              </span>
              <span className="sidebar-text">Pesan ke supplier</span>
            </a>
          </li>

          <li className="nav-item">
            <a href="/couriers" className="nav-link">
              <span className="sidebar-icon">
                <ImCreditCard />
              </span>
              <span className="sidebar-text">Kurir</span>
            </a>
          </li>

          <li className="nav-item">
            <span
              className="nav-link  collapsed  d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              data-bs-target="#page_content"
            >
              <span>
                <span className="sidebar-icon">
                  <ImList2 />
                </span>
                <span className="sidebar-text">Transaksi</span>
              </span>
              <span className="link-arrow">
                <svg
                  className="icon icon-sm"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
            <div
              className="multi-level collapse "
              role="list"
              id="page_content"
              aria-expanded="false"
            >
              <ul className="flex-column nav">
                <li className="nav-item ">
                  <a className="nav-link" href="/orders/arrives">
                    <span className="sidebar-text">Barang masuk</span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="/sales">
                    <span className="sidebar-text">Penjualan</span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="/expenses">
                    <span className="sidebar-text">Pembelian</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li className="nav-item">
            <span
              className="nav-link  collapsed  d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              data-bs-target="#product"
            >
              <span>
                <span className="sidebar-icon">
                  <svg
                    className="icon icon-xs me-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span className="sidebar-text">Stok</span>
              </span>
              <span className="link-arrow">
                <svg
                  className="icon icon-sm"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
            <div
              className="multi-level collapse "
              role="list"
              id="product"
              aria-expanded="false"
            >
              <ul className="flex-column nav">
                <li className="nav-item ">
                  <a className="nav-link" href="/products">
                    <span className="sidebar-text">Produk</span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="/products/variants">
                    <span className="sidebar-text">Product Varian</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li className="nav-item">
            <span
              className="nav-link  collapsed  d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              data-bs-target="#reports"
            >
              <span>
                <span className="sidebar-icon">
                  <ImBook />
                </span>
                <span className="sidebar-text">Laporan</span>
              </span>
              <span className="link-arrow">
                <svg
                  className="icon icon-sm"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
            <div
              className="multi-level collapse "
              role="list"
              id="reports"
              aria-expanded="false"
            >
              <ul className="flex-column nav">
                <li className="nav-item ">
                  <a className="nav-link" href="/orders/reports">
                    <span className="sidebar-text">Pembelian</span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="/sales/reports">
                    <span className="sidebar-text">Penjualan</span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="/">
                    <span className="sidebar-text">Surat jalan</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li className="nav-item">
            <span
              className="nav-link  collapsed  d-flex justify-content-between align-items-center"
              data-bs-toggle="collapse"
              data-bs-target="#user_config"
            >
              <span>
                <span className="sidebar-icon">
                  <ImWrench />
                </span>
                <span className="sidebar-text">Pengaturan</span>
              </span>
              <span className="link-arrow">
                <svg
                  className="icon icon-sm"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
            <div
              className="multi-level collapse "
              role="list"
              id="user_config"
              aria-expanded="false"
            >
              <ul className="flex-column nav">
                <li className="nav-item ">
                  <a className="nav-link" href="/prices">
                    <span className="sidebar-text">Harga</span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="/profile">
                    <span className="sidebar-text">Profil</span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="/management">
                    <span className="sidebar-text">Manajemen karyawan</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </>
);

export default SideBar;
