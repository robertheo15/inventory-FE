import React, { useEffect } from 'react';

const BackToHomeBtn = () => {

  return (
    <p className="text-center">
          <a href="" className="d-flex align-items-center justify-content-center">
            <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
            </svg>
            Back to homepage
          </a>
        </p>
  );
}
  export default BackToHomeBtn;