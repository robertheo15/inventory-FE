import React, { useEffect } from "react";
import title from "../../utils/const/title";
import SideBar from "../../components/navigation/SideBar";
import TopNavigation from "../../components/navigation/TopNavigation";
import Footer from "../../components/navigation/Footer";
import ModalChangePassword from "../../components/modals/setting/ModalChangePassword";

const ProfilePage = () => {
  useEffect(() => {
    document.title = title.profile;
  }, []);

  return (
    <>
      <SideBar />
      <main className="content">
        <TopNavigation />
        <div className="card border-0 shadow">
          <div className="card-body">
            <div className="mb-3">
              <label htmlFor="fullname" className="form-label">
                Full name
              </label>
              <input
                type="text"
                className="form-control"
                id="fullname"
                value="robert"
                name="fullname"
                disabled
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                value="robert@mail.com"
                name="email"
                disabled
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                value="08123456"
                name="phone"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                value="Jlni aja dulu"
                name="address"
              />
            </div>
          </div>

          <div className="card-footer d-flex justify-content-end">
            <button
              type="button"
              className="btn btn-outline-gray-600 me-2"
              data-bs-toggle="modal"
              data-bs-target="#changePassword"
            >
              <i className=" bi bi-person-fill-add me-1"></i>
              Ganti password
            </button>
            <button type="" className="btn btn-outline-gray-600">
              <i className=" bi bi-person-fill-add me-1"></i>
              Ubah data
            </button>
          </div>
        </div>

        <ModalChangePassword />
      </main>
    </>
  );
};

export default ProfilePage;
