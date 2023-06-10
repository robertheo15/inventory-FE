import React, { useEffect } from 'react';
import EmailInput from '../input/EmailInput';
import PasswordInput from '../input/PasswordInput';
import label from '../../utils/const/label'
import button from '../../utils/const/button'
import FullNameInput from '../input/FullNameInput';
import AddressInput from '../input/AddressInput';
import PhoneInput from '../input/PhoneInput';
const RegisterForm = () => {

  return (
    <form action="" className="mt-4" method="POST">
      <div className="alert alert-danger" role="alert">
          <p>asd</p>
      </div>
      <EmailInput label={label.emailInput}/>
      <PasswordInput label={label.passwordInput}/>
      <PasswordInput label={label.confirmationPassword}/>
      <FullNameInput label={label.fullNameInput}/>
      <AddressInput label={label.addressInput}/>
      <PhoneInput label={label.phoneInput}/>
              
      <div className="d-grid">
        <button type="submit" className="btn btn-gray-800">{button.registerButton}</button>
      </div>
    </form>
  );
}
  export default RegisterForm;