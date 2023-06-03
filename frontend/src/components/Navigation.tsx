import React from "react";
import EditedLink from "./EditedLink";

const Navigation = (): JSX.Element => {
  return (
    <nav className="w-100 p-3 bg-top position-fixed top-0 left-0 shadow-white z-3 z-dominant">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <span className="fs-4 fw-bold" style={{ color: "#1e88d4" }}>
              TodoAPP
            </span>
          </a>

          <div className="text-end">
            <EditedLink to="/login">
              <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>
            </EditedLink>
            <EditedLink to="/register">
              <button type="button" className="btn btn-primary">
                Sign up
              </button>
            </EditedLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
