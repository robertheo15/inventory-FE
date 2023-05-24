import React, { useEffect } from 'react';
import Footer from '../components/navigation/Footer';
import SideBar from '../components/navigation/SideBar';
import TopNavigation from '../components/Navigation/TopNavigation';

const HomePage = () => {
  return (
    <>
    <SideBar/>
    <main className="content">
    <TopNavigation/>
      <main>
        <section className="vh-100 d-flex align-items-center justify-content-center">
          <div className="container">
            <div className="row align-items-center ">
              <div className="col-12 col-lg-5 order-2 order-lg-1 text-center text-lg-left">
                <h1 className="mt-5">Hello, Welcome back <span className="text-danger">aasd</span></h1>
                <p className="lead my-4">It's nice to see you back, have a nice day and don't forget to drink a glass of coffee <span className="text-danger">-CoffeeAI</span></p>
                <a href="" className="btn btn-gray-800 d-inline-flex align-items-center justify-content-center mb-4">
                  Go to Dashboard
                </a>
              </div>
              <div className="col-12 col-lg-7 order-1 order-lg-2 text-center d-flex align-items-center justify-content-center">
                <img className="img-fluid w-50" src="/img/illustrations/welcome_icon.png" alt="office"/>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </main>
  </>
  )
}

export default HomePage;