/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect, useState } from "react";
import Footer from "./Component/Home/Footer";
import Header from "./Component/Home/Header";
import Car from "./car";
import { connect } from "react-redux";
import * as actions from "./reduxStore/actions";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
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
const SamplePage = (props) => {
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
  //console.log("user3", user3);
  console.log("edit user", props.editVendor);

  return (
    <Fragment>
      <Header />
      <Car />
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
                    <h2 className="mb10">
                      {props.editVendor?.name
                        ? props.editVendor?.name
                        : "venue title name"}
                    </h2>
                    {/* <p className="vendor-address">
                      3170 Stonecoal Road Napoleon, OH 43545.{" "}
                      <a href="#location" className="btn-secondary-link ml-2">
                        View Map
                      </a>{" "}
                    </p> */}
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                  {/* <div className="vendor-head text-xl-right">
                    <Link href="#" className="btn-default-wishlist">
                      <i className="fa fa-heart" />{" "}
                      <span className="pl-1">Add To Wishlist</span>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="vendor-meta bg-white border m-0 ">
              <div className="vendor-meta-item vendor-meta-item-bordered">
                <span className="vendor-price">
                  $
                  {props.editVendor?.package_price
                    ? Math.floor(props.editVendor?.package_price)
                    : "Package Not Specified"}
                </span>
                <span className="vendor-text">Start From</span>
              </div>
              <div className="vendor-meta-item vendor-meta-item-bordered">
                <span className="vendor-guest">
                  {props.editVendor?.max_guest_capacity
                    ? Math.floor(props.editVendor?.max_guest_capacity)
                    : "Not Specified"}
                </span>
                <span className="vendor-text">Max Guest Capacity</span>
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
                  <div className="card border card-shadow-none">
                    <h3 className="card-header bg-white">
                      About Wedding Venue
                    </h3>
                    <div className="card-body">
                      {/*/.vendor-details */}
                      {/*vendor-description */}
                      <p className="lead">
                        Duis vulputate ultrices odio, vitae tristique lectus
                        dapibus sit amet. Vivamus iaculis sagittis libero, at
                        mollis ante semper eu.{" "}
                      </p>
                      <p>
                        Duis vulputate ultrices odio, vitae tristique lectus
                        dapibus sit amet. Vivamus iaculis sagittis lisus libero,
                        a aliquet odio pretium non. Curabitur at porta ex, eu
                        pretium felis. Fusce mattis efficitur nisi, non pretium
                        nulla luctus sit amet.{" "}
                      </p>
                      <p>
                        Etiam varius ultricies augue, in ornare lorem congue eu.
                        Aliquam magna metus, rhoncus a pellentesque tincidunt,
                        accumsan ut urna. Sed congue turpis sit amet urna
                        interdum, ut consequat dolor rhoncus
                      </p>
                      <h4>Sub heading </h4>
                      <p>
                        Etiam placerat dictum dolor ac volutpat. Cras egestas
                        laoreet risus id elementum. Etiam ultrices vitae dui ut
                        finibus. In ac rhoncus mauris, aliquet efficitur erat.
                        Sed laoreet luctus tellus vel porttitor. Aliquam non
                        tellus in eros congue fermentum. Nulla tincidunt
                        volutpat ligula, non rutrum lectus luctus quis.
                      </p>
                      <p>
                        Donec accumsan consequat massa non gravida.
                        <span className="text-default">
                          Morbi pharetra mollis tortor ac maximus.
                        </span>{" "}
                        Nunc dapibus bibendum urna, in egestas dolor. Class
                        aptent taciti sociosqu ad litora torquent per conubia
                        nostra, per inceptos himenaeos.
                      </p>
                      {/*venue-highlights */}
                      <div className="venue-highlights">
                        <div className=" table-responsive">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th scope="col">Venue Highlights</th>
                                <th scope="col" />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Maximum Guest Capacity</td>
                                <td className="venue-highlight-meta">
                                  {props.editVendor?.max_guest_capacity
                                    ? Math.floor(
                                        props.editVendor?.max_guest_capacity
                                      )
                                    : "Not Specified"}
                                </td>
                              </tr>
                              <tr>
                                <td>Seating Capacity</td>
                                <td className="venue-highlight-meta">
                                  {props.editVendor?.seating_capacity
                                    ? Math.floor(
                                        props.editVendor?.seating_capacity
                                      )
                                    : "Not Specified"}
                                </td>
                              </tr>
                              <tr>
                                <td>Time</td>
                                <td className="venue-highlight-meta">
                                  {props.editVendor?.time
                                    ? props.editVendor?.time
                                    : "Not Specified"}
                                </td>
                              </tr>
                              <tr>
                                <td>Price Per Plate</td>
                                <td className="venue-highlight-meta">
                                  {props.editVendor?.price_per_plate
                                    ? Math.floor(
                                        props.editVendor?.price_per_plate
                                      )
                                    : "Not Specified"}
                                </td>
                              </tr>
                              <tr>
                                <td>USP (Unique Selling Point)</td>
                                <td className="venue-highlight-meta">
                                  {props.editVendor?.USP
                                    ? props.editVendor?.USP
                                    : "Not Specified"}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      {/* /.venue-highlights */}
                    </div>
                  </div>
                  {/*vendor-description */}
                  {/* aminities-block */}
                  <div className="card border card-shadow-none">
                    <h3 className="card-header bg-white">
                      Accommodations / Amenities Included
                    </h3>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="animities-list">
                            <ul className="list-unstyled arrow">
                              <li>Air conditioning</li>
                              <li>Bathroom</li>
                              <li>Hair Dryer</li>
                              <li>Kitchen</li>
                              <li>Linen supplied</li>
                              <li>Non-smoking</li>
                              <li>Open fireplace </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="animities-list">
                            <ul className="list-unstyled arrow">
                              <li> Parking</li>
                              <li>Pet-friendly </li>
                              <li>Towels supplied </li>
                              <li>TV</li>
                              <li>Washing machine</li>
                              <li>Wheelchair</li>
                              <li>Access Wifi</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /.aminities-block */}
                  {/* review-block */}
                  {/* <div id="reviews">
                    <div className="card border card-shadow-none ">
                      <div className="card-header bg-white">
                        <h3 className="mb0 d-inline-block">Reviews</h3>
                        <a
                          href="#"
                          className="btn btn-default btn-sm float-right d-inline-block"
                        >
                          write a review
                        </a>
                      </div>
                      <div className="card-body">
                        <div className="review-block">
                          <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                              
                              <div className="review-sidebar">
                                <div className="review-total">4.8 </div>
                                <div className="review-text">Reviews</div>
                                <span className="rated">
                                  <i className="fa fa-star" />{" "}
                                  <i className="fa fa-star" />{" "}
                                  <i className="fa fa-star" />{" "}
                                  <i className="fa  fa-star" />{" "}
                                  <i className="fa fa-star" />{" "}
                                </span>
                                <p>4.4 average based on 1 ratings.</p>
                              </div>
                              
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                              
                              <div className="review-box">
                                <div className="review-list">
                                  <div className="review-for">
                                    Quality Service
                                  </div>
                                  <div className="review-rating">
                                    <span className="rated">
                                      <i className="fa fa-star" />{" "}
                                      <i className="fa fa-star" />{" "}
                                      <i className="fa fa-star" />{" "}
                                      <i className="far fa-star" />{" "}
                                      <i className="far  fa-star" />{" "}
                                    </span>
                                  </div>
                                  <div className="review-number">3.0</div>
                                </div>
                                
                                <div className="review-list">
                                  <div className="review-for">Facilities</div>
                                  <div className="review-rating">
                                    <span className="rated">
                                      <i className="fa fa-star" />{" "}
                                      <i className="fa fa-star" />{" "}
                                      <i className="fa fa-star" />{" "}
                                      <i className="fa fa-star" />{" "}
                                      <i className="far fa-star" />{" "}
                                    </span>
                                  </div>
                                  <div className="review-number">4.0</div>
                                </div>
                                
                                <div className="review-list">
                                  <div className="review-for">Staff</div>
                                  <div className="review-rating">
                                    <span className="rated">
                                      <i className="fa fa-star" />{" "}
                                      <i className="fa fa-star" />{" "}
                                      <i className="fa fa-star" />{" "}
                                      <i className="far fa-star" />{" "}
                                      <i className="far fa-star" />{" "}
                                    </span>
                                  </div>
                                  <div className="review-number">3.0</div>
                                </div>
                                
                                <div className="review-list">
                                  <div className="review-for">Flexibility</div>
                                  <div className="review-rating">
                                    <span className="rated">
                                      <i className="fa fa-star" />{" "}
                                      <i className="fa fa-star" />{" "}
                                      <i className="fa fa-star" />{" "}
                                      <i className="far fa-star" />{" "}
                                      <i className="far fa-star" />{" "}
                                    </span>
                                  </div>
                                  <div className="review-number">3.0</div>
                                </div>
                               
                                <div className="review-list">
                                  <div className="review-for">
                                    Value of money
                                  </div>
                                  <div className="review-rating">
                                    <span className="rated">
                                      <i className="fa fa-star" />{" "}
                                      <i className="fa fa-star" />{" "}
                                      <i className="fa fa-star" />{" "}
                                      <i className="fa fa-star" />{" "}
                                      <i className="far fa-star" />{" "}
                                    </span>
                                  </div>
                                  <div className="review-number">4.0</div>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* /.review-block */}
                  {/* <div className="card border card-shadow-none ">
                    
                    <div className="card-header bg-white mb0">
                      <div className="review-user">
                        <div className="user-img">
                          {" "}
                          <img
                            src="images/review-pic-1.jpg"
                            alt="star rating jquery"
                            className="rounded-circle"
                          />
                        </div>
                        <div className="user-meta">
                          <h5 className="user-name mb-0">
                            Eric M. Rahn{" "}
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
                   
                    <div className="card-body">
                    
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
                      
                    </div>
                  </div> */}
                </div>
                {/* form */}
                <div className="card border card-shadow-none">
                  <div className="card-header d-flex justify-content-between align-items-center bg-white mb0">
                    <h2>Marriage Hall Registration</h2>
                    <Link className="title" to="/vendor">
                      <h5 className="text-default ">Click here</h5>
                    </Link>

                    {/* <div className="card-body">
                    <hr />
                      <form className="needs-validation" noValidate>
                        <div className="form-row">
                          <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom01">
                              First name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom01"
                              placeholder="First name"
                              defaultValue=""
                              required
                            />
                            <div className="valid-feedback">Looks good!</div>
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustom02">
                              Maximum guest capacity
                            </label>
                            <input
                              type="Number"
                              className="form-control"
                              id="validationCustom02"
                              placeholder="Maximum guest capacity"
                              defaultValue=""
                              required
                            />
                            <div className="valid-feedback">Looks good!</div>
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="validationCustomUsername">
                              Seating capacity
                            </label>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span
                                  className="input-group-text"
                                  id="inputGroupPrepend"
                                ></span>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustomUsername"
                                placeholder="more tha 10 guest"
                                aria-describedby="inputGroupPrepend"
                                required
                              />
                              <div className="invalid-feedback">
                                Please select write option
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="col-md-6 mb-3">
                            <label htmlFor="validationCustom03">
                              Times & Slots
                            </label>
                            <input
                              type="Date"
                              className="form-control"
                              id="validationCustom03"
                              placeholder="Times & Slots"
                              required
                            />
                            <div className="invalid-feedback">
                              Please provide a valid Times & Slots.
                            </div>
                          </div>
                          <div className="col-md-3 mb-3">
                            <label htmlFor="validationCustom04">USP</label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom04"
                              placeholder="USP"
                              required
                            />
                            <div className="invalid-feedback">
                              Please provide a valid USP.
                            </div>
                          </div>
                          <div className="col-md-3 mb-3">
                            <label htmlFor="validationCustom05">Summary</label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom05"
                              placeholder="Summary"
                              required
                            />
                            <div className="invalid-feedback">
                              Please provide a valid Summary.
                            </div>
                          </div>
                        </div>
                        
                        <div className="form-row">
                          <div className="col-md-6 mb-3">
                            <div>
                              <h4>
                                please select the follwoing to be included
                              </h4>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="inlineCheckbox1"
                                  defaultValue="option1"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="inlineCheckbox1"
                                >
                                  Alcohol
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="inlineCheckbox2"
                                  defaultValue="option2"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="inlineCheckbox2"
                                >
                                  Decor
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="inlineCheckbox2"
                                  defaultValue="option2"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="inlineCheckbox2"
                                >
                                  ● Parking
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="inlineCheckbox2"
                                  defaultValue="option2"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="inlineCheckbox2"
                                >
                                  ● Food
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="inlineCheckbox2"
                                  defaultValue="option2"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="inlineCheckbox2"
                                >
                                  Taxes
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3 mb-3">
                            <label htmlFor="validationCustom04">Lodging</label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom04"
                              placeholder="USP"
                              required
                            />
                            <div className="invalid-feedback">
                              Please provide a valid Lodging.
                            </div>
                          </div>
                          <div className="col-md-3 mb-3">
                            <label htmlFor="validationCustom05">
                              ● Area available
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom05"
                              placeholder="(2 two halls in one venue)"
                              required
                            />
                            <div className="invalid-feedback">
                              Please provide a valid Summary.
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue
                              id="invalidCheck"
                              required
                            />
                            <label
                              className="form-check-label"
                              htmlFor="invalidCheck"
                            >
                              Agree to terms and conditions
                            </label>
                            <div className="invalid-feedback">
                              You must agree before submitting.
                            </div>
                          </div>
                        </div>
                        <button
                          className="btn btn-primary"
                          type="submit"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          Submit form
                        </button>
                      </form>
                    </div> */}
                  </div>
                </div>{" "}
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
        <div className="space-small">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h2>Similar Vendor</h2>
              </div>
            </div>
            <div className="row">
              {props.vendor.map((ven) => {
                if (ven.vendor_type_id == 10)
                  return (
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="vendor-thumbnail">
                        <div className="vendor-img zoomimg">
                          <a href="#">
                            <img
                              src={
                                ven?.photographs
                                  ? `https://uditsolutions.in/mogachetest/storage/app/public/files/${ven.photographs}`
                                  : "https://icon-library.com/images/no-profile-picture-icon/no-profile-picture-icon-21.jpg"
                              }
                              alt=""
                              className="img-fluid"
                            />
                          </a>
                          {/* <div className="wishlist-sign">
                            <a href="#" className="btn-wishlist">
                              <i className="fa fa-heart" />
                            </a>
                          </div> */}
                        </div>

                        <div className="vendor-content">
                          <h2 className="vendor-title">
                            <a href="#" className="title">
                              {ven.name}
                            </a>
                          </h2>
                          <p className="vendor-address">{ven.address}</p>
                        </div>
                        <div className="vendor-meta">
                          <div className="vendor-meta-item vendor-meta-item-bordered">
                            <span className="vendor-price">
                              ${ven.package_price}
                            </span>
                            <span className="vendor-text">Start From</span>
                          </div>
                          <div className="vendor-meta-item vendor-meta-item-bordered">
                            <span className="vendor-guest">
                              {ven.max_guest_capacity}
                            </span>
                            <span className="vendor-text">
                              Max Guest Capacity
                            </span>
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
                  );
              })}
              {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="vendor-thumbnail">
                  
                  <div className="vendor-img zoomimg">
                    
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
                 
                  <div className="vendor-content">
                   
                    <h2 className="vendor-title">
                      <a href="#" className="title">
                        Wedding Venue Title Name
                      </a>
                    </h2>
                    <p className="vendor-address">Ahmedabad, Gujarat.</p>
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
                      <span className="rating-count vendor-text">(20)</span>
                    </div>
                  </div>
                  
                </div>
               
              </div> */}
              {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="vendor-thumbnail">
               
                  <div className="vendor-img zoomimg">
                   
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
                 
                  <div className="vendor-content">
                   
                    <h2 className="vendor-title">
                      <a href="#" className="title">
                        Wedding Venue Title Name
                      </a>
                    </h2>
                    <p className="vendor-address">Surat, Gujarat</p>
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
                      <span className="rating-count vendor-text">(20)</span>
                    </div>
                  </div>
                </div>
               
              </div> */}
              {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="vendor-thumbnail">
               
                  <div className="vendor-img zoomimg">
                   
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
                
                  <div className="vendor-content">
                   
                    <h2 className="vendor-title">
                      <a href="#" className="title">
                        Wedding Venue Title Name
                      </a>
                    </h2>
                    <p className="vendor-address">Rajkot, Gujarat</p>
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
                      <span className="rating-count vendor-text">(20)</span>
                    </div>
                  </div>
                </div>
               
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              Thanks for ,We will contact soon..!!!!!!!
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* /modal */}
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

export default connect(mapStateToProps, mapDispatchToProps)(SamplePage);
