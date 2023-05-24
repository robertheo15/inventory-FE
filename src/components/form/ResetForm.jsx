import React, { useEffect } from 'react';
import PasswordInput from '../input/PasswordInput';
import label from '../../utils/label';
import button from '../../utils/button';

const ResetForm = () => {

  return (
    <form action="" className="mt-4" method="POST">
      <div className="alert alert-danger" role="alert">
          <p>asd</p>
      </div>
      <PasswordInput label={label.passwordInput}/>
      <PasswordInput label={label.confirmationPassword}/>
      <div className="d-grid">
        <button type="submit" className="btn btn-gray-800">{button.resetPasswordButton}</button>
      </div>
    </form>
  );
}
  export default ResetForm;