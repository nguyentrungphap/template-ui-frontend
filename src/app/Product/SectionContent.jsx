import React, { useEffect, useState } from "react";
import {Link, useLocation, useNavigate} from "react-router-dom"
import {GET_PAGE} from "../api/apiService.js"
const  SectionContent =()=>{
  const [products,setProducts]=useState([]);
  const [totalPages,setTotalPages]=useState(1);
  const numItems=8
  const navigate = useNavigate()
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const currentPage = parseInt(queryParams.get("page"))||1;
  const handlePageChange =(page)=>{
    navigate(`/home?page=${page}`);
  }
  const handlePrevious=()=>{
    if(currentPage>1){
      handlePageChange(currentPage -1);
    }
  }
  const handleNext =()=>{
    if(currentPage < totalPages){
      handlePageChange(currentPage +1)
    }
  }
  const renderPageNumbers = ()=>{
    const pageNumbes =[];
    for(let i =1; i<=totalPages ; i++)
    {
      pageNumbes.push(
        <li
        key={i}
        className={`page-item${currentPage ===i ? "active":""}`}>
          <a className="page-link"
          href={`?page=${i}`}
          onClick={(event)=>handlePageChange(i , event)}>{i}</a>
        </li>
      )
    }
  
  return pageNumbes;
  }

useEffect(()=>{
  GET_PAGE(`products`,currentPage,numItems ).then((response)=>{
    setProducts(response.data);
    const contentRangeHeader = response.headers["content-range"]
    const  [,totalItem]=contentRangeHeader.match(/\/(\d+)/);
    const calculatedTotalPage = Math.ceil(numItems/totalItem)
    setTotalPages(calculatedTotalPage);
  })
},[currentPage]);
  
return (
    <section className="padding-bottom">
      <header className="section-heading mb-4">
        <h3 className="title-section">Recommended items</h3>
      </header>
      <div className="row">
        {products.length >0 && products.map((row)=>(
        <div className="col-xl-3 col-lg-3 col-md-4 col-6">
        <div className="card card-product-grid">
        <Link to="/details" className="img-wrap">
            <img src={`./assets/images/items/${row.thumbnail}`} alt="" />
            </Link>
          <figcaption className="info-wrap">
            <ul className="rating-stars mb-1">
              <li style={{ width: "80%" }} className="stars-active">
                <img src="" alt="" />
              </li>
              <li>
                <img src=""alt="" />
              </li>
            </ul>
            <div>
            <Link to="/details" className="text-muted">
                {row.categories.name}
              </Link>
              <Link to="/details" className="title">
                {row.title}
              </Link>
            </div>
            <div className="price h5 mt-2">{row.price}$</div>
          </figcaption>
        </div>
      </div>
        ))}


      </div>
      <nav className="mb-4" aria-label="Page navigation sample">
        <ul className="pagination">
            <li className={`page-item ${currentPage ===1 ? "disabled":""}`}>
              <a className="page-link" href="#" onClick={handlePrevious}>Previous</a>
            </li>
            {renderPageNumbers()}
            <li className={`page-item ${currentPage === totalPages  ? "disabled":""}`}>
            <a className="page-link" href="#" onClick={handleNext}>Next</a>
            </li>
        </ul>
      </nav>
    </section>
  );
}
export default SectionContent