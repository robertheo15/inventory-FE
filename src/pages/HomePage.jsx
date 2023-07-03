import React, { useEffect } from "react";
import TopNavigation from "../components/navigation/TopNavigation";
import Footer from "../components/navigation/Footer";
import SideBar from "../components/navigation/SideBar";
import title from "../utils/const/title";

const HomePage = () => {
  useEffect(() => {
    document.title = title.home;
  }, []);

  const userData = localStorage.getItem("userData");
  const { data } = JSON.parse(userData);
  return (
    <>
      <SideBar />
      <main className="content">
        <TopNavigation />
        <main>
          <section className="vh-100 d-flex align-items-center justify-content-center">
            <div className="container">
              <div className="row align-items-center ">
                <div className="col-12 col-lg-5 order-2 order-lg-1 text-center text-lg-left">
                  <h1 className="mt-5">
                    Hello, Welcome back{" "}
                    <span className="text-danger">{data.full_name}</span>
                  </h1>
                </div>
              </div>
            </div>
          </section>
        </main>
      </main>
    </>
  );
};

export default HomePage;
