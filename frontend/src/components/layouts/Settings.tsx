import React from "react";
import { Outlet } from "react-router-dom";
import EditedLink from "../EditedLink";

const Settings = () => {
  return (
    <div className="bg-light d-flex justify-content-start align-items-center flex-column min-vh-100 py-1">
      <div className="w-100">
        <div className="container">
        <EditedLink to="/">
          <span className="py-1 px-2 rounded fs-2 text-dark fs-lg-3 hover">
            <i className="bi bi-arrow-left"></i>
          </span>
        </EditedLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Settings;
