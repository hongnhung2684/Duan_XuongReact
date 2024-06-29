import React from "react";
import { Link, Outlet } from "react-router-dom";

const LayoutAdmin = () => {
  return (
    <>
      <header>
        <h1>Hello Admin</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/hosts">Quản lý host</Link>
          </li>

          <li>
            <Link to="/">Xem thống kê</Link>
          </li>
        </ul>
      </header>
      <div className="row">
        <div className="col-3">
          <div className="sidebar">
            <ul>
              <li>
                <Link to="/admin">Dashboard</Link>
              </li>
              <li>
                <Link to="/admin/users">User</Link>
              </li>
              <li>
                <Link to="/admin/products">Products</Link>
              </li>
              <li>
                <Link to="/admin/categories">Categories</Link>
              </li>
              <li>
                <Link to="/admin/brands">Brands</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-9">
          <div className="main">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutAdmin;
