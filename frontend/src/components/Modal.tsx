import React from "react";

type Props = {
  time: number;
  trans: string;
};

const Modal = ({ time, trans }: Props) => {
  return (
    <div
      className="modal modal-sheet position-absolute top-0 left-0 d-block bg-body-secondary p-4 py-md-5"
      tabIndex={-1}
      role="dialog"
      id="modalSheet"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-header border-bottom-0">
            <h1 className="modal-title fs-5">Add todo with voice</h1>
          </div>
          <div className="modal-body py-0">
            <p>
              This will close in
              {time} seconds
            </p>
          </div>
          <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
            <div id="speech" className="anim m-left type2">
              <div className="pulse-ring"></div>
              <i className="bi bi-mic-fill" aria-hidden="true"></i>
            </div>
            <span>{trans}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
