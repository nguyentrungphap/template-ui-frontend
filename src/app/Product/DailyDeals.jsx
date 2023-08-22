import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { GET_PAGE } from "../api/apiService";

const DailyDeals = () => {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const numItems = 10;
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const currentPage = parseInt(queryParams.get("page")) || 1;

  const handlePageChange = (page) => {
    // Navigate to a new URL with the updated page parameter
    navigate(`/home?page=${page}`);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`page-item ${currentPage === i ? "active" : ""}`}
        >
          <Link
            className="page-link"
            href={`?page=${i}`}
            onClick={(event) => handlePageChange(i, event)}
          >
            {i}
          </Link>
        </li>
      );
    }
    return pageNumbers;
  };

  useEffect(() => {
    GET_PAGE(`products`, currentPage, numItems).then((response) => {
      setProducts(response.data);
      const contentRangeHeader = response.headers["content-range"];
      const [, totalItems] = contentRangeHeader.match(/\/(\d+)/);
      const calculatedTotalPages = Math.ceil(numItems /totalItems);
      setTotalPages(calculatedTotalPages);
    });
  }, [currentPage]);

  return (
    <section class="section-content padding-y">
      <div class="container">
        <div class="card mb-3">
          <div class="card-body">
            <div class="row">
              <div class="col-md-2"> Your are here: </div>
              <nav class="col-md-8">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#">Home</a>
                  </li>
                  <li class="breadcrumb-item">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#">Category name</a>
                  </li>
                </ol>
              </nav>
              {/*<!-- col.// -->*/}
            </div>
            {/*<!-- row.// -->*/}
            <hr />
            <div class="row">
              <div class="col-md-2">Filter by</div> {/*<!-- col.// -->*/}
              <div class="col-md-10">
                <ul className="list-inline">
                  <li className="list-inline-item mr-3 dropdown">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Supplier type
                    </a>
                    <div
                      className="dropdown-menu p-3"
                      style={{ maxWidth: "400px" }}
                    >
                      <label className="form-check">
                        <input
                          type="radio"
                          name="myfilter"
                          className="form-check-input"
                        />
                        Good supplier
                      </label>
                      <label className="form-check">
                        <input
                          type="radio"
                          name="myfilter"
                          className="form-check-input"
                        />
                        Best supplier
                      </label>
                      <label className="form-check">
                        <input
                          type="radio"
                          name="myfilter"
                          className="form-check-input"
                        />
                        New supplier
                      </label>
                    </div>
                  </li>
                  <li className="list-inline-item mr-3 dropdown">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Country
                    </a>
                    <div className="dropdown-menu p-3">
                      <label className="form-check">
                        <input type="checkbox" className="form-check-input" />
                        China
                      </label>
                      <label className="form-check">
                        <input type="checkbox" className="form-check-input" />
                        Japan
                      </label>
                      <label className="form-check">
                        <input type="checkbox" className="form-check-input" />
                        Uzbekistan
                      </label>
                      <label className="form-check">
                        <input type="checkbox" className="form-check-input" />
                        Russia
                      </label>
                    </div>
                  </li>
                  <li className="list-inline-item mr-3 dropdown">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Feature
                    </a>
<div className="dropdown-menu">
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a href="" className="dropdown-item">
                        Anti bacterial
                      </a>
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a href="" className="dropdown-item">
                        With buttons
                      </a>
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a href="" className="dropdown-item">
                        Extra safety
                      </a>
                    </div>
                  </li>
                  <li className="list-inline-item mr-3">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#">Color</a>
                  </li>
                  <li className="list-inline-item mr-3">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#">Size</a>
                  </li>
                  <li className="list-inline-item mr-3">
                    <div className="form-inline">
                      <label className="mr-2">Price</label>
                      <input
                        className="form-control form-control-sm"
                        placeholder="Min"
                        type="number"
                      />
                      <span className="px-2"> - </span>
                      <input
                        className="form-control form-control-sm"
                        placeholder="Max"
                        type="number"
                      />
                      <button
                        type="submit"
                        className="btn btn-sm btn-light ml-2"
                      >
                        Ok
                      </button>
                    </div>
                  </li>
                  <li className="list-inline-item mr-3">
                    <label className="custom-control mt-1 custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <div className="custom-control-label">Ready to ship</div>
                    </label>
                  </li>
                </ul>
              </div>
              {/*<!-- col.// -->*/}
            </div>
            {/*<!-- row.// -->*/}
          </div>
          {/*<!-- card-body .// -->*/}
        </div>
        {/*<!-- card.// -->*/}
        {/*<!-- ============================ FILTER TOP END.// ================================= -->*/}
        <header class="mb-3">
          <div class="form-inline">
            <strong class="mr-md-auto">32 Items found </strong>
            <select class="mr-2 form-control">
              <option>Latest items</option>
              <option>Trending</option>
              <option>Most Popular</option>
<option>Cheapest</option>
            </select>
            <div class="btn-group">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                href="page-listing-grid.html"
                class="btn btn-light active"
                data-toggle="tooltip"
                title="List view"
              >
                <i class="fa fa-bars"></i>
              </a>

              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                href="page-listing-large.html"
                class="btn btn-light"
                data-toggle="tooltip"
                title="Grid view"
              >
                <i class="fa fa-th"></i>
              </a>
            </div>
          </div>
        </header>

        {/*<!-- sect-heading -->*/}
        <div class="row">
          {products.length > 0 &&
            products.map((row) => (
              <div class="col-md-3">
                <figure class="card card-product-grid">
                  <div class="img-wrap">
                    <span class="badge badge-danger"> NEW </span>
                    <img src={`./assets/images/items/${row.thumbnail}`} />
                  </div>
                  {/*<!-- img-wrap.// -->*/}
                  <figcaption class="info-wrap">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" class="title mb-2">
                      {row.title}
                    </a>
                    <div class="price-wrap">
                      <span class="price">$32.00-$40.00</span>
                      <small class="text-muted">/per item</small>
                    </div>
                    {/*<!-- price-wrap.// -->*/}
                    <p class="mb-2">
                      2 Pieces <small class="text-muted">(Min Order)</small>
                    </p>
                    <p class="text-muted ">Guangzhou Yichuang Electronic Co</p>
                    <hr />
                    <p class="mb-3">
                      <span class="tag">
                        <i class="fa fa-check"></i> Verified
                      </span>
                      <span class="tag"> 2 Years </span>
                      <span class="tag"> 23 reviews </span>
                      <span class="tag"> Japan </span>
                    </p>
                    <label class="custom-control mb-3 custom-checkbox">
                      <input type="checkbox" class="custom-control-input" />
                      <div class="custom-control-label">Add to compare</div>
                    </label>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" class="btn btn-outline-primary">
                      <i class="fa fa-envelope"></i> Contact supplier
                    </a>
                  </figcaption>
                </figure>
              </div>
            ))}
        </div>
        {/*<!-- row end.// -->*/}
<nav className="mb-4" aria-label="Page navigation sample">
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <a className="page-link" href="#" onClick={handlePrevious}>
                Previous
              </a>
            </li>
            {renderPageNumbers()}
            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <a className="page-link" href="#" onClick={handleNext}>
                Next
              </a>
            </li>
          </ul>
        </nav>
        <div class="box text-center">
          <p>Did you find what you were looking for？</p>

          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="" class="btn btn-light">
            Yes
          </a>

          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="" class="btn btn-light">
            No
          </a>
        </div>
      </div>
      {/*<!-- container .//  -->*/}
    </section>
  );
};
export default DailyDeals;