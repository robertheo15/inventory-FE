import React, { useEffect } from 'react';
import SideBar from '../components/navigation/SideBar';
import TopNavigation from '../components/Navigation/TopNavigation';
import Footer from '../components/navigation/Footer';
import {FcMoneyTransfer} from 'react-icons/fc';
import {MdPayments} from 'react-icons/md';
import {RiBillLine} from 'react-icons/ri';


const DashboardPage = () => {
  return (
    <>
    <SideBar/>
    <main className="content">
      <TopNavigation/>
      <div className="row mt-5">
          <div className="col-12 col-sm-6 col-xl-4 mb-4">
              <div className="card border-0 shadow">
                  <div className="card-body">
                      <div className="row d-block d-xl-flex align-items-center">
                          <div className="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                              <div className="icon-shape icon-shape-success rounded me-4 me-sm-0">
                                  <MdPayments style={{ width: '32px' }}/>
                                  {/* <svg xmlns="http://ww.w3.org/2000/svg" fill="currentColor" className="bi bi-person-badge-fill" viewBox="0 0 16 16">
                                      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.245z" />
                                  </svg> */}
                              </div>
                              <div className="d-sm-none">
                                  <h2 className="h5">Total transaksi berjalan</h2>
                                  {/* <h3 className="fw-extrabold mb-1"><?= $countUser['total_clients']; ?></h3> */}
                                  <h3 className="fw-extrabold mb-1">123</h3>
                              </div>
                          </div>
                          <div className="col-12 col-xl-7 px-xl-0">
                              <div className="d-none d-sm-block">
                                  <h2 className="h6 text-gray-400 mb-0">Total transaksi berjalan</h2>
                                  {/* <h3 className="fw-extrabold mb-2"><?= $countUser['total_clients']; ?></h3> */}
                                  <h3 className="fw-extrabold mb-2">123</h3>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-4 mb-4">
              <div className="card border-0 shadow">
                  <div className="card-body">
                      <div className="row d-block d-xl-flex align-items-center">
                          <div className="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                              <div className="icon-shape icon-shape-info rounded me-4 me-sm-0">
                                <FcMoneyTransfer style={{ width: '32px' }}/>
                              </div>
                              <div className="d-sm-none">
                                  <h2 className="h5">Total penjualan</h2>
                                  {/*<h3 className="fw-extrabold mb-1"><?= $app[0]['count_total_datasets']; ?></h3> */}
                                  <h3 className="fw-extrabold mb-1">123</h3>
                              </div>
                          </div>
                          <div className="col-12 col-xl-7 px-xl-0">
                              <div className="d-none d-sm-block">
                                  <h2 className="h6 text-gray-400 mb-0">Total penjualan</h2>
                                  {/* <h3 className="fw-extrabold mb-2"><?= $app[0]['count_total_datasets']; ?></h3> */}
                                  <h3 className="fw-extrabold mb-2">123</h3>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-4 mb-4">
              <div className="card border-0 shadow">
                  <div className="card-body">
                      <div className="row d-block d-xl-flex align-items-center">
                          <div className="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                              <div className="icon-shape icon-shape-danger rounded me-4 me-sm-0">
                                  <RiBillLine style={{ width: '32px' }}/>
                                  {/* <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cpu" viewBox="0 0 16 16">
                                      <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                                  </svg> */}
                              </div>
                              <div className="d-sm-none">
                                  <h2 className="h5">Total pengeluaran</h2>
                                  {/* <h3 className="fw-extrabold mb-1"><?= $app[0]['last_model_accuracy']; ?>%</h3> */}
                                  <h3 className="fw-extrabold mb-1">1%</h3>
                              </div>
                          </div>
                          <div className="col-12 col-xl-7 px-xl-0">
                              <div className="d-none d-sm-block">
                                  <h2 className="h6 text-gray-400 mb-0">Total pengeluaran</h2>
                                  {/* <h3 className="fw-extrabold mb-2"><?= $app[0]['last_model_accuracy']; ?>%</h3> */}
                                  <h3 className="fw-extrabold mb-2">1%</h3>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="row">
      <div className="col-12 col-xl-8">
          <div className="col-12 px-0 mb-4">
            <div className="card border-0 shadow">
              <div className="card-header d-flex flex-row align-items-center flex-0 border-bottom">
                <div className="d-block">
                  <div className="h6 fw-normal text-gray mb-2">Total penjualan mingguan</div>
                    {/* <h2 className="h3 fw-extrabold"><?= $requests['total_request']; ?></h2> */}
                    <h2 className="h3 fw-extrabold">123</h2>
                  </div>
              </div>
              <div className="card-body p-2">
                <div className="ct-chart-sales-value ct-golden-section ct-series-a"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-4">
          <div className="row">
            <div className="col-12 mb-4">
              <div className="card border-0 shadow">
                <div className="card-header">
                  <div className="row align-items-center">
                    <div className="col">
                      <h2 className="fs-5 fw-bold mb-0">Produk terlaris</h2>
                    </div>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table align-items-center table-flush">
                    <thead className="thead-light">
                      <tr>
                        <th className="border-bottom" scope="col">No</th>
                        <th className="border-bottom" scope="col">Produk</th>
                        <th className="border-bottom" scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-gray-900" scope="row">
                          1
                        </td>
                        <td className="fw-bolder text-gray-500">
                          {/* <?= $requests['web_total_request']; ?> */}
                          test
                        </td>
                        <td className="fw-bolder text-gray-500">
                          {/* <?= $requests['web_success_request']; ?> */}
                          123
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
    
      </div>
    <Footer/>
    </main>
    </>
  )
}

export default DashboardPage;