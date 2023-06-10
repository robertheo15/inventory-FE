import React, { useEffect } from 'react';
import EmailInput from '../input/EmailInput';
import label from '../../utils/const/label';
import button from '../../utils/const/button';

const ForgetForm = () => {

  return (
    <form action="" className="mt-4" method="POST">
      <div className="alert alert-danger" role="alert">
          <p>asd</p>
      </div>
      <EmailInput label={label.emailInput}/>
      <div className="d-grid">
        <button type="submit" className="btn btn-gray-800">{button.forgetPasswordButton}</button>
      </div>
    </form>
  );
}
  export default ForgetForm;