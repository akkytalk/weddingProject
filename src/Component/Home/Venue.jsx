/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../reduxStore/actions/index";
const Venue = (props) => {
  useEffect(() => {
    props.onVendorGetData();
    props.onVendortypeGetData();
    console.log("vendor data", props.vendor);
    console.log("vendor type data", props.vendortype);
  }, []);

  const [viewCount] = useState(6);

  return (
    <Fragment>
      <div className="space-medium bg-white">
        <div className="container">
          <div className="row">
            <div className="offset-xl-2 col-xl-8 offset-lg-2 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="section-title text-center">
                {/* section title start*/}
                <h2 className="mb10">Browse Vendors by Category</h2>
                <p>
                  You can browse all venues by category with thumbnail image and
                  category name.
                </p>
              </div>
              {/* /.section title start*/}
            </div>
          </div>
          <div className="row">
            {/* venue-categoris-block*/}

            {props.vendortype.slice(0, viewCount).map((ven) => (
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="vendor-categories-block zoomimg">
                  <div className="vendor-categories-img">
                    {" "}
                    <Link to={`category/${ven.id}`}>
                      <img
                        src={ven.image_url}
                        // src={`https://source.unsplash.com/1600x900/?${ven.name}`}
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="vendor-categories-overlay">
                    <div className="vendor-categories-text">
                      <h4 className="mb0">
                        <Link
                          href={`category/${ven.id}`}
                          className="vendor-categories-title"
                        >
                          {ven.name}
                        </Link>
                      </h4>
                      <p className="vendor-categories-numbers">
                        {ven.name.length}
                      </p>
                    </div>
                  </div>
                </div>
                {/* /.venue-categoris-block*/}
              </div>
            ))}
            {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="vendor-categories-block zoomimg">
                <div className="vendor-categories-img">
                  {" "}
                  <Link to="/category">
                    <img
                      src="images/vendor-cat-img-1.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="vendor-categories-overlay">
                  <div className="vendor-categories-text">
                    <h4 className="mb0">
                      <Link to="/category" className="vendor-categories-title">
                        Wedding Venues
                      </Link>
                    </h4>
                    <p className="vendor-categories-numbers">5</p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* /.venue-categoris-block*/}
            {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="vendor-categories-block zoomimg">
                <div className="vendor-categories-img">
                  {" "}
                  <Link to="/photos">
                    <img
                      src="images/vendor-cat-img-2.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="vendor-categories-overlay">
                  <div className="vendor-categories-text">
                    <h4 className="mb0">
                      <Link to="/photos" className="vendor-categories-title">
                        Photographers
                      </Link>
                    </h4>
                    <p className="vendor-categories-numbers">12</p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* /.venue-categoris-block*/}
            {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="vendor-categories-block zoomimg">
                <div className="vendor-categories-img">
                  {" "}
                  <Link to="/florist">
                    <img
                      src="images/vendor-cat-img-3.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="vendor-categories-overlay">
                  <div className="vendor-categories-text">
                    <h4 className="mb0">
                      <Link to="/florist" className="vendor-categories-title">
                        Florist
                      </Link>
                    </h4>
                    <p className="vendor-categories-numbers">14</p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* /.venue-categoris-block*/}
            {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="vendor-categories-block zoomimg">
                <div className="vendor-categories-img">
                  {" "}
                  <Link to="/Makeup">
                    <img
                      src="images/vendor-cat-img-4.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="vendor-categories-overlay">
                  <div className="vendor-categories-text">
                    <h4 className="mb0">
                      <Link to="/Makeup" className="vendor-categories-title">
                        Wedding Makeup
                      </Link>
                    </h4>
                    <p className="vendor-categories-numbers">2</p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* /.venue-categoris-block*/}
            {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="vendor-categories-block zoomimg">
                <div className="vendor-categories-img">
                  {" "}
                  <Link to="/dj">
                    <img
                      src="images/vendor-cat-img-5.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="vendor-categories-overlay">
                  <div className="vendor-categories-text">
                    <h4 className="mb0">
                      <Link to="/dj" className="vendor-categories-title">
                        Wedding Band
                      </Link>
                    </h4>
                    <p className="vendor-categories-numbers">10</p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* /.venue-categoris-block*/}
            {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="vendor-categories-block zoomimg">
                <div className="vendor-categories-img">
                  {" "}
                  <Link to="/photos">
                    <img
                      src="images/vendor-cat-img-6.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="vendor-categories-overlay">
                  <div className="vendor-categories-text">
                    <h4 className="mb0">
                      <Link to="/photos" className="vendor-categories-title">
                        Videography
                      </Link>
                    </h4>
                    <p className="vendor-categories-numbers">9</p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* /.venue-categoris-block*/}
          </div>
          {/* venue-categoris-btn */}
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center mt20">
              <Link to="/vendorprofile" className="btn btn-primary btn-lg">
                Browse all category
              </Link>
            </div>
          </div>
          {/* /.venue-categoris-btn */}
        </div>
      </div>
      {/* /.venue-categoris-section*/}
      <div className="space-medium">
        <div className="container-fluid">
          <div className="row">
            <div className="offset-xl-2 col-xl-8 offset-lg-2 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="section-title text-center">
                {/* section title start*/}
                <h2 className="mb10">Our Trusted Vendor</h2>
              </div>
              {/* /.section title start*/}
            </div>
          </div>
          <div className="venue-thumbnail-carousel">
            <div className="owl-carousel owl-theme owl-venue-thumb">
              <div className="item">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="vendor-thumbnail">
                    {/* Vendor thumbnail */}
                    <div className="vendor-img zoomimg">
                      {/* Vendor img */}
                      <a href="#">
                        <img
                          src="images/vendor-img-1.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                      <div className="wishlist-sign">
                        <a href="#" className="btn-wishlist">
                          <i className="fa fa-heart" />
                        </a>
                      </div>
                    </div>
                    {/* /.Vendor img */}
                    <div className="vendor-content">
                      {/* Vendor Content */}
                      <h2 className="vendor-title">
                        <a href="#" className="title">
                          Wedding Venue Title Name
                        </a>
                      </h2>
                      <p className="vendor-address">
                        <span className="vendor-address-icon">
                          <i className="fa fa-map-marker-alt" />{" "}
                        </span>{" "}
                        Ahmedabad, Gujarat.
                      </p>
                    </div>
                    {/* /.Vendor Content */}
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
                        <span className="rating-count vendor-text">(20)</span>
                      </div>
                    </div>
                  </div>
                  {/* /.Vendor thumbnail */}
                </div>
              </div>
              <div className="item">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="vendor-thumbnail">
                    {/* Vendor thumbnail */}
                    <div className="vendor-img zoomimg">
                      {/* Vendor img */}
                      <a href="#">
                        <img
                          src="images/vendor-img-2.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                      <div className="wishlist-sign">
                        <a href="#" className="btn-wishlist">
                          <i className="fa fa-heart" />
                        </a>
                      </div>
                    </div>
                    {/* /.Vendor img */}
                    <div className="vendor-content">
                      {/* Vendor Content */}
                      <h2 className="vendor-title">
                        <a href="#" className="title">
                          Wedding Venue Title Name
                        </a>
                      </h2>
                      <p className="vendor-address">
                        <span className="vendor-address-icon">
                          <i className="fa fa-map-marker-alt" />{" "}
                        </span>{" "}
                        Baroda, Gujarat.
                      </p>
                    </div>
                    {/* /.Vendor Content */}
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
                        <span className="rating-count vendor-text">(20)</span>
                      </div>
                    </div>
                  </div>
                  {/* /.Vendor thumbnail */}
                </div>
              </div>
              <div className="item">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="vendor-thumbnail">
                    {/* Vendor thumbnail */}
                    <div className="vendor-img zoomimg">
                      {/* Vendor img */}
                      <a href="#">
                        <img
                          src="images/vendor-img-3.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                      <div className="wishlist-sign">
                        <a href="#" className="btn-wishlist">
                          <i className="fa fa-heart" />
                        </a>
                      </div>
                    </div>
                    {/* /.Vendor img */}
                    <div className="vendor-content">
                      {/* Vendor Content */}
                      <h2 className="vendor-title">
                        <a href="#" className="title">
                          Wedding Venue Title Name
                        </a>
                      </h2>
                      <p className="vendor-address">
                        <span className="vendor-address-icon">
                          <i className="fa fa-map-marker-alt" />{" "}
                        </span>{" "}
                        Bharuch, Gujarat.
                      </p>
                    </div>
                    {/* /.Vendor Content */}
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
                        <span className="rating-count vendor-text">(20)</span>
                      </div>
                    </div>
                  </div>
                  {/* /.Vendor thumbnail */}
                </div>
              </div>
              <div className="item">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="vendor-thumbnail">
                    {/* Vendor thumbnail */}
                    <div className="vendor-img zoomimg">
                      {/* Vendor img */}
                      <a href="#">
                        <img
                          src="images/vendor-img-2.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                      <div className="wishlist-sign">
                        <a href="#" className="btn-wishlist">
                          <i className="fa fa-heart" />
                        </a>
                      </div>
                    </div>
                    {/* /.Vendor img */}
                    <div className="vendor-content">
                      {/* Vendor Content */}
                      <h2 className="vendor-title">
                        <a href="#" className="title">
                          Wedding Venue Title Name
                        </a>
                      </h2>
                      <p className="vendor-address">
                        <span className="vendor-address-icon">
                          <i className="fa fa-map-marker-alt" />{" "}
                        </span>{" "}
                        Morbi, Gujarat.
                      </p>
                    </div>
                    {/* /.Vendor Content */}
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
                        <span className="rating-count vendor-text">(20)</span>
                      </div>
                    </div>
                  </div>
                  {/* /.Vendor thumbnail */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /. venue-thumbnail-section*/}
      <div className="process-section">
        <div className="container">
          <div className="row">
            <div className="offset-xl-2 col-xl-8 offset-lg-2 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="section-title text-center">
                {/* section title start*/}
                <h2 className="mb10 text-white">How it Work</h2>
                <p className="text-white">
                  Find, shortlist, get free quotes and book vendors
                  conveniently.{" "}
                </p>
              </div>
              {/* /.section title start*/}
            </div>
          </div>
          <div className="row">
            {/* feature-1 */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 text-center text-white">
              <div className="feature">
                <div className="feature-icon icon-circle circle-xxl circle-transparent bg-transparent text-default mr-auto ml-auto ">
                  <i className="icon-013-calendar fa-3x" />
                  <div className="process-number">
                    <div className="feature-icon icon-circle circle-sm circle-transparent bg-trasnperent text-default p-0">
                      1
                    </div>
                  </div>
                </div>
                <div className="feature-content mt30">
                  <h3 className="text-white">Browse Vendor</h3>
                  <p>
                    Duis ultrices tincidunt augue, sit amet ultrices mi cursus
                    ut. Susperetra nunc.{" "}
                  </p>
                </div>
              </div>
            </div>
            {/* feature-1 */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 text-center text-white">
              <div className="feature">
                <div className="feature-icon icon-circle circle-xxl circle-transparent bg-transparent text-default mr-auto ml-auto ">
                  <i className="icon-026-letter fa-3x" />
                  <div className="process-number">
                    <div className="feature-icon icon-circle circle-sm circle-transparent bg-transparent text-default p-0">
                      2
                    </div>
                  </div>
                </div>
                <div className="feature-content mt30">
                  <h3 className="text-white">Request Quote</h3>
                  <p>
                    Curabitur eget tempus orci, sit ametnterdum a dolor quis,
                    ornare malesuada mi.{" "}
                  </p>
                </div>
              </div>
            </div>
            {/* feature-1 */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 text-center text-white">
              <div className="feature">
                <div className="feature-icon icon-circle circle-xxl circle-transparent bg-transparent text-default mr-auto ml-auto ">
                  <i className="icon-046-crown fa-3x" />
                  <div className="process-number">
                    <div className="feature-icon icon-circle circle-sm circle-transparent bg-transparent text-default p-0">
                      3
                    </div>
                  </div>
                </div>
                <div className="feature-content mt30">
                  <h3 className="text-white">Book A Vendor</h3>
                  <p>
                    Phasellus fringilla convallis mitegeregestas. Aenean sit
                    amet imperdiet dui.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    vendor: state.vendor.vendor,
    vendortype: state.vendortype.vendortype,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onVendorGetData: () => dispatch(actions.vendorGetData()),
    onVendortypeGetData: () => dispatch(actions.vendortypeGetData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Venue);
