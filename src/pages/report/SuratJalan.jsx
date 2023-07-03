import React from "react";
import SideBar from "../../components/navigation/SideBar";
import TopNavigation from "../../components/navigation/TopNavigation";
import TableDocs from "../../components/tables/TableDocs";
import Footer from "../../components/navigation/Footer";

const TravelDocument = () => {
    return(
        <>
            <SideBar/>
            <main className="content">
                <TopNavigation/>
                <TableDocs/>
            </main>
        </>
    )
}

export default TravelDocument;