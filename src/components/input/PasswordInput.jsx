import React from "react";

const PasswordInput = ({ label, setPassword }) => {
  return (
    <div className="form-group">
      <div className="form-group mb-4">
        <label htmlFor="password">{label}</label>
        <div className="input-group">
          <span className="input-group-text" id="basic-addon2">
            <svg
              className="icon icon-xs text-gray-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <input
            type="password"
            placeholder="Masukan password"
            className="form-control"
            id="password"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default PasswordInput;
