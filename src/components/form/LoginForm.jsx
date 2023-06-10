import React, { useEffect } from 'react';
import EmailInput from '../input/EmailInput';
import PasswordInput from '../input/PasswordInput';
import label from '../../utils/const/label';
import button from '../../utils/const/button';

const LoginForm = () => {

  return (
    <form action="" className="mt-4" method="POST">
      <div className="alert alert-danger" role="alert">
          <p>asd</p>
      </div>
      <EmailInput label={label.emailInput}/>
      <PasswordInput label={label.passwordInput}/>
                
      <div className="d-flex justify-content-between align-items-top mb-4">
        <div><a href="/forget-password" className="small text-right">Lupa password?</a></div>
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-gray-800">{button.signInButton}</button>
      </div>
    </form>
  );
}
  export default LoginForm;