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
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    "& > * + *": {
      marginTop: theme.spacing(1),
    },
  },
}));

const Category = (props) => {
  const params = useParams();
  const classes = useStyles();
  console.log("params", params);

  const [vendor, setVendor] = useState([]);

  useEffect(() => {
    props.onVendorGetData();
    props.onVendortypeGetData();
    props.editVendorRow(params.id, vendor, setVendor);
  }, []);

  const [vendorUser, setVendorUser] = useState([]);
  useEffect(() => {
    props.vendor.map((ven) => {
      if (ven.id == params.id) {
        // console.log("hii successful");
        setVendorUser(ven);
      }
    });
  }, []);

  const [user, setUser] = useState({
    vendor_name: props.editVendor?.name,
    vendor_type_id: props.editVendor?.vendor_type?.id,
    user_name: "",
    review: "",
    rating: "",
  });

  const [user2, setUser2] = useState({
    vendor_name: props.editVendor?.name,
    vendor_type_name: props.editVendor?.vendor_type?.name,
    user_name: "",
    phone: "",
    booking_date: "",
    remarks: "",
    status: 0,
    entered_by: "user",
  });

  const [user3, setUser3] = useState({
    vendor_name: props.editVendor?.name,
    vendor_type_name: props.editVendor?.vendor_type?.name,
    user_name: "",
    phone: "",
    booking_date: "",
    remarks: "",
    status: 1,
    entered_by: "user",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleInputChange2 = (event) => {
    const { name, value } = event.target;
    setUser2({ ...user2, [name]: value });
  };

  const handleInputChange3 = (event) => {
    const { name, value } = event.target;
    setUser3({ ...user3, [name]: value });
  };
  async function handleSubmit(e) {
    e.preventDefault();
    let data = {
      vendor_name: props.editVendor?.name,
      vendor_type_id: props.editVendor?.vendor_type?.id,
      user_name: user.user_name,
      review: user.review,
      rating: user.rating,
    };

    console.log("user", data);

    props.onPostReviewData(data);
  }

  async function handleSubmit2(e) {
    e.preventDefault();

    let user = {
      vendor_name: props.editVendor?.name,
      vendor_type_name: props.editVendor?.vendor_type?.name,
      user_name: user2.user_name,
      phone: user2.phone,
      booking_date: user2.booking_date,
      remarks: user2.remarks,
      status: 0,
      entered_by: "user",
    };

    console.log("user", user);

    props.postMyBookingData(user);
  }

  async function handleSubmit3(e) {
    e.preventDefault();

    let user = {
      vendor_name: props.editVendor?.name,
      vendor_type_name: props.editVendor?.vendor_type?.name,
      user_name: user3.user_name,
      phone: user3.phone,
      booking_date: user3.booking_date,
      remarks: user3.remarks,
      status: 1,
      entered_by: "user",
    };

    console.log("user", user);

    props.postMyBookingData(user);
  }
  console.log("user", user);
  console.log("user2", user2);
  console.log("user3", user3);

  return (
    <Fragment>
      <Header />
      <Image />
      {/*  */}
      <div>
        {/* <div className="list-single-carousel">
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
        </div> */}

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
                  {/* <div className="vendor-head text-xl-right">
                    <a href="" className="btn-default-wishlist">
                      <i className="fa fa-heart" />{" "}
                      <span className="pl-1">Add To Wishlist</span>
                    </a>
                  </div> */}
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
                  <Rating
                    name="half-rating-read"
                    defaultValue={
                      props.editVendor?.rating ? props.editVendor?.rating : 0
                    }
                    precision={0.1}
                    readOnly
                  />

                  {/* <i className="fa fa-star rated" />
                  <i className="fa fa-star rated" />
                  <i className="fa fa-star rated" />
                  <i className="fa fa-star rated" />
                  <i className="fa fa-star rate-mute" /> */}
                </span>
                <span className="rating-count vendor-text">
                  (
                  {props.editVendor?.no_reviews
                    ? props.editVendor?.no_reviews
                    : 0}
                  )
                </span>
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
                            src={
                              vendorUser.photographs
                                ? `https://uditsolutions.in/mogachetest/storage/app/public/files/${vendorUser.photographs}`
                                : "https://icon-library.com/images/no-profile-picture-icon/no-profile-picture-icon-21.jpg"
                            }
                            style={{ height: "50px", width: "50px" }}
                            alt=""
                            className="rounded-circle"
                          />
                        </div>
                        <div className="user-meta">
                          <h5 className="user-name mb-0">
                            {vendorUser.name}{" "}
                            {/* <span className="user-review-date">
                              14 May, 2018
                            </span> */}
                          </h5>
                          <div className="given-review">
                            <span className="rated">
                              <Rating
                                name="half-rating-read"
                                defaultValue={
                                  props.editVendor?.rating
                                    ? props.editVendor?.rating
                                    : 0
                                }
                                precision={0.1}
                                readOnly
                                size="small"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /.review-user */}
                    <div className="card-body">
                      {/* review-descripttions */}
                      <div className="review-descriptions">
                        <p>{vendorUser.about}</p>
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
                    <form onSubmit={handleSubmit}>
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
                              value={user.review}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        {/* Text input*/}
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="form-group">
                            <label
                              className="control-label"
                              htmlFor="user_name"
                            >
                              Name
                            </label>
                            <input
                              id="user_name"
                              name="user_name"
                              type="text"
                              placeholder="Name"
                              value={user.user_name}
                              onChange={handleInputChange}
                              className="form-control input-md"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 vh-100 w-100">
                          <div className="form-group">
                            <label
                              className="control-label"
                              htmlFor="user_name"
                            >
                              Give Rating
                            </label>
                            <div className={classes.root}>
                              <Rating
                                name="rating"
                                size="large"
                                type="number"
                                typeof="number"
                                //value={user.rating}
                                onChange={handleInputChange}
                              />
                              {/* <Rating
                            name="half-rating-read"
                            defaultValue={2.4}
                            precision={0.1}
                            readOnly
                          /> */}
                            </div>
                          </div>
                        </div>
                        {/* Text input*/}
                        {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
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
                        </div> */}
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
                      <form onSubmit={handleSubmit2}>
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <h3 className="mb20">Request Quote</h3>
                          </div>
                          {/* Text input*/}
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="form-group">
                              <label
                                className="control-label sr-only"
                                htmlFor="user_name"
                              >
                                Name
                              </label>
                              <input
                                id="user_name"
                                name="user_name"
                                type="text"
                                placeholder="Name"
                                value={user2.user_name}
                                onChange={handleInputChange2}
                                className="form-control input-md"
                                required
                              />
                            </div>
                          </div>

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
                                type="number"
                                value={user2.phone}
                                onChange={handleInputChange2}
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
                                htmlFor="booking_date"
                              >
                                Wedding Date
                              </label>
                              <input
                                id="booking_date"
                                name="booking_date"
                                type="date"
                                value={user2.booking_date}
                                onChange={handleInputChange2}
                                placeholder="Wedding Date"
                                className="form-control input-md"
                                required
                              />
                              {/* <div className="venue-form-calendar">
                                <i className="far fa-calendar-alt" />
                              </div> */}
                            </div>
                          </div>
                          {/* Textarea */}
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="form-group">
                              <label
                                className="control-label sr-only"
                                htmlFor="remarks"
                              >
                                Comment
                              </label>
                              <textarea
                                className="form-control"
                                id="remarks"
                                name="remarks"
                                rows={5}
                                value={user2.remarks}
                                onChange={handleInputChange2}
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

                  <div className="card">
                    <div className="card-body">
                      <form onSubmit={handleSubmit3}>
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <h3 className="mb20">Book Now</h3>
                          </div>
                          {/* Text input*/}
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="form-group">
                              <label
                                className="control-label sr-only"
                                htmlFor="user_name"
                              >
                                Name
                              </label>
                              <input
                                id="user_name"
                                name="user_name"
                                type="text"
                                placeholder="Name"
                                value={user3.user_name}
                                onChange={handleInputChange3}
                                className="form-control input-md"
                                required
                              />
                            </div>
                          </div>

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
                                type="number"
                                value={user3.phone}
                                onChange={handleInputChange3}
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
                                htmlFor="booking_date"
                              >
                                Wedding Date
                              </label>
                              <input
                                id="booking_date"
                                name="booking_date"
                                type="date"
                                value={user3.booking_date}
                                onChange={handleInputChange3}
                                placeholder="Wedding Date"
                                className="form-control input-md"
                                required
                              />
                              {/* <div className="venue-form-calendar">
                                <i className="far fa-calendar-alt" />
                              </div> */}
                            </div>
                          </div>
                          {/* Textarea */}
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="form-group">
                              <label
                                className="control-label sr-only"
                                htmlFor="remarks"
                              >
                                Comment
                              </label>
                              <textarea
                                className="form-control"
                                id="remarks"
                                name="remarks"
                                rows={5}
                                value={user3.remarks}
                                onChange={handleInputChange3}
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
                                Book Now
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
    review: state.review.review,
    editVendor: state.vendor.editVendor,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onVendorGetData: () => dispatch(actions.vendorGetData()),
  onVendortypeGetData: () => dispatch(actions.vendortypeGetData()),
  onPostReviewData: (user) => dispatch(actions.postReviewData(user)),
  postMyBookingData: (user) => dispatch(actions.postMyBookingData(user)),
  editVendorRow: (id, vendor, setVendor) => {
    dispatch(actions.editVendorRow(id, vendor, setVendor));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
