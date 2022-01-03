/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { editVendorRow, removeVendorLogin } from "../../../reduxStore/actions";
import mogache from "../../../Assets/Images/mogache.jpeg";
//import * as actions from "../../reduxStore/actions";

import MyListingItems from "./MyListingItems";
import VendorHeader from "../Layout/Header/VendorHeader";
import Sidebar from "../Layout/Sidebar/Sidebar";

const MyListing = (props) => {
  const handleLogout = async () => {
    await props.removeVendorLogin();
  };

  const [vendor, setVendor] = useState([]);

  useEffect(() => {
    let id = props.vendorLogin?.vendorLogin?.vendor?.id;
    props.editVendorRow(id);
  }, []);
  console.log(vendor, "vendor");

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
              <div className="container-fluid">
                <div className="row">
                  {/* <div className="col-xl-12 col-lg-10 col-md-9 col-sm-12 col-12">
                    <div className="dashboard-page-header">
                      <h3 className="dashboard-page-title">
                        Hi,{" "}
                        {props.vendorLogin?.vendorLogin?.vendor?.name
                          ? props.vendorLogin?.vendorLogin?.vendor?.name
                          : "Vendor"}
                      </h3>
                      <p className="d-block">
                        Here’s what’s happening with your wedding venue business
                        today.
                      </p>
                    </div>
                  </div> */}
                </div>
                <div className="row">
                  <MyListingItems vendor={vendor} setVendor={setVendor} />
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

export default connect(mapStateToProps, mapDispatchToProps)(MyListing);
