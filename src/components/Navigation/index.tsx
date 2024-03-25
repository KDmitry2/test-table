import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {PAGE_ROUTE, PRICE_PLAN_PAGE_ROUTE, PRODUCT_PAGE_ROUTE} from "../../provider/constants-route";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Тестовое задание</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to={PAGE_ROUTE}>Pages</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to={PRODUCT_PAGE_ROUTE}>Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to={PRICE_PLAN_PAGE_ROUTE}>Price plans</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;