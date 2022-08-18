import React from 'react';
import "./Modal.css";

function Modal({children, handleClose}) {
  return (
    <div className='modal-backdrop'>
        <div className='modal'>
            {children}
            <button onClick={handleClose}>Close</button>
        </div>
    </div>
  )
}

export default Modal