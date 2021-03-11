/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import Header from "../../Home/Header";
import Footer from "../../Home/Footer";
import { Link, useParams } from "react-router-dom";
import Photo from "../../VendorPage/Photo";
import { connect } from "react-redux";
import * as actions from "../../../reduxStore/actions";

const Cat2 = (props) => {
  const params = useParams();
  console.log(params.id);
  //   console.log(props.params.id);

  if (params.id == 10) {
    console.log("hii");
    return (
      <Fragment>
        <Header />
        <div>
          <div className="page-header">
            <div className="container">
              <div className="row">
                {/* page caption */}
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                  <div className="page-caption">
                    <h1 className="page-title">Listing Vendor</h1>
                  </div>
                </div>
                {/* /.page caption */}
              </div>
            </div>
            {/* page caption */}
            <div className="page-breadcrumb">
              <div className="container">
                <div className="row">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/" className="breadcrumb-link">
                          Home
                        </Link>
                      </li>
                      <li className="breadcrumb-item">
                        <Link to="/vendorprofile" className="breadcrumb-link">
                          Vendor
                        </Link>
                      </li>
                      <li
                        className="breadcrumb-item active text-white"
                        aria-current="page"
                      >
                        Listing Venue
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            {/* page breadcrumb */}
          </div>
          {/* /.page-header */}
          {/* vendor-section */}
          <div className="content">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-8 col-md-7 col-sm-12 col-12">
                  {props.vendor?.map((ven, index) => {
                    if (ven.vendor_type_id == params.id) {
                      return (
                        <div key={index} className="vendor-thumbnail list-view">
                          {/* Vendor thumbnail */}
                          <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 border-right pr-0">
                              <div className="vendor-img">
                                {/* Vendor img */}
                                <Link to="/samplepage">
                                  <div className="zoomimg">
                                    <img
                                      src={ven.photographs}
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                </Link>
                                <div className="wishlist-sign">
                                  <Link
                                    to="/samplepage"
                                    className="btn-wishlist"
                                  >
                                    <i className="fa fa-heart" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                            {/* /.Vendor img */}
                            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 pl-0">
                              <div className="vendor-content">
                                {/* Vendor Content */}
                                <h2 className="vendor-title">
                                  <Link to="/samplepage" className="title">
                                    {ven.name}
                                    {/* Wedding Venue Title Name */}
                                  </Link>
                                </h2>
                                <p className="vendor-address">{ven.address}</p>
                                {/* /.Vendor meta */}
                              </div>
                              <div className="vendor-meta m-0">
                                <div className="vendor-meta-item vendor-meta-item-bordered">
                                  <span className="vendor-price">
                                    ${ven.package_price}
                                  </span>
                                  <span className="vendor-text">
                                    Start From
                                  </span>
                                </div>
                                <div className="vendor-meta-item vendor-meta-item-bordered">
                                  <span className="vendor-guest">120+</span>
                                  <span className="vendor-text">Guest</span>
                                </div>
                                <div className="vendor-meta-item vendor-meta-item-bordered">
                                  <span className="rating-star">
                                    <i className="fa fa-star rated" />
                                    <i className="fa fa-star rated" />
                                    <i className="fa fa-star rated" />
                                    <i className="fa fa-star rated" />
                                    <i className="fa fa-star rate-mute" />
                                  </span>
                                  <span className="rating-count vendor-text">
                                    (20)
                                  </span>
                                </div>
                              </div>
                              {/* /.Vendor Content */}
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })}

                  {/* /.Vendor thumbnail */}
                  {/* Vendor thumbnail */}
                  {/* Vendor img */}
                  <div className="vendor-thumbnail list-view">
                    <div className="row">
                      <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 border-right pr-0">
                        <div className="vendor-img">
                          <Link to="/samplepage">
                            <div className="zooming">
                              <img
                                src="images/vendor-img-2.jpg"
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                          </Link>
                          <div className="wishlist-sign">
                            <Link to="/samplepage" className="btn-wishlist">
                              <i className="fa fa-heart" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 pl-0">
                        <div className="vendor-content">
                          <h2 className="vendor-title">
                            <Link to="/samplepage" className="title">
                              Wedding Venue Title Name
                            </Link>
                          </h2>
                          <p className="vendor-address">Mumbai, India.</p>
                        </div>
                        <div className="vendor-meta m-0">
                          <div className="vendor-meta-item vendor-meta-item-bordered">
                            <span className="vendor-price">$150</span>
                            <span className="vendor-text">Start From</span>
                          </div>
                          <div className="vendor-meta-item vendor-meta-item-bordered">
                            <span className="vendor-guest">120+</span>
                            <span className="vendor-text">Guest</span>
                          </div>
                          <div className="vendor-meta-item vendor-meta-item-bordered">
                            <span className="rating-star">
                              <i className="fa fa-star rated" />
                              <i className="fa fa-star rated" />
                              <i className="fa fa-star rated" />
                              <i className="fa fa-star rated" />
                              <i className="fa fa-star rate-mute" />
                            </span>
                            <span className="rating-count vendor-text">
                              (20)
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /.Vendor Content */}
                  {/* /.Vendor thumbnail */}
                  {/* <div className="vendor-thumbnail list-view">
                    
                    <div className="row">
                      <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 border-right pr-0">
                        <div className="vendor-img">
                         
                          <Link to="/samplepage">
                            <div className="zooming">
                              <img
                                src="images/vendor-img-3.jpg"
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                          </Link>
                          <div className="wishlist-sign">
                            <Link to="/samplepage" className="btn-wishlist">
                              <i className="fa fa-heart" />
                            </Link>
                          </div>
                        </div>
                      </div>
                   
                      <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 pl-0">
                        <div className="vendor-content">
                     
                          <h2 className="vendor-title">
                            <Link to="samplepage" className="title">
                              Wedding Venue Title Name
                            </Link>
                          </h2>
                          <p className="vendor-address">Jaipur, Rajasthan.</p>
                        </div>
                        <div className="vendor-meta m-0">
                          <div className="vendor-meta-item vendor-meta-item-bordered">
                            <span className="vendor-price">$150</span>
                            <span className="vendor-text">Start From</span>
                          </div>
                          <div className="vendor-meta-item vendor-meta-item-bordered">
                            <span className="vendor-guest">120+</span>
                            <span className="vendor-text">Guest</span>
                          </div>
                          <div className="vendor-meta-item vendor-meta-item-bordered">
                            <span className="rating-star">
                              <i className="fa fa-star rated" />
                              <i className="fa fa-star rated" />
                              <i className="fa fa-star rated" />
                              <i className="fa fa-star rated" />
                              <i className="fa fa-star rate-mute" />
                            </span>
                            <span className="rating-count vendor-text">
                              (20)
                            </span>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                    
                  </div> */}
                  {/* <div className="vendor-thumbnail list-view">
                    <div className="row">
                      
                      <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 border-right pr-0">
                        <div className="vendor-img">
                          
                          <Link to="/samplepage">
                            <div className="zooming">
                              <img
                                src="images/vendor-img-4.jpg"
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                          </Link>
                          <div className="wishlist-sign">
                            <Link to="/samplepage" className="btn-wishlist">
                              <i className="fa fa-heart" />
                            </Link>
                          </div>
                        </div>
                      </div>
                     
                      <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 pl-0">
                        <div className="vendor-content m-0">
                          
                          <h2 className="vendor-title">
                            <Link to="/samplepage" className="title">
                              Wedding Venue Title Name
                            </Link>
                          </h2>
                          <p className="vendor-address">Baroda, Gujarat.</p>
                        </div>
                        
                        <div className="vendor-meta">
                          <div className="vendor-meta-item vendor-meta-item-bordered">
                            <span className="vendor-price">$150</span>
                            <span className="vendor-text">Start From</span>
                          </div>
                          <div className="vendor-meta-item vendor-meta-item-bordered">
                            <span className="vendor-guest">120+</span>
                            <span className="vendor-text">Guest</span>
                          </div>
                          <div className="vendor-meta-item vendor-meta-item-bordered">
                            <span className="rating-star">
                              <i className="fa fa-star rated" />
                              <i className="fa fa-star rated" />
                              <i className="fa fa-star rated" />
                              <i className="fa fa-star rated" />
                              <i className="fa fa-star rate-mute" />
                            </span>
                            <span className="rating-count vendor-text">
                              (20)
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div> */}
                  {/* paginations */}
                  <div className="pagination">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination">
                        <li className="page-item">
                          <a className="page-link" href="#">
                            Previous
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link " href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            Next
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  {/* /.paginations */}
                </div>
                {/* sidebar-section */}
                <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12">
                  <div className="filter-form">
                    <form className="form-row">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h3 className="widget-title">filter</h3>
                      </div>
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <select className="wide">
                          <option value="Venue Type">Venue Type</option>
                          <option value="Hotel">Hotel</option>
                          <option value="Restaurant">Restaurant</option>
                          <option value="Castle">Castle</option>
                          <option value="Barns">Barns</option>
                          <option value="Resort">Resort</option>
                          <option value="Church">Church</option>
                          <option value="In Door">In Door</option>
                        </select>
                      </div>
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <select className="wide">
                          <option value="Guest">Guest</option>
                          <option value="1 - 100">1 - 100</option>
                          <option value="1 - 200">100 - 200</option>
                          <option value="1 - 500">200 - 500</option>
                          <option value="1 - 1000">500 - 1000</option>
                        </select>
                      </div>
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <select className="wide">
                          <option value="Price">Price</option>
                          <option value="$100 tp $500">$100 to $500</option>
                          <option value="$500 tp $2000">$500 to $2000</option>
                          <option value="$2000 tp $3500">$2000 to $3500</option>
                          <option value="$3500 tp $4500">$3500 to $4500</option>
                          <option value="$4500 tp $5500">$4500 to $5500</option>
                        </select>
                      </div>
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb20">
                        {/* aminites */}
                        <div className="aminities">
                          <h3 className="widget-title"> Amenities</h3>
                          {/* checkbox */}
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck1"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck1"
                            >
                              {" "}
                              Groom Lounge
                            </label>
                          </div>
                          {/* checkbox */}
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck2"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck2"
                            >
                              {" "}
                              Bridal Suite
                            </label>
                          </div>
                          {/* checkbox */}
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck3"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck3"
                            >
                              Table and chairs
                            </label>
                          </div>
                          {/* checkbox */}
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck4"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck4"
                            >
                              {" "}
                              Get Ready Rooms
                            </label>
                          </div>
                          {/* checkbox */}
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck5"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck5"
                            >
                              Event Rentals
                            </label>
                          </div>
                          {/* checkbox */}
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck6"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck6"
                            >
                              Outside Vendors
                            </label>
                          </div>
                          {/* checkbox */}
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck7"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck7"
                            >
                              {" "}
                              Bar Services
                            </label>
                          </div>
                          {/* checkbox */}
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck8"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck8"
                            >
                              {" "}
                              Catering Services
                            </label>
                          </div>
                          {/* checkbox */}
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck9"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck9"
                            >
                              {" "}
                              Clean Up
                            </label>
                          </div>
                          {/* checkbox */}
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck10"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck10"
                            >
                              Event Planner
                            </label>
                          </div>
                          {/* checkbox */}
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck11"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck11"
                            >
                              Wifi
                            </label>
                          </div>
                          {/* checkbox */}
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck12"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck12"
                            >
                              Pet Friendly
                            </label>
                          </div>
                          {/* checkbox */}
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck13"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck13"
                            >
                              Accommodations
                            </label>
                          </div>
                        </div>
                        {/* /.aminites */}
                      </div>
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <button
                          className="btn btn-default btn-block"
                          type="submit"
                        >
                          Find Venue
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* /.sidebar-section */}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </Fragment>
    );
  } else {
    return <Photo params={params.id} />;
  }
};

const mapStateToProps = (state) => {
  return {
    vendor: state.vendor.vendor,
    vendortype: state.vendortype.vendortype,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onVendorGetData: () => dispatch(actions.vendorGetData()),
  onVendortypeGetData: () => dispatch(actions.vendortypeGetData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cat2);
