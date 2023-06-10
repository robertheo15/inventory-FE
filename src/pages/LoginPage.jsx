import React, { useEffect } from 'react';
// import '../assets/css/volt.css'
import title from '../utils/const/title';
import LoginForm from '../components/form/LoginForm';
const LoginPage = () => {

    useEffect(() => {
        document.title = title.login;
      }, []);

  return (
    <section className="vh-lg-100 mt-5 mt-lg-0 bg-soft d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center form-bg-image" data-background-lg="<?= base_url('admin_assets/assets/img/hero-bg.png'); ?>">
          <div className="col-12 d-flex align-items-center justify-content-center">
            <div className="bg-white shadow border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500">
              <div className="text-center text-md-center mb-4 mt-md-0">
                <h1 className="mb-0 h3">Masuk ke Aplikasi Inventory</h1>
              </div>

              <LoginForm/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginPage;