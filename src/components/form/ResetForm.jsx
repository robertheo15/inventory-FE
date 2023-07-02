import React, { useEffect } from "react";
import PasswordInput from "../input/PasswordInput";
import label from "../../utils/const/label";
import button from "../../utils/const/button";

const ResetForm = () => {
  return (
    <>
      <PasswordInput label={label.passwordInput} />
      <PasswordInput label={label.confirmationPassword} />
      <div className="d-grid">
        <button type="submit" className="btn btn-gray-800">
          {button.resetPasswordButton}
        </button>
      </div>
    </>
  );
};
export default ResetForm;
