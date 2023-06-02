import React from "react";
import {TodoType} from '../interfaces'

const TaskCard = ({ body, isDone, date }: TodoType) => {
    let time:string = `${date.split(' ')[4].split(':')[0]}:${date.split(' ')[4].split(':')[1]}`
  return (
    <div className="w-100 p-2 rounded-2 d-flex align-items-center position-relative border border-gray">
      <div className="position-absolute text-p bottom-0 ">{time}</div>
      <div className="p-1">
        <div className="checkbox-new">
          <span className="text-white user-select-none">&#x2714;</span>
        </div>
      </div>
      <p className="line-clamp-2 text-white">
        {body}
      </p>
      <button
        className="btn bg-transparent fs-3 text-danger"
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        data-bs-title="DELETE"
        data-bs-custom-className="red-tooltip"
      >
        <div className="bi bi-trash"></div>
      </button>
    </div>
  );
};

export default TaskCard;
