import React from "react";

import imgProduct from "../assets/images/items/1.jpg"
import thumbsProduct from "../assets/images/items/2.jpg"

const DetailsProduct = (props) => {
  return (
    <>
      <section className="section-content bg-white padding-y">
        <div className="container">
          {/* ============================ ITEM DETAIL ======================== */}
          <div className="row">
            <aside className="col-md-6">
              <div className="card">
                <article className="gallery-wrap">
                  <div className="img-big-wrap">
                    <div>
                      <a href="#">
                        <img src={imgProduct} />
                      </a>
                    </div>
                  </div>
                  {/* slider-product.// */}
                  <div className="thumbs-wrap">
                    <a href="#" className="item-thumb">
                      <img src={thumbsProduct} />
                    </a>
                    <a href="#" className="item-thumb">
                      <img src={thumbsProduct} />
                    </a>
                    <a href="#" className="item-thumb">
                      <img src={thumbsProduct} />
                    </a>
                    <a href="#" className="item-thumb">
                      <img src={thumbsProduct} />
                    </a>
                  </div>
                  {/* slider-nav.// */}
                </article>
                {/* gallery-wrap .end// */}
              </div>
              {/* card.// */}
            </aside>
            <main className="col-md-6">
              <article className="product-info-aside">
                <h2 className="title mt-3">Hot sale unisex New Design Shoe </h2>
                <div className="rating-wrap my-3">
                  <ul className="rating-stars">
                    <li style={{ width: "80%" }} className="stars-active">
                      <i className="fa fa-star" /> <i className="fa fa-star" />
                      <i className="fa fa-star" /> <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" /> <i className="fa fa-star" />
                      <i className="fa fa-star" /> <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                  <small className="label-rating text-muted">132 reviews</small>
                  <small className="label-rating text-success">
                    <i className="fa fa-clipboard-check" /> 154 orders
                  </small>
                </div>
                {/* rating-wrap.// */}
                <div className="mb-3">
                  <var className="price h4">USD 465,00</var>
                  <span className="text-muted">USD 562.65 incl. VAT</span>
                </div>
                {/* price-detail-wrap .// */}
                <p>
                  Compact sport shoe for running, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat
                </p>
                <dl className="row">
                  <dt className="col-sm-3">Manufacturer</dt>
                  <dd className="col-sm-9">
                    <a href="#">Great textile Ltd.</a>
                  </dd>
                  <dt className="col-sm-3">Article number</dt>
                  <dd className="col-sm-9">596 065</dd>
                  <dt className="col-sm-3">Guarantee</dt>
                  <dd className="col-sm-9">2 year</dd>
                  <dt className="col-sm-3">Delivery time</dt>
                  <dd className="col-sm-9">3-4 days</dd>
                  <dt className="col-sm-3">Availabilty</dt>
                  <dd className="col-sm-9">in Stock</dd>
                </dl>
                <div className="form-row  mt-4">
                  <div className="form-group col-md flex-grow-0">
                    <div className="input-group mb-3 input-spinner">
                      <div className="input-group-prepend">
                        <button
                          className="btn btn-light"
                          type="button"
                          id="button-plus"
                        >
                          +
                        </button>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={1}
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-light"
                          type="button"
                          id="button-minus"
                        >
                          −
                        </button>
                      </div>
                    </div>
                  </div>
  
                  <div className="form-group col-md">
                    <a href="#" className="btn  btn-primary">
                      <i className="fas fa-shopping-cart" />
                      <span className="text">Add to cart</span>
                    </a>
                    <a href="#" className="btn btn-light">
                      <i className="fas fa-envelope" />
                      <span className="text">Contact supplier</span>
                    </a>
                  </div>
  
                </div>
                {/* row.// */}
              </article>
              {/* product-info-aside .// */}
            </main>
            {/* col.// */}
          </div>
          {/* row.// */}
          {/* ================ ITEM DETAIL END .// ================= */}
        </div>
        {/* container .//  */}
      </section>
      {/* ========================= SECTION CONTENT END// ========================= */}
      {/* ========================= SECTION  ========================= */}
      <section className="section-name padding-y bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h5 className="title-description">Description</h5>
              <p>
                Lava stone grill, suitable for natural gas, with cast-iron
                cooking grid, piezo ignition, stainless steel burners, water
                tank, and thermocouple. Thermostatic adjustable per zone. Comes
                complete with lava rocks. Adjustable legs. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
              <ul className="list-check">
                <li>Material: Stainless steel</li>
                <li>Weight: 82kg</li>
                <li>built-in drip tray</li>
                <li>Open base for pots and pans</li>
                <li>On request available in propane execution</li>
              </ul>
              <h5 className="title-description">Specifications</h5>
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th colSpan={2}>Basic specs</th>
                  </tr>
                  <tr>
                    <td>Type of energy</td>
                    <td>Lava stone</td>
                  </tr>
                  <tr>
                    <td>Number of zones</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Automatic connection </td>
                    <td>
                      <i className="fa fa-check text-success" /> Yes
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={2}>Dimensions</th>
                  </tr>
                  <tr>
                    <td>Width</td>
                    <td>500mm</td>
                  </tr>
                  <tr>
                    <td>Depth</td>
                    <td>400mm</td>
                  </tr>
                  <tr>
                    <td>Height </td>
                    <td>700mm</td>
                  </tr>
                  <tr>
                    <th colSpan={2}>Materials</th>
                  </tr>
                  <tr>
                    <td>Exterior</td>
                    <td>Stainless steel</td>
                  </tr>
                  <tr>
                    <td>Interior</td>
                    <td>Iron</td>
                  </tr>
                  <tr>
                    <th colSpan={2}>Connections</th>
                  </tr>
                  <tr>
                    <td>Heating Type</td>
                    <td>Gas</td>
                  </tr>
                  <tr>
                    <td>Connected load gas</td>
                    <td>15 Kw</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* row.// */}
        </div>
      </section>
      <section className="padding-y-lg bg-light border-top">
        <div className="container">
          <p className="pb-2 text-center">
            Delivering the latest product trends and industry news straight to
            your inbox
          </p>
          <div className="row justify-content-md-center">
            <div className="col-lg-4 col-sm-6">
              <form className="form-row">
                <div className="col-8">
                  <input
                    className="form-control"
                    placeholder="Your Email"
                    type="email"
                  />
                </div>

                <div className="col-4">
                  <button type="submit" className="btn btn-block btn-warning">
                    <i className="fa fa-envelope" /> Subscribe
                  </button>
                </div>

              </form>
              <small className="form-text">
                We’ll never share your email address with a third-party.
              </small>
            </div>
            {/* col-md-6.// */}
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsProduct;
