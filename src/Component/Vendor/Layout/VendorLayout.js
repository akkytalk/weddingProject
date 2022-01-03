import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { removeVendorLogin } from "../../../reduxStore/actions";
import mogache from "../../../Assets/Images/mogache.jpeg";
import { useSelector } from "react-redux";
import VendorHeader from "./Header/VendorHeader";
import Sidebar from "./Sidebar/Sidebar";

function VendorLayout(props) {
  const vendorLogin = useSelector((state) => state.vendorLogin);
  const handleLogout = async () => {
    await props.removeVendorLogin();
  };

  if (props.vendorLogin?.vendorLogin.length === 0) {
    return <Redirect to={"/vendor"} />;
  } else if (props.vendorLogin?.vendorLogin?.success?.token) {
    return (
      <Fragment>
        <div className="wrapper">
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
          <Sidebar />
        </div>
      </Fragment>
    );
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(VendorLayout);
