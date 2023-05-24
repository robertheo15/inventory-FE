import React from 'react';

const EmailInput = ({label}) => {
  return (
    <div className="form-group mb-4">
      <label for="email">{label}</label>
      <div className="input-group">
        <span className="input-group-text" id="basic-addon1">
          <svg className="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
        </span>
        <input type="email" className="form-control" placeholder="Masukan alamat email" id="email" name="email" required autofocus/>
      </div>
    </div>
  ); 
};

export default EmailInput;