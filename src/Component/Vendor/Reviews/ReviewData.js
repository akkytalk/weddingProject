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

function ReviewData(props) {
  useEffect(() => {
    console.log("currentUser data from redux ", currentUser);

    props.onReviewGetData();
    props.onReviewGetData();
    props.onDeleteReview();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [user, setUser] = useState({
    vendor_name: props.editVendor?.name,
    vendor_type_name: props.editVendor?.vendor_type?.name,
    user_name: "",
    booking_date: "",
    booking_amount: "",
    advance_amount: "",
    remarks: "",
    reference: "",
    menu: "",
    morning_status: "",
    night_status: "",
  });

  const [editing, setEditing] = useState(false);

  const initialFormState = {
    id: "",
    vendor_name: props.editVendor?.name,
    vendor_type_name: props.editVendor?.vendor_type?.name,
    user_name: "",
    booking_date: "",
    booking_amount: "",
    advance_amount: "",
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
  console.log("props.review", props.review);
  // console.log("editVendor", props.editVendor);
  // console.log("mybooking", props.review);
  // console.log("User data from ", user);
  // console.log("CurrentUser data from ", currentUser);

  return (
    //<div className="container-fluid">
    <Card>
      <CardHeader className="bg-warning text-white">
        <strong>Review</strong>
        {/* <Button className="btn-success  float-right" onClick={toggle}>
          Add Booking
        </Button> */}
        <Modal className="modal-info modal-lg" isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Add New Booking</ModalHeader>
          <ModalBody>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                props.onPostReviewData(user);
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
                    value={!editing ? user.user_name : currentUser?.user_name}
                    name="user_name"
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

                <div className="form-group col-md-12">
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
                          props.onUpdateReviewData(
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
              <th scope="col">Review</th>
              {/* <th scope="col">Booking Amount</th>

              <th scope="col">Advance Amount</th> */}

              {/* <th scope="col">Remarks</th>
              <th scope="col">Reference</th>
              <th scope="col">Menu</th> */}
              {/* <th scope="col">Morning Booking</th>
              <th scope="col">Night Booking</th>
              <th scope="col">Actions</th>
              <th scope="col">Invoice</th> */}
            </tr>
          </thead>
          <tbody>
            {props.review?.length > 0 ? (
              props.review
                ?.filter(
                  (user) => user.user?.id == props.vendorLogin.vendor?.id
                )
                .map((user) => (
                  <tr key={user.id}>
                    {/* <td>{user.id}</td> */}
                    <td>{user?.user?.name}</td>
                    <td>{user.review}</td>
                    {/* <td>{user.booking_amount}</td>
                  <td>{user.advance_amount}</td> */}
                    {/* <td>{user.remarks}</td>
                  <td>{user.reference}</td>
                  <td>{user.menu}</td> */}
                    {/* <td>{user.morning_status == 1 ? "booked" : "not booked"}</td>
                  <td>{user.night_status == 1 ? "booked" : "not booked"}</td> */}

                    <td className="d-flex">
                      {/* <button
                      className="btn-info"
                      onClick={() => {
                        props.onEditReviewRow(
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
                    </button> */}

                      {/* <button
                      className="ml-3"
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are you sure you wish to delete this Account Group?"
                          )
                        )
                          props.onDeleteReview(user.id);
                      }}
                    >
                      <i
                        className="fa fa-trash-alt "
                        value={user.id}
                        aria-hidden="true"
                      ></i>
                    </button> */}
                    </td>
                    {/* <td>
                    {" "}
                    <button className="btn-warning btn-sm">Generate</button>
                  </td> */}
                  </tr>
                ))
            ) : (
              <tr>
                <td colSpan={3}>No users</td>
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
    review: state.review.review,
    editVendor: state.vendor.editVendor,
    vendorLogin: state.vendorLogin,

    //review: state.review
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onReviewGetData: () => dispatch(actions.reviewGetData()),
    onDeleteReview: (id) => dispatch(actions.deleteReview(id)),
    onPostReviewData: (user) => dispatch(actions.postReviewData(user)),
    onUpdateReviewData: (
      id,
      editing,
      setEditing,
      currentUser,
      setCurrentUser
    ) =>
      dispatch(
        actions.updateReviewData(
          id,
          editing,
          setEditing,
          currentUser,
          setCurrentUser
        )
      ),
    onEditReviewRow: (id, editing, setEditing, currentUser, setCurrentUser) =>
      dispatch(
        actions.editReviewRow(
          id,
          editing,
          setEditing,
          currentUser,
          setCurrentUser
        )
      ),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewData);
