import React, { useEffect } from "react";
import EmailInput from "../input/EmailInput";
import PasswordInput from "../input/PasswordInput";
import label from "../../utils/const/label";
import button from "../../utils/const/button";

const LoginForm = ({ handleLogin, setEmail, setPassword }) => {
  return (
    <>
      <EmailInput label={label.emailInput} setEmail={setEmail} />
      <PasswordInput label={label.passwordInput} setPassword={setPassword} />

      <div className="d-flex justify-content-between align-items-top mb-4">
        <div>
          <a href="/forget-password" className="small text-right">
            Lupa password?
          </a>
        </div>
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-gray-800"
        onClick={()=> {handleLogin()}}>
          {button.signInButton}
        </button>
      </div>
    </>
  );
};
export default LoginForm;
