/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import * as actions from "../../../reduxStore/actions";

import { connect } from "react-redux";
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";

function MyBookingData(props) {
  useEffect(() => {
    console.log("currentUser data from redux ", currentUser);

    props.onMyBookingGetData();
    props.onMyBookingGetData();
    props.onDeleteMyBooking();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [user, setUser] = useState({
    vendor_name: props.editVendor?.name,
    vendor_type_name: props.editVendor?.vendor_type?.name,
    customer_name: "",
    booking_date: "",
    booking_amount: "",
    advance_amount: "",
    phone: "",
    remarks: "",
    reference: "",
    menu: "",
    morning_status: "",
    night_status: "",
    status: 1,
    entered_by: "vendor",
  });

  const [editing, setEditing] = useState(false);

  const initialFormState = {
    id: "",
    vendor_name: props.editVendor?.name,
    vendor_type_name: props.editVendor?.vendor_type?.name,
    user_name: "",
    customer_name: "",
    booking_date: "",
    booking_amount: "",
    advance_amount: "",
    phone: "",
    remarks: "",
    reference: "",
    menu: "",
    morning_status: "",
    night_status: "",
  };

  const [currentUser, setCurrentUser] = useState(initialFormState);

  const currentUserInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
    setEditing(false);
  };

  console.log("editVendor", props.editVendor);
  console.log("mybooking", props.myBooking);
  console.log("User data from ", user);
  console.log("CurrentUser data from ", currentUser);

  return (
    //<div className="container-fluid">
    <Card>
      <CardHeader className="bg-warning text-white">
        <strong>My Booking</strong>
        <Button className="btn-success  float-right" onClick={toggle}>
          Add Booking
        </Button>
        <Modal className="modal-info modal-lg" isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Add New Booking</ModalHeader>
          <ModalBody>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                props.onPostMyBookingData(user);
              }}
            >
              <div className="form-row" style={{ fontSize: "12px" }}>
                <div className="form-group col-md-6">
                  <label htmlFor="inputPassword4">Customer Name </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword4"
                    placeholder=""
                    value={
                      !editing
                        ? user.customer_name
                        : currentUser?.customer_name
                        ? currentUser?.customer_name
                        : currentUser?.user_name
                    }
                    name="customer_name"
                    onChange={
                      editing ? currentUserInputChange : handleInputChange
                    }
                  />
                </div>

                <div className="form-group col-md-6">
                  <label htmlFor="inputPassword4"> Booking Date </label>
                  <input
                    type="date"
                    className="form-control"
                    id="inputPassword4"
                    placeholder=""
                    value={
                      !editing ? user.booking_date : currentUser.booking_date
                    }
                    name="booking_date"
                    onChange={
                      editing ? currentUserInputChange : handleInputChange
                    }
                  />
                </div>

                <div className="form-group col-md-6">
                  <label htmlFor="inputPassword4"> Booking Amount</label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputPassword4"
                    placeholder=""
                    value={
                      !editing
                        ? user.booking_amount
                        : Math.floor(currentUser.booking_amount)
                    }
                    name="booking_amount"
                    onChange={
                      editing ? currentUserInputChange : handleInputChange
                    }
                  />
                </div>

                <div className="form-group col-md-6">
                  <label htmlFor="inputPassword4"> Advance Amount </label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputPassword4"
                    placeholder=""
                    value={
                      !editing
                        ? user.advance_amount
                        : Math.floor(currentUser.advance_amount)
                    }
                    name="advance_amount"
                    onChange={
                      editing ? currentUserInputChange : handleInputChange
                    }
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputPassword4"> Mobile No </label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputPassword4"
                    placeholder=""
                    value={
                      !editing ? user.phone : Math.floor(currentUser.phone)
                    }
                    name="phone"
                    onChange={
                      editing ? currentUserInputChange : handleInputChange
                    }
                  />
                </div>

                <div className="form-group col-md-6">
                  <label htmlFor="inputPassword4"> Remarks </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="inputPassword4"
                    placeholder=""
                    value={!editing ? user.remarks : currentUser.remarks}
                    name="remarks"
                    onChange={
                      editing ? currentUserInputChange : handleInputChange
                    }
                  />
                </div>

                <div className="form-group col-md-12">
                  <label htmlFor="inputPassword4"> Reference </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword4"
                    placeholder=""
                    value={!editing ? user.reference : currentUser.reference}
                    name="reference"
                    onChange={
                      editing ? currentUserInputChange : handleInputChange
                    }
                  />
                </div>

                <div className="form-group col-md-12">
                  <label htmlFor="inputPassword4"> Menu </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="inputPassword4"
                    placeholder=""
                    value={!editing ? user.pimenuncode : currentUser.menu}
                    name="menu"
                    onChange={
                      editing ? currentUserInputChange : handleInputChange
                    }
                  />
                </div>

                <div className="form-group col-md-6">
                  <label htmlFor="inputPassword4"> Morning Booking </label>
                  <select
                    type="text"
                    className="form-control"
                    id="inputPassword4"
                    name="morning_status"
                    value={
                      editing ? currentUser.morning_status : user.morning_status
                    }
                    onChange={
                      editing ? currentUserInputChange : handleInputChange
                    }
                  >
                    <option>select</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </div>

                <div className="form-group col-md-6">
                  <label htmlFor="inputPassword4"> Night Booking </label>
                  <select
                    type="text"
                    className="form-control"
                    id="inputPassword4"
                    name="night_status"
                    value={
                      editing ? currentUser.night_status : user.night_status
                    }
                    onChange={
                      editing ? currentUserInputChange : handleInputChange
                    }
                  >
                    <option>select</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </div>

                <div className="form-group col-md-12 mt-4">
                  {!editing ? (
                    <Row style={{ justifyContent: "center" }}>
                      <Col md={4}>
                        <Button type="reset" color="danger" block>
                          <b>Reset</b>
                        </Button>
                      </Col>
                      <Col md={4}>
                        <Button type="submit" color="primary" block>
                          Submit
                        </Button>
                      </Col>
                    </Row>
                  ) : (
                    <div className="d-flex">
                      <button
                        className="btn btn-success"
                        type="button"
                        onClick={() => {
                          props.onUpdateMyBookingData(
                            currentUser.id,
                            editing,
                            setEditing,
                            currentUser,
                            setCurrentUser
                          );
                          toggle();
                        }}
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-primary ml-3"
                        type="button"
                        onClick={() => {
                          setEditing(false);
                          toggle();
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </ModalBody>
        </Modal>
      </CardHeader>
      <CardBody>
        <table className="table table-sm" style={{ fontSize: "12px" }}>
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th scope="col">Customer Name</th>
              <th scope="col">Booking Date</th>
              <th scope="col">Booking Amount</th>

              <th scope="col">Advance Amount</th>

              {/* <th scope="col">Remarks</th>
              <th scope="col">Reference</th>
              <th scope="col">Menu</th> */}
              <th scope="col">Morning Booking</th>
              <th scope="col">Night Booking</th>
              <th scope="col">By</th>
              <th scope="col">Actions</th>
              <th scope="col">Invoice</th>
            </tr>
          </thead>
          <tbody>
            {props.myBooking?.length > 0 ? (
              props.myBooking?.map((user) => {
                if (user.vendor_id == props.editVendor?.id && user.status == 1)
                  return (
                    <tr key={user.id}>
                      {/* <td>{user.id}</td> */}
                      <td>
                        {user.customer_name
                          ? user.customer_name
                          : user?.user?.name}
                      </td>
                      <td>{user.booking_date}</td>
                      <td>{user.booking_amount}</td>
                      <td>{user.advance_amount}</td>
                      {/* <td>{user.remarks}</td>
                  <td>{user.reference}</td>
                  <td>{user.menu}</td> */}

                      <td>
                        {user.morning_status == 1 ? "booked" : "not booked"}
                      </td>
                      <td>
                        {user.night_status == 1 ? "booked" : "not booked"}
                      </td>
                      <td>{user.entered_by}</td>
                      <td className="d-flex">
                        <button
                          className="btn-info"
                          onClick={() => {
                            props.onEditMyBookingRow(
                              user.id,
                              editing,
                              setEditing,
                              currentUser,
                              setCurrentUser
                            );
                            toggle();
                          }}
                        >
                          <i className="fa fa-edit" aria-hidden="true"></i>
                        </button>

                        {/* <button
                      className="ml-3"
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are you sure you wish to delete this Account Group?"
                          )
                        )
                          props.onDeleteMyBooking(user.id);
                      }}
                    >
                      <i
                        className="fa fa-trash-alt "
                        value={user.id}
                        aria-hidden="true"
                      ></i>
                    </button> */}
                      </td>
                      <td>
                        {" "}
                        <button className="btn-warning btn-sm">Generate</button>
                      </td>
                    </tr>
                  );
              })
            ) : (
              <tr>
                <td colSpan={3}>No Requests are available</td>
              </tr>
            )}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}

const mapStateToProps = (state) => {
  return {
    myBooking: state.myBooking.myBooking,
    editVendor: state.vendor.editVendor,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMyBookingGetData: () => dispatch(actions.myBookingGetData()),
    onDeleteMyBooking: (id) => dispatch(actions.deleteMyBooking(id)),
    onPostMyBookingData: (user) => dispatch(actions.postMyBookingData(user)),
    onUpdateMyBookingData: (
      id,
      editing,
      setEditing,
      currentUser,
      setCurrentUser
    ) =>
      dispatch(
        actions.updateMyBookingData(
          id,
          editing,
          setEditing,
          currentUser,
          setCurrentUser
        )
      ),
    onEditMyBookingRow: (
      id,
      editing,
      setEditing,
      currentUser,
      setCurrentUser
    ) =>
      dispatch(
        actions.editMyBookingRow(
          id,
          editing,
          setEditing,
          currentUser,
          setCurrentUser
        )
      ),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MyBookingData);
