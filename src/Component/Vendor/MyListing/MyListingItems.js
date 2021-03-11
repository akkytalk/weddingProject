import React from "react";
import { connect } from "react-redux";
import { removeVendorLogin } from "../../../reduxStore/actions";

import { Formik, Form, Field } from "formik";

import {
  Card,
  CardBody,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";

function MyListingItems(props) {
  // const handleLogout = async () => {
  //     await props.removeVendorLogin();
  //   };

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

  return (
    <div>
      {props.vendorLogin?.vendorLogin?.vendor?.vendor_type_id == 10 ? (
        <div>
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
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                    {/* Text input*/}
                    <FormGroup className="form-group">
                      <InputGroup>
                        <InputGroupAddon>
                          <label
                            className="control-label sr-only"
                            htmlFor="bussinessname"
                          >
                            Venue Name{" "}
                          </label>
                        </InputGroupAddon>
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
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
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
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
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

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
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

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
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

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
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

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
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

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
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

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
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

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
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

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
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

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
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
        </div>
      ) : (
        <div>Vendors</div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    vendorLogin: state.vendorLogin,
  };
};

const mapDispatchToProps = (dispatch) => ({
  removeVendorLogin: () => {
    dispatch(removeVendorLogin());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyListingItems);
