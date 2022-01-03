/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { removeVendorLogin } from "../../../reduxStore/actions";
import mogache from "../../../Assets/Images/mogache.jpeg";
import ReviewData from "./ReviewData";
import VendorHeader from "../Layout/Header/VendorHeader";
import Sidebar from "../Layout/Sidebar/Sidebar";

const Reviews = (props) => {
  const handleLogout = async () => {
    await props.removeVendorLogin();
  };

  console.log("props.vendorLogin?.vendorLogin", props.vendorLogin);

  if (props.vendorLogin?.vendorLogin.length === 0) {
    return <Redirect to={"/vendor"} />;
  } else if (!props.vendorLogin?.vendorLogin.access_token) {
    return (
      <Fragment>
        <div>
          <VendorHeader />
          <div className="navbar-expand-lg">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="offcanvas"
            >
              <span id="icon-toggle" className="fa fa-bars" />
            </button>
          </div>
          <div className="dashboard-wrapper">
            <Sidebar />
            <div className="dashboard-content">
              <ReviewData />
            </div>
          </div>
        </div>
      </Fragment>
    );
  } else {
    return <div>hello</div>;
  }
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
