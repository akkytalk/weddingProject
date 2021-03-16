import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  removeVendorLogin,
  updateVendorData,
  editVendorRow,
} from "../../../reduxStore/actions";

import { Formik, Form, Field } from "formik";

import { Button, FormGroup, InputGroup, InputGroupAddon } from "reactstrap";

import "./MyListingItems.css";

function MyListingItems2(props) {
  // const handleLogout = async () => {
  //     await props.removeVendorLogin();
  //   };

  const [vendor, setVendor] = useState([]);
  //const [vendorchange, setVendorchange] = useState([]);

  useEffect(() => {
    let id = props.vendorLogin?.vendorLogin?.vendor?.id;
    props.editVendorRow(id, vendor, setVendor);
  }, []);

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setVendorchange({ ...vendorchange, [name]: value });
  // };

  console.log(vendor.name, "vendor");
  const SignuphandleSubmit2 = (values, setSubmitting) => {
    let id = props.vendorLogin?.vendorLogin?.vendor?.id;
    let data = {
      id: id,
      name: values.name,
      email: values.email,
      vendor_type_name: values.vendor_type_name,
      address: values.address,
      USP: values.USP,
      events_completed: values.events_completed,
      years_of_experience: values.years_of_experience,
      mobile: values.mobile,

      Taxes: values.taxes,
      status: values.status,
      remarks: values.remarks,
      about: values.about,
      summary: values.summary,
      terms_conditions: values.terms_conditions,
      booking_policy: values.booking_policy,
      cancellation_policy: values.cancellation_policy,
    };
    console.log(data);
    props.updateVendorData(data);
    setSubmitting(false);
    props.editVendorRow(id, vendor, setVendor);
    return;
  };

  // if (window.location.reload) {
  //   let id = props.vendorLogin?.vendorLogin?.vendor?.id;
  //   props.editVendorRow(id, vendor, setVendor);
  // }

  console.log("vendor", vendor);

  return (
    <div>
      <Formik
        initialValues={{
          name: props.vendor?.name,
          email: props.vendor?.email,
          vendor_type_name: props.vendor?.vendor_type?.name,
          address: props.vendor?.address,

          USP: props.vendor?.USP,
          events_completed: props.vendor?.events_completed,
          years_of_experience: props.vendor?.years_of_experience,
          mobile: props.vendor?.mobile,
          taxes: props.vendor?.Taxes,
          status: props.vendor?.status,
          remarks: props.vendor?.remarks,
          about: props.vendor?.about,
          summary: props.vendor?.summary,
          terms_conditions: props.vendor?.terms_conditions,
          booking_policy: props.vendor?.booking_policy,
          cancellation_policy: props.vendor?.cancellation_policy,
        }}
        onSubmit={SignuphandleSubmit2}
      >
        {(formProps) => (
          <Form className="">
            <fieldset>
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                  {/* Text input*/}
                  <FormGroup className="form-group mylistingitems">
                    <InputGroup className="mylistingitems">
                      <InputGroupAddon addonType="prepend">
                        <label htmlFor="login-email">Vendor Name</label>
                      </InputGroupAddon>
                      <Field
                        id="name"
                        type="text"
                        name="name"
                        //value={vendor.name}
                        // onchange={handleInputChange}
                        placeholder="Venue Name"
                        className="form-control w-100"
                        required
                      />
                    </InputGroup>
                  </FormGroup>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                  {/* Text input*/}
                  <FormGroup className="form-group">
                    <InputGroup className="mylistingitems">
                      <InputGroupAddon addonType="prepend">
                        <label>E-mail</label>
                      </InputGroupAddon>
                      <Field
                        id="email"
                        type="text"
                        name="email"
                        //value={vendor.email}
                        //onchange={handleInputChange}
                        placeholder="Enter Email"
                        className="form-control w-100"
                        required
                      />
                    </InputGroup>
                  </FormGroup>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                  {/* Text input*/}
                  <FormGroup className="form-group">
                    <InputGroup className="mylistingitems">
                      <InputGroupAddon addonType="prepend">
                        <label>Vendor Purpose</label>
                      </InputGroupAddon>
                      <Field
                        id="vendor_type_name"
                        type="text"
                        name="vendor_type_name"
                        //value={vendor.vendor_type_name}
                        //onchange={handleInputChange}
                        placeholder="Vendor Purpose"
                        className="form-control w-100"
                        disabled
                      />
                    </InputGroup>
                  </FormGroup>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                  {/* Text input*/}
                  <FormGroup className="form-group service-form-group">
                    <InputGroup className="mylistingitems">
                      <InputGroupAddon addonType="prepend">
                        <label>City Name</label>
                      </InputGroupAddon>
                      <Field
                        id="address"
                        type="text"
                        name="address"
                        // value={vendor.address}
                        placeholder="Name of City"
                        className="form-control w-100"
                        required
                      />
                    </InputGroup>
                  </FormGroup>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                  {/* Text input*/}
                  <FormGroup className="form-group service-form-group">
                    <InputGroup className="mylistingitems">
                      <InputGroupAddon addonType="prepend">
                        <label>USP (unique selling point)</label>
                      </InputGroupAddon>
                      <Field
                        id="USP"
                        type="text"
                        name="USP"
                        //  value={vendor.USP}
                        placeholder="USP(unique selling point)"
                        className="form-control w-100"
                        required
                      />
                    </InputGroup>
                  </FormGroup>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                  {/* Text input*/}
                  <FormGroup className="form-group service-form-group">
                    <InputGroup className="mylistingitems">
                      <InputGroupAddon addonType="prepend">
                        <label>Event Completed</label>
                      </InputGroupAddon>
                      <Field
                        id="events_completed"
                        type="number"
                        name="events_completed"
                        // value={vendor.events_completed}
                        placeholder="Event Completed"
                        className="form-control w-100"
                        required
                      />
                    </InputGroup>
                  </FormGroup>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                  {/* Text input*/}
                  <FormGroup className="form-group service-form-group">
                    <InputGroup className="mylistingitems">
                      <InputGroupAddon addonType="prepend">
                        <label>Years of Experience </label>
                      </InputGroupAddon>
                      <Field
                        id="years_of_experience"
                        type="text"
                        name="years_of_experience"
                        //  value={vendor.time}
                        placeholder="Years of Experience"
                        className="form-control w-100"
                        // required
                      />
                    </InputGroup>
                  </FormGroup>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                  {/* Text input*/}
                  <FormGroup className="form-group service-form-group">
                    <InputGroup className="mylistingitems">
                      <InputGroupAddon addonType="prepend">
                        <label>Mobile No</label>
                      </InputGroupAddon>
                      <Field
                        id="mobile"
                        type="number"
                        name="mobile"
                        // value={vendor.mobile}
                        placeholder="Mobile No"
                        className="form-control w-100"
                        required
                      />
                    </InputGroup>
                  </FormGroup>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                  {/* Text input*/}
                  <FormGroup className="form-group service-form-group">
                    <InputGroup className="mylistingitems">
                      <InputGroupAddon addonType="prepend">
                        <label>Taxes</label>
                      </InputGroupAddon>
                      <Field
                        id="taxes"
                        type="text"
                        name="taxes"
                        // value={vendor.taxes}
                        placeholder="Taxes"
                        className="form-control w-100"
                        required
                      />
                    </InputGroup>
                  </FormGroup>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                  {/* Text input*/}
                  <FormGroup className="form-group service-form-group">
                    <InputGroup className="mylistingitems">
                      <InputGroupAddon addonType="prepend">
                        <label>Status</label>
                      </InputGroupAddon>
                      <Field
                        id="status"
                        as="select"
                        name="status"
                        // value={vendor.status}
                        placeholder="Status"
                        className="form-control w-100"
                        required
                      >
                        <option value={0}>inactive</option>
                        <option value={1}>active</option>
                      </Field>
                    </InputGroup>
                  </FormGroup>
                </div>

                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                  {/* Text input*/}
                  <FormGroup className="form-group service-form-group">
                    <InputGroup className="mylistingitems">
                      <InputGroupAddon addonType="prepend">
                        <label>Remarks</label>
                      </InputGroupAddon>
                      <Field
                        id="remarks"
                        type="text"
                        as="textarea"
                        name="remarks"
                        // value={vendor.remarks}
                        placeholder="Remarks"
                        className="form-control w-100"
                        required
                      />
                    </InputGroup>
                  </FormGroup>
                </div>

                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                  {/* Text input*/}
                  <FormGroup className="form-group service-form-group">
                    <InputGroup className="mylistingitems">
                      <InputGroupAddon addonType="prepend">
                        <label>About</label>
                      </InputGroupAddon>
                      <Field
                        id="about"
                        type="text"
                        as="textarea"
                        // value={vendor.about}
                        name="about"
                        placeholder="Tell us More about you"
                        className="form-control w-100"
                        required
                      />
                    </InputGroup>
                  </FormGroup>
                </div>

                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                  {/* Text input*/}
                  <FormGroup className="form-group service-form-group">
                    <InputGroup className="mylistingitems">
                      <InputGroupAddon addonType="prepend">
                        <label>Summary</label>
                      </InputGroupAddon>
                      <Field
                        id="summary"
                        type="text"
                        as="textarea"
                        // value={vendor.summary}
                        name="summary"
                        placeholder="Enter Summary of Lodging, Area available (there can 2 two halls in one venue), Keywords as per area & location, Other Policies"
                        className="form-control w-100"
                        required
                      />
                    </InputGroup>
                  </FormGroup>
                </div>

                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                  {/* Text input*/}
                  <FormGroup className="form-group service-form-group">
                    <InputGroup className="mylistingitems">
                      <InputGroupAddon addonType="prepend">
                        <label>terms & conditions</label>
                      </InputGroupAddon>
                      <Field
                        id="terms_conditions"
                        type="text"
                        as="textarea"
                        name="terms_conditions"
                        //  value={vendor.terms_conditions}
                        placeholder="Enter terms & conditions"
                        className="form-control w-100"
                        required
                      />
                    </InputGroup>
                  </FormGroup>
                </div>

                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                  {/* Text input*/}
                  <FormGroup className="form-group service-form-group">
                    <InputGroup className="mylistingitems">
                      <InputGroupAddon addonType="prepend">
                        <label>Booking Policy</label>
                      </InputGroupAddon>
                      <Field
                        id="booking_policy"
                        type="text"
                        as="textarea"
                        name="booking_policy"
                        //  value={vendor.booking_policy}
                        placeholder="Enter booking policy"
                        className="form-control w-100"
                        required
                      />
                    </InputGroup>
                  </FormGroup>
                </div>

                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                  {/* Text input*/}
                  <FormGroup className="form-group service-form-group">
                    <InputGroup className="mylistingitems">
                      <InputGroupAddon addonType="prepend">
                        <label>Cancellation Policy</label>
                      </InputGroupAddon>
                      <Field
                        id="cancellation_policy"
                        type="text"
                        as="textarea"
                        name="cancellation_policy"
                        placeholder="Enter cancellation policy"
                        className="form-control w-100"
                        required
                      />
                    </InputGroup>
                  </FormGroup>
                </div>

                {/* buttons */}
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <Button
                    type="submit"
                    name="singlebutton"
                    className="btn-success float-right mb-3"
                  >
                    Save
                  </Button>
                </div>
              </div>
            </fieldset>
          </Form>
        )}
      </Formik>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    vendorLogin: state.vendorLogin,
    vendor: state.vendor.editVendor,
  };
};

const mapDispatchToProps = (dispatch) => ({
  removeVendorLogin: () => {
    dispatch(removeVendorLogin());
  },
  updateVendorData: (data) => {
    dispatch(updateVendorData(data));
  },
  editVendorRow: (id, vendor, setVendor) => {
    dispatch(editVendorRow(id, vendor, setVendor));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyListingItems2);
