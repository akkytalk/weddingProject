/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import Image from "../../Image";
import Footer from "./Footer";
import * as actions from "../../reduxStore/actions";
import Header from "./Header";
import { connect } from "react-redux";

const Category = (props) => {
  const params = useParams();

  console.log("params", params);

  useEffect(() => {
    props.onVendorGetData();
    props.onVendortypeGetData();
  }, []);

  const [vendorUser, setVendorUser] = useState([]);

  useEffect(() => {
    props.vendor.map((ven) => {
      if (ven.id == params.id) {
        console.log("hii successful");
        setVendorUser(ven);
      }
    });
  }, []);

  console.log("vendor user", vendorUser);

  return (
    <Fragment>
      <Header />
      <Image />
      {/*  */}
      <div>
        <div className="list-single-carousel">
          <div className="owl-carousel owl-theme owl-slider">
            <div className="item">
              <img src="images/listsingle-slider-img-1.jpg" alt="" />
            </div>
            <div className="item">
              <img src="images/listsingle-slider-img-2.jpg" alt="" />
            </div>
            <div className="item">
              <img src="images/listsingle-slider-img-3.jpg" alt="" />
            </div>
            <div className="item">
              <img src="images/listsingle-slider-img-4.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className="list-single-second">
          <div className="container">
            <div className>
              <div className="row">
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                  <div className="vendor-head text-left">
                    <h2 className="mb10">Vendor Details</h2>
                    <p className="vendor-address">
                      {/* <a href="#location" className="btn-secondary-link ml-2">
                        View Map
                      </a>{" "} */}
                    </p>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="vendor-head text-xl-right">
                    <a href="#" className="btn-default-wishlist">
                      <i className="fa fa-heart" />{" "}
                      <span className="pl-1">Add To Wishlist</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="vendor-meta bg-white border m-0 ">
              <div className="vendor-meta-item vendor-meta-item-bordered">
                <span className="vendor-price">
                  ${vendorUser.package_price}
                </span>
                <span className="vendor-text">Start From</span>
              </div>
              <div className="vendor-meta-item vendor-meta-item-bordered">
                <span className="vendor-guest">1120+</span>
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
        </div>
        <div className="vendor-content-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8 col-md-7 col-sm-12 col-12">
                {/*vendor-details */}
                <div className>
                  {/*vendor-description */}
                  {/* aminities-block */}

                  {/* /.review-block */}
                  <div className="card border card-shadow-none ">
                    {/* review-user */}
                    <div className="card-header bg-white mb0">
                      <div className="review-user">
                        <div className="user-img">
                          {" "}
                          <img
                            src={vendorUser.photographs}
                            style={{ height: "50px", width: "50px" }}
                            alt="star rating jquery"
                            className="rounded-circle"
                          />
                        </div>
                        <div className="user-meta">
                          <h5 className="user-name mb-0">
                            {vendorUser.name}{" "}
                            <span className="user-review-date">
                              14 May, 2018
                            </span>
                          </h5>
                          <div className="given-review">
                            <span className="rated">
                              <i className="fa fa-star" />{" "}
                              <i className="fa fa-star" />{" "}
                              <i className="fa fa-star" />{" "}
                              <i className="far  fa-star" />{" "}
                              <i className="far  fa-star" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /.review-user */}
                    <div className="card-body">
                      {/* review-descripttions */}
                      <div className="review-descriptions">
                        <p>
                          Morbi pharetra mollis tortor ac maximus. Nunc dapibus
                          bibendum urna, in egestas dolor. Class aptent taciti
                          sociosqu ad litora torquent per conubia nostra.Fusce
                          ullamcorper sit amet augue a volutpat. Cras ultrices
                          dictum ante vel iaculis.Donec accumsan consequat massa
                          non gravida. Aenean molestie molestie elementum.
                          Nullam semper vel mauris et semper.{" "}
                        </p>
                      </div>
                      {/* /.review-descripttions */}
                    </div>
                  </div>
                </div>

                {/* form */}
                {/* /form */}
                <div className="card border card-shadow-none leave-review">
                  <div className="card-header bg-white mb0">
                    <h3 className="mb0">Write Your Reviews</h3>
                  </div>
                  <div className="card-body">
                    <div className="review-rating-select">
                      <div className="mb10">
                        <span className="text-dark">Quality Service</span>
                        <span id="rateYo1" />
                      </div>
                      <div className="mb10">
                        <span className="text-dark">Facilities</span>
                        <span id="rateYo2" />
                      </div>
                      <div className="mb10">
                        <span className="text-dark">Staff</span>
                        <span id="rateYo3" />
                      </div>
                      <div className="mb10">
                        <span className="text-dark">Flexibility</span>
                        <span id="rateYo4" />
                      </div>
                      <div className="mb10">
                        <span className="text-dark">Value of money</span>
                        <span id="rateYo5" />
                      </div>
                    </div>
                    <form>
                      <div className="row">
                        {/* Textarea */}
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt30">
                          <div className="form-group">
                            <label className="control-label" htmlFor="review">
                              Write Your Review
                            </label>
                            <textarea
                              className="form-control"
                              id="review"
                              name="review"
                              rows={5}
                              placeholder="Write Review"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        {/* Text input*/}
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="form-group">
                            <label className="control-label" htmlFor="name">
                              Name
                            </label>
                            <input
                              id="name"
                              name="name"
                              type="text"
                              placeholder="Name"
                              className="form-control input-md"
                              required
                            />
                          </div>
                        </div>
                        {/* Text input*/}
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="form-group">
                            <label className="control-label" htmlFor="email">
                              Email
                            </label>
                            <input
                              id="email"
                              name="email"
                              type="text"
                              placeholder="Email"
                              className="form-control input-md"
                              required
                            />
                          </div>
                        </div>
                        {/* Button */}
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="form-group">
                            <button
                              id="submit"
                              name="submit"
                              className="btn btn-default"
                            >
                              Submit review
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/* /.review-form */}
                {/* location */}
                {/* <div className="card border card-shadow-none">
                  <div className="card-header bg-white mb0">
                    <h3 className="mb0">Location - Map</h3>
                  </div>
                  <div className="card-body">
                    <div id="map" />
                  </div>
                </div> */}
              </div>
              {/* /.location */}
              {/* list-sidebar */}
              <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12">
                <div className="sidebar-venue">
                  <div className="card">
                    <div className="card-body">
                      <form>
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <h3 className="mb20">Request Quote</h3>
                          </div>
                          {/* Text input*/}
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="form-group">
                              <label
                                className="control-label sr-only"
                                htmlFor="name1"
                              >
                                Name
                              </label>
                              <input
                                id="name1"
                                name="name1"
                                type="text"
                                placeholder="Name"
                                className="form-control input-md"
                                required
                              />
                            </div>
                          </div>
                          {/* Text input*/}
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="form-group">
                              <label
                                className=" control-label sr-only"
                                htmlFor="email2"
                              >
                                Email
                              </label>
                              <input
                                id="email2"
                                name="email2"
                                type="text"
                                placeholder="Email"
                                className="form-control input-md"
                                required
                              />
                            </div>
                          </div>
                          {/* Text input*/}
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="form-group">
                              <label
                                className=" control-label sr-only"
                                htmlFor="phone"
                              >
                                Phone
                              </label>
                              <input
                                id="phone"
                                name="phone"
                                type="text"
                                placeholder="Phone"
                                className="form-control input-md"
                                required
                              />
                            </div>
                          </div>
                          {/* Text input*/}
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="form-group">
                              <label
                                className="control-label sr-only"
                                htmlFor="weddingdate"
                              >
                                Wedding Date
                              </label>
                              <input
                                id="weddingdate"
                                name="weddingdate"
                                type="text"
                                placeholder="Wedding Date"
                                className="form-control input-md"
                                required
                              />
                              <div className="venue-form-calendar">
                                <i className="far fa-calendar-alt" />
                              </div>
                            </div>
                          </div>
                          {/* Textarea */}
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="form-group">
                              <label
                                className="control-label sr-only"
                                htmlFor="comments"
                              >
                                Comment
                              </label>
                              <textarea
                                className="form-control"
                                id="comments"
                                name="comments"
                                rows={5}
                                placeholder="Write Comment"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="form-group">
                              <button
                                type="submit"
                                className="btn btn-default btn-block"
                              >
                                Submit Quote
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* venue-admin */}
                  {/* <div className="vendor-owner-profile mb30">
                    <div className="vendor-owner-profile-head">
                      <div className="vendor-owner-profile-img">
                        <img
                          src="images/admin-pic.jpg"
                          className="rounded-circle"
                          alt=""
                        />
                      </div>
                      <h4 className="vendor-owner-name mb0">
                        Roberto F. McGill
                      </h4>
                    </div>
                    <div className="vendor-owner-profile-content">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <span className="mr-2 text-default">
                            <i className="fas fa-fw fa-map-marker-alt" />
                          </span>
                          1847 Providence Lane Alhambra, CA 91801
                        </li>
                        <li className="list-group-item">
                          <span className="mr-2  text-default">
                            <i className="fas fa-fw fa-phone" />
                          </span>
                          (123) 123 4567
                        </li>
                        <li className="list-group-item">
                          <span className="mr-2 text-default">
                            <i className="fas fa-fw fa-envelope" />
                          </span>
                          www.yourdomain.com
                        </li>
                      </ul>
                    </div>
                  </div> */}
                  {/* /.venue-admin */}
                  {/* social-media */}
                  <div className="mb30">
                    <h4 className="widget-title">Share this </h4>
                    <div className="social-icons">
                      <a
                        href="#"
                        className="icon-square-outline facebook-outline"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        href="#"
                        className="icon-square-outline twitter-outline"
                      >
                        <i className="fab fa-twitter" />{" "}
                      </a>
                      <a
                        href="#"
                        className="icon-square-outline googleplus-outline"
                      >
                        <i className="fab fa-google-plus-g" />
                      </a>
                      <a
                        href="#"
                        className="icon-square-outline instagram-outline"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                      <a
                        href="#"
                        className="icon-square-outline linkedin-outline"
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a
                        href="#"
                        className="icon-square-outline pinterest-outline"
                      >
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </div>
                  </div>
                  {/* /.social-media */}
                </div>
              </div>
            </div>
            {/* /.list-sidebar */}
          </div>
        </div>
        {/* vendor-thumbnail section */}
      </div>
      {/*  */}
      <Footer />
    </Fragment>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(Category);
