import React from "react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="section-header">
        <nav className="navbar d-none d-md-flex p-md-0 navbar-expand-sm navbar-light border-bottom">
        </nav>
        <div className="container">
          <section className="header-main border-bottom">
            <div className="row row-sm">
              <div className="col-6 col-sm col-md col-lg  flex-grow-0">
                <a href="http://bootstrap-ecommerce.com" className="brand-wrap">
                  <img className="logo" src={logo} alt="" />
                </a>
                {/* brand-wrap.// */}
              </div>
              <div className="col-6 col-sm col-md col-lg flex-md-grow-0">
                {/* mobile-only */}
                <div className="d-md-none float-right">
                  <a href="/" className="btn btn-light">
                    <i className="fa fa-bell" />
                  </a>
                  <a href="/" className="btn btn-light">
                    <i className="fa fa-user" />
                  </a>
                  <a href="/" className="btn btn-light">
                    <i className="fa fa-shopping-cart" /> 2
                  </a>
                </div>
              
              </div>
              {/* col.// */}
              <div className="col-lg-6 col-xl col-md-5 col-sm-12 flex-grow-1">
                <form action="" className="search-header">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                    <select
                      className="custom-select border-left"
                      name="category_name"
                    >
                      <option value>All type</option>
                      <option value="codex">Special</option>
                      <option value="comments">Only best</option>
                      <option value="content">Latest</option>
                    </select>
                  </div>
                </form>
                {/* search-wrap .end// */}
              </div>
              {/* col.// */}
              <div className="col col-lg col-md flex-grow-0">
                <button className="btn btn-block btn-primary" type="submit">
                  Search
                </button>
              </div>
              <div className="col col-lg col-md flex-grow-0">
                <button className="btn btn-block btn-light" type="submit">
                  Advanced
                </button>
              </div>
            </div>
            {/* row.// */}
          </section>
          {/* header-main .// */}
          <nav className="navbar navbar-main navbar-expand pl-0">
            <ul className="navbar-nav flex-wrap">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li  className="nav-item">
                      <Link to="/category"  className="nav-link">All category</Link>
                      </li>
                      <li  className="nav-item">
                      <Link to="/login"  className="nav-link">Page login</Link>
                      </li>
                      <li  className="nav-item">
                      <Link to="/register"  className="nav-link"> Page register</Link>
                      </li><li  className="nav-item">
                      <Link to="/cart"  className="nav-link">Page Cart</Link>
                      </li>
                      <li className="nav-item">
                      <Link to="/user"  className="nav-link">Page User</Link>
              </li>
              
            </ul>
          </nav>
          {/* navbar-main  .// */}
        </div>
        {/* container.// */}
      </header>
      {/* section-header.// */}
    </div>
  );
};

export default Header;
