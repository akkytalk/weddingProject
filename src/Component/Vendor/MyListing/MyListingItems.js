import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  removeVendorLogin,
  updateVendorData,
  editVendorRow,
} from "../../../reduxStore/actions";

import { Formik, Form, Field } from "formik";

import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";

import "./MyListingItems.css";
import MyListingItems2 from "./MyListingItems2";

function MyListingItems(props) {
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
      vendor_type_name: "venue",
      address: values.address,
      price_per_plate: values.price_per_plate,
      max_guest_capacity: values.max_guest_capacity,
      seating_capacity: values.seating_capacity,
      landmark: values.landmark,
      USP: values.USP,
      events_completed: values.events_completed,
      mobile: values.mobile,
      time: values.time,
      decor: values.decor,
      alcohol: values.alcohol,
      parking: values.parking,
      food: values.food,
      Taxes: values.taxes,
      status: values.status,
      remarks: values.remarks,
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
      {props.vendorLogin?.vendorLogin?.vendor?.vendor_type_id == 10 ? (
        <div>
          <Formik
            initialValues={{
              name: props.vendor?.name,
              email: props.vendor?.email,
              vendor_type_name: "venue",
              address: props.vendor?.address,
              price_per_plate: props.vendor?.price_per_plate,
              max_guest_capacity: props.vendor?.max_guest_capacity,
              seating_capacity: props.vendor?.seating_capacity,
              landmark: props.vendor?.landmark,
              USP: props.vendor?.USP,
              events_completed: props.vendor?.events_completed,
              mobile: props.vendor?.mobile,
              time: props.vendor?.time,

              decor: props.vendor?.decor,
              alcohol: props.vendor?.alcohol,
              parking: props.vendor?.parking,
              food: props.vendor?.food,
              taxes: props.vendor?.Taxes,
              status: props.vendor?.status,
              remarks: props.vendor?.remarks,

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
                            <label htmlFor="login-email">Venue Name</label>
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
                      <FormGroup className="form-group service-form-group">
                        <InputGroup className="mylistingitems">
                          <InputGroupAddon addonType="prepend">
                            <label>Venue City Name</label>
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
                            <label>Price Per Plate</label>
                          </InputGroupAddon>
                          <Field
                            id="price_per_plate"
                            type="number"
                            name="price_per_plate"
                            //  value={vendor.price_per_plate}
                            placeholder="Price per plate"
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
                            <label>Maximum guest capacity</label>
                          </InputGroupAddon>
                          <Field
                            id="max_guest_capacity"
                            type="number"
                            name="max_guest_capacity"
                            //  value={vendor.max_guest_capacity}
                            placeholder="Maximum guest capacity"
                            className="form-control w-100"
                            required
                          />
                        </InputGroup>
                      </FormGroup>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                      {/* Text input*/}
                      <FormGroup className="form-group service-form-group">
                        <InputGroup className="mylistingitems">
                          <InputGroupAddon addonType="prepend">
                            <label>Seating capacity</label>
                          </InputGroupAddon>
                          <Field
                            id="seating_capacity"
                            type="number"
                            name="seating_capacity"
                            // value={vendor.seating_capacity}
                            placeholder="Seating capacity"
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
                            <label>Landmark</label>
                          </InputGroupAddon>
                          <Field
                            id="landmark"
                            type="text"
                            name="landmark"
                            // value={vendor.landmark}
                            placeholder="Landmark"
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
                            <label>Times & Slots</label>
                          </InputGroupAddon>
                          <Field
                            id="time"
                            type="text"
                            name="time"
                            //  value={vendor.time}
                            placeholder="Times & Slots"
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
                            <label>Decor</label>
                          </InputGroupAddon>
                          <Field
                            id="decor"
                            as="select"
                            name="decor"
                            // value={vendor.decor}
                            placeholder="Decor"
                            className="form-control w-100"
                            required
                          >
                            <option value={1}>Yes</option>
                            <option value={0}>No</option>
                          </Field>
                        </InputGroup>
                      </FormGroup>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                      {/* Text input*/}
                      <FormGroup className="form-group service-form-group">
                        <InputGroup className="mylistingitems">
                          <InputGroupAddon addonType="prepend">
                            <label>Alcohol</label>
                          </InputGroupAddon>
                          <Field
                            id="alcohol"
                            as="select"
                            name="alcohol"
                            // value={vendor.alcohol}
                            placeholder="Alcohol"
                            className="form-control w-100"
                            required
                          >
                            <option value={1}>Yes</option>
                            <option value={0}>No</option>
                          </Field>
                        </InputGroup>
                      </FormGroup>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                      {/* Text input*/}
                      <FormGroup className="form-group service-form-group">
                        <InputGroup className="mylistingitems">
                          <InputGroupAddon addonType="prepend">
                            <label>Parking</label>
                          </InputGroupAddon>
                          <Field
                            id="parking"
                            as="select"
                            name="parking"
                            // value={vendor.parking}
                            placeholder="Parking"
                            className="form-control w-100"
                            required
                          >
                            <option value={1}>Yes</option>
                            <option value={0}>No</option>
                          </Field>
                        </InputGroup>
                      </FormGroup>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                      {/* Text input*/}
                      <FormGroup className="form-group service-form-group">
                        <InputGroup className="mylistingitems">
                          <InputGroupAddon addonType="prepend">
                            <label>Food</label>
                          </InputGroupAddon>
                          <Field
                            id="food"
                            as="select"
                            name="food"
                            //  value={vendor.food}
                            placeholder="Food"
                            className="form-control w-100"
                            required
                          >
                            <option value={1}>Yes</option>
                            <option value={0}>No</option>
                          </Field>
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
                            <option value="false">inactive</option>
                            <option value="true">active</option>
                          </Field>
                        </InputGroup>
                      </FormGroup>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
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
      ) : (
        <MyListingItems2 />
      )}
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

export default connect(mapStateToProps, mapDispatchToProps)(MyListingItems);
