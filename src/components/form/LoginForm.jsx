import React, { useEffect } from 'react';
import EmailInput from '../input/EmailInput';
import PasswordInput from '../input/PasswordInput';

const LoginForm = () => {

  return (
    <form action="" className="mt-4" method="POST">
      <div className="alert alert-danger" role="alert">
          <p>asd</p>
      </div>
      <EmailInput/>
      <PasswordInput/>
                
      <div className="d-flex justify-content-between align-items-top mb-4">
        <div><a href="./forgot-password.html" className="small text-right">Lost password?</a></div>
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-gray-800">Sign in</button>
      </div>
    </form>
  );
}
  export default LoginForm;