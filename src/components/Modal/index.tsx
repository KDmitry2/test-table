import React, {FC, ReactNode} from 'react';

interface IModal {
  children:ReactNode
  successCallback?:()=>void
}
const Modal:FC<IModal> = ({children,successCallback}) => {
  return (
    <div className="modal" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {children}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            {successCallback && <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={successCallback}>Save</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;