import React from "react";
import SideBar from "../components/navigation/SideBar";
import TopNavigation from "../components/Navigation/TopNavigation";
import Footer from "../components/navigation/Footer";
import TableDocs from "../components/tables/TableDocs";

const TravelDocument = () => {
    return(
        <>
            <SideBar/>
            <main className="content">
                <TopNavigation/>
                <TableDocs/>
                <Footer/>
            </main>
        </>
    )
}

export default TravelDocument;