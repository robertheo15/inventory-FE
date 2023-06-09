import React from "react";
import SideBar from "../components/navigation/SideBar";
import TopNavigation from "../components/Navigation/TopNavigation";
import Footer from "../components/navigation/Footer";
import TableInvoice from "../components/tables/TableInvoice";

const InvoicePage = () => {
    return(
        <>
            <SideBar/>
            <main className="content">
                <TopNavigation/>

                <div class="row my-5">
                    <div class="col-6">
                        <div className="mb-2 d-flex">
                            <h6 className='me-2'><b>Nama: </b></h6>
                            <h6 className=''>Vladimir Gimank</h6>
                        </div>
                        <div className="mb-2 d-flex">
                            <h6 className='me-2'><b>NoHP: </b></h6>
                            <h6 className=''>123456789</h6>
                        </div>
                        <div className="mb-2 d-flex">
                            <h6 className='me-2'><b>Alamat: </b></h6>
                            <h6 className=''>Vladimir Gimank Rumahnya</h6>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <TableInvoice/>
                        {/* 1 invoice = 1 component TableInvoice, tapi klo mau di modip juga bebas wkwkwkwk */}
                        <TableInvoice/>
                    </div>
                </div>

                <Footer/>
            </main>
        </>
    )
}

export default InvoicePage