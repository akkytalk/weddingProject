/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { editVendorRow, removeVendorLogin } from "../../../reduxStore/actions";
import mogache from "../../../Assets/Images/mogache.jpeg";
import VendorHeader from "../Layout/Header/VendorHeader";
import Sidebar from "../Layout/Sidebar/Sidebar";

const Dash = (props) => {
  useEffect(() => {
    let id = props.vendorLogin?.vendorLogin?.vendor?.id;
    props.editVendorRow(id);
  }, []);

  console.log("props.vendorLogin?.vendorLogin", props.vendorLogin);

  if (props.vendorLogin?.vendorLogin.length === 0) {
    return <Redirect to={"/vendor"} />;
  } else if (props.vendorLogin?.vendorLogin?.success?.token) {
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
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xl-12 col-lg-10 col-md-9 col-sm-12 col-12">
                    <div className="dashboard-page-header">
                      <h3 className="dashboard-page-title">
                        {" "}
                        Hi,{" "}
                        {props.singleVendor?.name
                          ? props.singleVendor?.name
                          : "Vendor"}
                      </h3>
                      <p className="d-block">
                        Here’s what’s happening with your wedding venue business
                        today.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="card card-summary">
                      <div className="card-body">
                        <div className="float-left">
                          <div className="summary-count">6</div>
                          <p>Total Listed Item</p>
                        </div>
                        <div className="summary-icon">
                          <i className="icon-051-wedding-arch" />
                        </div>
                      </div>
                      <div className="card-footer text-center">
                        <a href="#">View All</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="card card-summary">
                      <div className="card-body">
                        <div className="float-left">
                          <div className="summary-count">2</div>
                          <p>Request Quote</p>
                        </div>
                        <div className="summary-icon">
                          <i className="icon-021-love-1" />
                        </div>
                      </div>
                      <div className="card-footer text-center">
                        <a href="#">View All</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="card card-summary">
                      <div className="card-body">
                        <div className="float-left">
                          <div className="summary-count">1</div>
                          <p>Your Reviews</p>
                        </div>
                        <div className="summary-icon">
                          <i className="icon-004-chat" />
                        </div>
                      </div>
                      <div className="card-footer text-center">
                        <a href="#">View All</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="card card-summary">
                      <div className="card-body">
                        <div className="float-left">
                          <div className="summary-count">5</div>
                          <p>My Bookings</p>
                        </div>
                        <div className="summary-icon">
                          <i className="icon-004-chat" />
                        </div>
                      </div>
                      <div className="card-footer text-center">
                        <a href="#">View All</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
    singleVendor: state.vendor.editVendor,
  };
};

const mapDispatchToProps = (dispatch) => ({
  removeVendorLogin: () => {
    dispatch(removeVendorLogin());
  },
  editVendorRow: (id) => {
    dispatch(editVendorRow(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Dash);
