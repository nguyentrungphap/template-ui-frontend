import React from 'react';

import CategoryImg from "../assets/images/items/1.jpg"

const Category = (props) => {
    return (
        <>
           <section className="section-content padding-y">
  <div className="container">
    <nav className="row">
      <div className="col-md-3">
        <div className="card card-category">
          <div className="img-wrap" style={{background: '#ffd7d7'}}>
            <img src={CategoryImg} />
          </div>
          <div className="card-body">
            <h4 className="card-title"><a href="#">Summer shirts</a></h4>
            <ul className="list-menu">
              <li><a href>Unisex T shirts</a></li>
              <li><a href>Casual shirts</a></li>
              <li><a href>Scherf Ice cream</a></li>
              <li><a href>Another category</a></li>
              <li><a href>Great items name</a></li>
              <li><a href>Great items name</a></li>
            </ul>
          </div>
        </div>
      </div> 
      <div className="col-md-3">
        <div className="card card-category">
          <div className="img-wrap" style={{background: '#ffd7d7'}}>
            <img src={CategoryImg} />
          </div>
          <div className="card-body">
            <h4 className="card-title"><a href="#">Summer shirts</a></h4>
            <ul className="list-menu">
              <li><a href>Unisex T shirts</a></li>
              <li><a href>Casual shirts</a></li>
              <li><a href>Scherf Ice cream</a></li>
              <li><a href>Another category</a></li>
              <li><a href>Great items name</a></li>
              <li><a href>Great items name</a></li>
            </ul>
          </div>
        </div>
      </div> 
      <div className="col-md-3">
        <div className="card card-category">
          <div className="img-wrap" style={{background: '#ffd7d7'}}>
            <img src={CategoryImg} />
          </div>
          <div className="card-body">
            <h4 className="card-title"><a href="#">Summer shirts</a></h4>
            <ul className="list-menu">
              <li><a href>Unisex T shirts</a></li>
              <li><a href>Casual shirts</a></li>
              <li><a href>Scherf Ice cream</a></li>
              <li><a href>Another category</a></li>
              <li><a href>Great items name</a></li>
              <li><a href>Great items name</a></li>
            </ul>
          </div>
        </div>
      </div> 
      <div className="col-md-3">
        <div className="card card-category">
          <div className="img-wrap" style={{background: '#ffd7d7'}}>
            <img src={CategoryImg} />
          </div>
          <div className="card-body">
            <h4 className="card-title"><a href="#">Summer shirts</a></h4>
            <ul className="list-menu">
              <li><a href>Unisex T shirts</a></li>
              <li><a href>Casual shirts</a></li>
              <li><a href>Scherf Ice cream</a></li>
              <li><a href>Another category</a></li>
              <li><a href>Great items name</a></li>
              <li><a href>Great items name</a></li>
            </ul>
          </div>
        </div>
      </div> 
    </nav> {/* row.// */}
  </div> {/* container .//  */}
</section>        </>
    );
}

export default Category;
