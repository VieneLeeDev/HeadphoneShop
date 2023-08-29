import React from "react";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Outlet } from "react-router-dom";
function Dashboard() {
  return (
    <div className="container-fluid vh-100">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark min-vh-100">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white ">
            <Link
              to="/Dashboard"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 d-none d-sm-inline">Menu</span>
            </Link>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="nav-item">
                <Link to="/" className="nav-link align-middle px-0 text-white">
                  <i className="fs-4 bi-house"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="Statistical"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-table"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Manage</span>
                </Link>
              </li>
              <li>
                <Link
                  to="Admin"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-speedometer2"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Manage Admin</span>{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="Employee"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-people"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">
                    {" "}
                    Manage Employees
                  </span>{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col py-3">
          <div className="p-1 d-flex justify-content-center shadow">
            <h4> Employee Management System </h4>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
