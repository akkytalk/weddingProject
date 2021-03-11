/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../reduxStore/actions";
import { Formik, Form, Field } from "formik";
import CircularProgress from "@material-ui/core/CircularProgress";

import mogache from "../../Assets/Images/mogache.jpeg";

import {
  Card,
  CardBody,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";

import { Link, Redirect } from "react-router-dom";
const Forms = (props) => {
  const [user, setUser] = useState({
    vendor_type_name: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const [venueRegister, setVenueRegister] = useState(false);

  React.useEffect(() => {
    props.onVendorGetData();
    props.onVendortypeGetData();
    console.log("vendor data", props.vendor);
    console.log("vendor type data", props.vendortype);
  }, []);

  const handleSubmit = (values, setSubmitting) => {
    let data = {
      email: values.email,
      password: values.password,
    };
    console.log(data);
    props.postVendorLogin(data);
    setSubmitting(false);
    return;
  };

  const SignuphandleSubmit = (values, setSubmitting) => {
    values.vendor_type_name = user.vendor_type_name;
    console.log("values", values);
    let data = {
      name: values.name,
      email: values.email,
      vendor_type_name: values.vendor_type_name,
      events_completed: values.events_completed,
      years_of_experience: values.years_of_experience,
      mobile: values.mobile,
      password: values.password,
      password_confirmation: values.password_confirmation,
      address: values.address,
    };
    console.log(data);
    props.postVendorSignup(data);
    setSubmitting(false);
    return;
  };

  const SignuphandleSubmit2 = (values, setSubmitting) => {
    let data = {
      name: values.name,
      email: values.email,
      vendor_type_name: "venue",
      address: values.address,
      price_per_plate: values.price_per_plate,
      max_guest_capacity: values.max_guest_capacity,
      seating_capacity: values.seating_capacity,
      landmark: values.landmark,
      USP: values.USP,
      events_completed: values.events_completed,
      mobile: values.mobile,
      password: values.password,
      password_confirmation: values.password_confirmation,
    };
    console.log(data);
    props.postVendorSignup(data);
    setSubmitting(false);
    return;
  };

  console.log("user", user);

  console.log("vendorLogin", props.vendorLogin?.vendorLogin);
  console.log("venueRegister", venueRegister);

  if (props.vendorLogin?.vendorLogin.length !== 0) {
    return <Redirect to={"/dashboard"} />;
  } else if (props.vendorLogin?.isLoading) {
    //Spinner when service data sending under processing
    return (
      <div
        className="col-xs-12 col-sm-12 col-md-5 col-lg-4"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Card className="p-5">
          <CardBody>
            <CircularProgress
              style={{
                width: "50px",
                height: "50px",
                position: "absolute",
                left: "45%",
                top: "35%",
                //transform: "translate(-50%, -50%)",
              }}
            />
            {/* <div
              className="spinner-grow text-success col-xs-12 col-sm-12 col-md-5 col-lg-4"
              style={{
                width: "3rem",
                height: "3rem",
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div> */}
          </CardBody>
        </Card>
      </div>
    );
  }

  return (
    <Fragment>
      <div className=" vendor-form" style={{ backgroundColor: "pink" }}>
        <div className="container">
          <div className="row ">
            <div className="offset-xl-3 col-xl-6 offset-lg-3 col-lg-6 col-md-12 col-sm-12 col-12  ">
              {/* vendor head */}
              <div className="vendor-head">
                <a href="/">
                  <img
                    src={mogache}
                    style={{
                      maxWidth: "40%",
                      borderRadius: "30px",
                    }}
                    alt="Wedding Vendor & Supplier Directory HTML Template "
                  />
                </a>
              </div>
              {/* /.vendor head */}
              <div className="st-tab">
                <ul
                  className="nav nav-tabs nav-justified"
                  id="Mytabs"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="tab-1"
                      data-toggle="tab"
                      href="#tab1"
                      role="tab"
                      aria-controls="tab-1"
                      aria-selected="true"
                    >
                      Register
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="tab-2"
                      data-toggle="tab"
                      href="#tab2"
                      role="tab"
                      aria-controls="tab-2"
                      aria-selected="false"
                    >
                      Login
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="tab1"
                    role="tabpanel"
                    aria-labelledby="tab-1"
                  >
                    {venueRegister ? (
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                        {/* vendor title */}
                        <div className="vendor-form-title">
                          <h3 className="mb-2">Business Register</h3>
                          <p>
                            Join WeddingMogache get your business listed or to
                            claim your listing for FREE!
                          </p>
                          <p
                            className="mt-2"
                            onClick={() => setVenueRegister(false)}
                            style={{ cursor: "pointer" }}
                          >
                            {" "}
                            <Link>
                              want to Registration for Normal Vendor ?{" "}
                              <a>Register</a>
                            </Link>
                          </p>
                        </div>
                        {/* /.vendor title */}
                        <Formik
                          initialValues={{
                            name: "",
                            email: "",
                            vendor_type_name: "venue",
                            address: "",
                            price_per_plate: "",
                            max_guest_capacity: "",
                            seating_capacity: "",
                            landmark: "",
                            USP: "",
                            events_completed: "",
                            mobile: "",
                            password: "",
                            password_confirmation: "",
                          }}
                          onSubmit={SignuphandleSubmit2}
                        >
                          {(formProps) => (
                            <Form>
                              <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                  {/* Text input*/}
                                  <FormGroup className="form-group">
                                    <InputGroup>
                                      <label
                                        className="control-label sr-only"
                                        htmlFor="bussinessname"
                                      />
                                      <Field
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder="Venue Name"
                                        className="form-control"
                                        required
                                      />
                                    </InputGroup>
                                  </FormGroup>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                  {/* Text input*/}
                                  <FormGroup className="form-group">
                                    <InputGroup>
                                      <label
                                        className="control-label sr-only"
                                        htmlFor="email"
                                      />
                                      <Field
                                        id="email"
                                        type="text"
                                        name="email"
                                        placeholder="Enter Email"
                                        className="form-control"
                                        required
                                      />
                                    </InputGroup>
                                  </FormGroup>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                  {/* Text input*/}
                                  <FormGroup className="form-group service-form-group">
                                    <InputGroup>
                                      <label
                                        className="control-label sr-only"
                                        htmlFor="address"
                                      />
                                      <Field
                                        id="address"
                                        type="text"
                                        name="address"
                                        placeholder="Name of City"
                                        className="form-control"
                                        required
                                      />
                                    </InputGroup>
                                  </FormGroup>
                                </div>

                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                  {/* Text input*/}
                                  <FormGroup className="form-group service-form-group">
                                    <InputGroup>
                                      <label
                                        className="control-label sr-only"
                                        htmlFor="price_per_plate"
                                      />
                                      <Field
                                        id="price_per_plate"
                                        type="number"
                                        name="price_per_plate"
                                        placeholder="Price per plate"
                                        className="form-control"
                                        required
                                      />
                                    </InputGroup>
                                  </FormGroup>
                                </div>

                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                  {/* Text input*/}
                                  <FormGroup className="form-group service-form-group">
                                    <InputGroup>
                                      <label
                                        className="control-label sr-only"
                                        htmlFor="max_guest_capacity"
                                      />
                                      <Field
                                        id="max_guest_capacity"
                                        type="number"
                                        name="max_guest_capacity"
                                        placeholder="Maximum guest capacity"
                                        className="form-control"
                                        required
                                      />
                                    </InputGroup>
                                  </FormGroup>
                                </div>

                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                  {/* Text input*/}
                                  <FormGroup className="form-group service-form-group">
                                    <InputGroup>
                                      <label
                                        className="control-label sr-only"
                                        htmlFor="seating_capacity"
                                      />
                                      <Field
                                        id="seating_capacity"
                                        type="number"
                                        name="seating_capacity"
                                        placeholder="Seating capacity"
                                        className="form-control"
                                        required
                                      />
                                    </InputGroup>
                                  </FormGroup>
                                </div>

                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                  {/* Text input*/}
                                  <FormGroup className="form-group service-form-group">
                                    <InputGroup>
                                      <label
                                        className="control-label sr-only"
                                        htmlFor="landmark"
                                      />
                                      <Field
                                        id="landmark"
                                        type="text"
                                        name="landmark"
                                        placeholder="Landmark"
                                        className="form-control"
                                        required
                                      />
                                    </InputGroup>
                                  </FormGroup>
                                </div>

                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                  {/* Text input*/}
                                  <FormGroup className="form-group service-form-group">
                                    <InputGroup>
                                      <label
                                        className="control-label sr-only"
                                        htmlFor="USP"
                                      />
                                      <Field
                                        id="USP"
                                        type="text"
                                        name="USP"
                                        placeholder="USP(unique selling point)"
                                        className="form-control"
                                        required
                                      />
                                    </InputGroup>
                                  </FormGroup>
                                </div>

                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                  {/* Text input*/}
                                  <FormGroup className="form-group service-form-group">
                                    <InputGroup>
                                      <label
                                        className="control-label sr-only"
                                        htmlFor="events_completed"
                                      />
                                      <Field
                                        id="events_completed"
                                        type="number"
                                        name="events_completed"
                                        placeholder="Event Completed"
                                        className="form-control"
                                        required
                                      />
                                    </InputGroup>
                                  </FormGroup>
                                </div>

                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                  {/* Text input*/}
                                  <FormGroup className="form-group service-form-group">
                                    <InputGroup>
                                      <label
                                        className="control-label sr-only"
                                        htmlFor="mobile"
                                      />
                                      <Field
                                        id="mobile"
                                        type="number"
                                        name="mobile"
                                        placeholder="Mobile No"
                                        className="form-control"
                                        required
                                      />
                                    </InputGroup>
                                  </FormGroup>
                                </div>

                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                  {/* Text input*/}
                                  <FormGroup className="form-group service-form-group">
                                    <InputGroup>
                                      <label
                                        className="control-label sr-only"
                                        htmlFor="passwordregister"
                                      />
                                      <Field
                                        id="password"
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        className="form-control"
                                        required
                                      />
                                    </InputGroup>
                                  </FormGroup>
                                </div>

                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                  {/* Text input*/}
                                  <FormGroup className="form-group service-form-group">
                                    <InputGroup>
                                      <label
                                        className="control-label sr-only"
                                        htmlFor="passwordregister"
                                      />
                                      <Field
                                        id="password_confirmation"
                                        type="password"
                                        name="password_confirmation"
                                        placeholder="Confirm Password"
                                        className="form-control"
                                        required
                                      />
                                    </InputGroup>
                                  </FormGroup>
                                </div>

                                {/* buttons */}
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                  <button
                                    type="submit"
                                    name="singlebutton"
                                    className="btn btn-default"
                                  >
                                    Sign up for Marriage Hall
                                  </button>
                                </div>
                              </div>
                            </Form>
                          )}
                        </Formik>
                        <p
                          className="mt-2"
                          onClick={() => setVenueRegister(false)}
                          style={{ cursor: "pointer" }}
                        >
                          {" "}
                          <Link>
                            want to Registration for Normal Vendor ?{" "}
                            <a>Register</a>
                          </Link>
                        </p>
                      </div>
                    ) : (
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                        {/* vendor title */}
                        <div className="vendor-form-title">
                          <h3 className="mb-2">Business Register</h3>
                          <p>
                            Join WeddingMogache get your business listed or to
                            claim your listing for FREE!
                          </p>
                          <p
                            className="mt-2"
                            onClick={() => setVenueRegister(true)}
                            style={{ cursor: "pointer" }}
                          >
                            {" "}
                            <Link>
                              want to Registration for Marriage Hall ?{" "}
                              <a>Register</a>
                            </Link>
                          </p>
                        </div>
                        {/* /.vendor title */}
                        <Formik
                          initialValues={{
                            name: "",
                            email: "",
                            vendor_type_name: "",
                            events_completed: "",
                            years_of_experience: "",
                            mobile: "",
                            password: "",
                            password_confirmation: "",
                            address: "",
                          }}
                          onSubmit={SignuphandleSubmit}
                        >
                          {(formProps) => (
                            <Form>
                              <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                  {/* Text input*/}
                                  <FormGroup className="form-group">
                                    <InputGroup>
                                      <label
                                        className="control-label sr-only"
                                        htmlFor="bussinessname"
                                      />
                                      <Field
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder="Bussiness Name"
                                        className="form-control"
                                        required
                                      />
                                    </InputGroup>
                                  </FormGroup>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                  {/* Text input*/}
                                  <FormGroup className="form-group">
                                    <InputGroup>
                                      <label
                                        className="control-label sr-only"
                                        htmlFor="email"
                                      />
                                      <Field
                                        id="email"
                                        type="text"
                                        name="email"
                                        placeholder="Enter Email"
                                        className="form-control"
                                        required
                                      />
                                    </InputGroup>
                                  </FormGroup>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                  {/* Text input*/}
                                  <FormGroup className="form-group">
                                    <InputGroup>
                                      {/* <label
                                        className="control-label sr-only"
                                        htmlFor="name"
                                      /> */}
                                      <Input
                                        type="select"
                                        id="vendor_type_name"
                                        name="vendor_type_name"
                                        required
                                        value={user.vendor_type_name}
                                        onChange={handleInputChange}
                                      >
                                        <option>Vendor Purpose</option>
                                        {props.vendortype.map((ven, index) => (
                                          <option key={index} value={ven.name}>
                                            {ven.name}
                                          </option>
                                        ))}
                                      </Input>
                                    </InputGroup>
                                  </FormGroup>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                  {/* Text input*/}
                                  <FormGroup className="form-group service-form-group">
                                    <InputGroup>
                                      <label
                                        className="control-label sr-only"
                                        htmlFor="email"
                                      />
                                      <Field
                                        id="events_completed"
                                        type="number"
                                        name="events_completed"
                                        placeholder="Event Completed"
                                        className="form-control"
                                        required
                                      />
                                    </InputGroup>
                                  </FormGroup>
                                </div>

                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                  {/* Text input*/}
                                  <FormGroup className="form-group service-form-group">
                                    <InputGroup>
                                      <label
                                        className="control-label sr-only"
                                        htmlFor="email"
                                      />
                                      <Field
                                        id="years_of_experience"
                                        type="number"
                                        name="years_of_experience"
                                        placeholder="years of experience"
                                        className="form-control"
                                        required
                                      />
                                    </InputGroup>
                                  </FormGroup>
                                </div>

                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                  {/* Text input*/}
                                  <FormGroup className="form-group service-form-group">
                                    <InputGroup>
                                      <label
                                        className="control-label sr-only"
                                        htmlFor="mobile"
                                      />
                                      <Field
                                        id="mobile"
                                        type="number"
                                        name="mobile"
                                        placeholder="Mobile No"
                                        className="form-control"
                                        required
                                      />
                                    </InputGroup>
                                  </FormGroup>
                                </div>

                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                  {/* Text input*/}
                                  <FormGroup className="form-group service-form-group">
                                    <InputGroup>
                                      <label
                                        className="control-label sr-only"
                                        htmlFor="passwordregister"
                                      />
                                      <Field
                                        id="password"
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        className="form-control"
                                        required
                                      />
                                    </InputGroup>
                                  </FormGroup>
                                </div>

                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                  {/* Text input*/}
                                  <FormGroup className="form-group service-form-group">
                                    <InputGroup>
                                      <label
                                        className="control-label sr-only"
                                        htmlFor="passwordregister"
                                      />
                                      <Field
                                        id="password_confirmation"
                                        type="password"
                                        name="password_confirmation"
                                        placeholder="Confirm Password"
                                        className="form-control"
                                        required
                                      />
                                    </InputGroup>
                                  </FormGroup>
                                </div>

                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                  {/* Text input*/}
                                  <FormGroup className="form-group service-form-group">
                                    <InputGroup>
                                      <label
                                        className="control-label sr-only"
                                        htmlFor="address"
                                      />
                                      <Field
                                        id="address"
                                        type="text"
                                        name="address"
                                        placeholder="Name of City"
                                        className="form-control"
                                        required
                                      />
                                    </InputGroup>
                                  </FormGroup>
                                </div>

                                {/* buttons */}
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                  <button
                                    type="submit"
                                    name="singlebutton"
                                    className="btn btn-default"
                                  >
                                    Sign up for normal vendor
                                  </button>
                                </div>
                              </div>
                            </Form>
                          )}
                        </Formik>
                        <p
                          className="mt-2"
                          onClick={() => setVenueRegister(true)}
                          style={{ cursor: "pointer" }}
                        >
                          {" "}
                          <Link>
                            want to Registration for Marriage Hall ?{" "}
                            <a>Register</a>
                          </Link>
                        </p>
                      </div>
                    )}
                  </div>
                  {/* vendor-login */}
                  <div
                    className="tab-pane fade"
                    id="tab2"
                    role="tabpanel"
                    aria-labelledby="tab-2"
                  >
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                      <div className="vendor-form-title">
                        {/*vendor-title */}
                        <h3 className="mb-2">Welcome Back Vendor</h3>
                        <p>
                          Join Weddings to get your business listed or to claim
                          your listing for FREE!
                        </p>
                      </div>
                      {/*/.vendor-title */}
                      <Formik
                        initialValues={{
                          email: "",
                          password: "",
                        }}
                        onSubmit={handleSubmit}
                      >
                        {(formProps) => (
                          <Form>
                            <div className="row">
                              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                {/* Text input*/}
                                <FormGroup className="form-group">
                                  <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                      <label
                                        className="control-label sr-only"
                                        htmlFor="username"
                                      />
                                    </InputGroupAddon>
                                    <Field
                                      id="email"
                                      type="email"
                                      name="email"
                                      className="form-control"
                                      placeholder="Enter your Vendor e-mail"
                                      required
                                    />
                                  </InputGroup>
                                </FormGroup>
                              </div>
                              {/* Text input*/}
                              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                <FormGroup className="form-group service-form-group">
                                  <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                      <label
                                        className="control-label sr-only"
                                        htmlFor="passwordlogin"
                                      />
                                    </InputGroupAddon>
                                    <Field
                                      id="password"
                                      type="password"
                                      name="password"
                                      className="form-control"
                                      placeholder="Password"
                                      required
                                    />
                                  </InputGroup>
                                </FormGroup>
                              </div>
                              {/*buttons */}
                              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                {/* <Link to="/dashboard"> */}
                                <button
                                  type="submit"
                                  name="singlebutton"
                                  className="btn btn-default"
                                >
                                  Login
                                </button>
                                {/* </Link> */}
                              </div>
                            </div>
                          </Form>
                        )}
                      </Formik>

                      <p className="mt-2">
                        {" "}
                        Are you new couple? Create a New Account.
                        <a href="#" className="wizard-form-small-text">
                          {" "}
                          Click here
                        </a>
                      </p>
                    </div>
                  </div>
                  {/* /.vendor-login */}
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
    vendorLogin: state.vendorLogin,
    vendor: state.vendor.vendor,
    vendortype: state.vendortype.vendortype,
  };
};

const mapDispatchToProps = (dispatch) => ({
  postVendorLogin: (data) => {
    dispatch(actions.postVendorLogin(data));
  },
  postVendorSignup: (data) => {
    dispatch(actions.postVendorSignup(data));
  },

  onVendorGetData: () => dispatch(actions.vendorGetData()),
  onVendortypeGetData: () => dispatch(actions.vendortypeGetData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
