import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link, NavLink, Redirect } from "react-router-dom";
import {
  editVendorRow,
  removeVendorLogin,
} from "../../../../reduxStore/actions";
import mogache from "../../../../Assets/Images/mogache.jpeg";
import { useSelector } from "react-redux";

import "./Sidebar.css";

function Sidebar(props) {
  const handleLogout = async () => {
    await props.removeVendorLogin();
  };

  useEffect(() => {
    let id = props.vendorLogin?.vendorLogin?.vendor?.id;
    props.editVendorRow(id);
  }, []);

  return (
    <div className="dashboard-sidebar offcanvas-collapse">
      <div className="vendor-user-profile">
        <div className="vendor-profile-img">
          <img
            src={`https://uditsolutions.in/mogachetest/storage/app/public/files/${props.singleVendor.photographs}`}
            alt=""
            className="rounded-circle"
            style={{ width: "80px", height: "80px" }}
          />
        </div>
        <h3 className="vendor-profile-name">
          {props.vendorLogin?.vendorLogin?.vendor?.name}
        </h3>
        <NavLink to="/myprofile" className="edit-link">
          edit profile
        </NavLink>
      </div>
      <div className="dashboard-nav">
        <ul className="list-unstyled">
          <li>
            <NavLink
              to="/dashboard"
              activeStyle={{
                fontWeight: "400",
                color: "#ff4d4d",
              }}
            >
              <span className="dash-nav-icon">
                <i className="fas fa-compass" />
              </span>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mylisting"
              activeStyle={{
                fontWeight: "400",
                color: "#ff4d4d",
              }}
            >
              <span className="dash-nav-icon">
                <i className="fas fa-list-alt" />{" "}
              </span>{" "}
              My Listed Item{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mybooking"
              activeStyle={{
                fontWeight: "400",
                color: "#ff4d4d",
              }}
            >
              <span className="dash-nav-icon">
                <i className="fas fa-calculator" />
              </span>
              My Booking
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/requests"
              activeStyle={{
                fontWeight: "400",
                color: "#ff4d4d",
              }}
            >
              <span className="dash-nav-icon">
                <i className="fas fa-edit" />
              </span>
              Request Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reviews"
              activeStyle={{
                fontWeight: "400",
                color: "#ff4d4d",
              }}
            >
              <span className="dash-nav-icon">
                <i className="fas fa-comments" />
              </span>
              Reviews{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myprofile"
              activeStyle={{
                fontWeight: "400",
                color: "#ff4d4d",
              }}
            >
              <span className="dash-nav-icon">
                <i className="fas fa-user-circle" />
              </span>
              My Profile{" "}
            </NavLink>
          </li>
          <li>
            <Link onClick={() => handleLogout()}>
              <span className="dash-nav-icon">
                <i className="fas fa-sign-out-alt" />
              </span>
              Logout{" "}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
