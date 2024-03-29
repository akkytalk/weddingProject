import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import {
  editVendorRow,
  removeVendorLogin,
} from "../../../../reduxStore/actions";
import mogache from "../../../../Assets/Images/mogache.jpeg";
import { useSelector } from "react-redux";

function VendorHeader(props) {
  const handleLogout = async () => {
    await props.removeVendorLogin();
  };

  useEffect(() => {
    let id = props.vendorLogin?.vendorLogin?.vendor?.id;
    props.editVendorRow(id);
  }, []);
  return (
    <div className="dashboard-header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-10 col-lg-8 col-md-8 col-sm-6 col-6">
            <div className="header-logo">
              <Link to="/">
                <img
                  src={mogache}
                  style={{
                    maxWidth: "15%",
                    borderRadius: "30px",
                  }}
                  alt="Weddings"
                />
              </Link>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6">
            <nav className="navbar navbar-expand-lg float-right db-nav-list">
              <div>
                <ul className="navbar-nav">
                  {/* <li className="nav-item dropdown dropleft notification ">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdownMenuLink2"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="notification-icon">
                        {" "}
                        <i className="fas fa-bell" />
                      </span>
                      <span className="user-vendor-name" />
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink2"
                    >
                      <li>
                        <div className="notification-title"> Notification</div>
                        <div className="notification-list">
                          <div className="list-group">
                            <a
                              href="#"
                              className="list-group-item list-group-item-action active"
                            >
                              <div className="notification-info">
                                <div className="notification-list-user-img">
                                  <img
                                    src="images/avatar-2.jpg"
                                    alt=""
                                    className="user-avatar-md rounded-circle"
                                  />
                                </div>
                                <div className="notification-list-user-block">
                                  <span className="notification-list-user-name">
                                    Jeremy Rakestraw
                                  </span>
                                  accepted your invitation to join the team.
                                  <div className="notification-date">
                                    2 min ago
                                  </div>
                                </div>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="list-group-item list-group-item-action"
                            >
                              <div className="notification-info">
                                <div className="notification-list-user-img">
                                  <img
                                    src="images/avatar-3.jpg"
                                    alt=""
                                    className="user-avatar-md rounded-circle"
                                  />
                                </div>
                                <div className="notification-list-user-block">
                                  <span className="notification-list-user-name">
                                    John Deo
                                  </span>
                                  is now following you
                                  <div className="notification-date">
                                    2 days ago
                                  </div>
                                </div>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="list-group-item list-group-item-action"
                            >
                              <div className="notification-info">
                                <div className="notification-list-user-img">
                                  <img
                                    src="images/avatar-4.jpg"
                                    alt=""
                                    className="user-avatar-md rounded-circle"
                                  />
                                </div>
                                <div className="notification-list-user-block">
                                  <span className="notification-list-user-name">
                                    Monaan Pechi
                                  </span>{" "}
                                  is watching your main repository
                                  <div className="notification-date">
                                    2 min ago
                                  </div>
                                </div>
                              </div>
                            </a>
                            <a
                              href="#"
                              className="list-group-item list-group-item-action"
                            >
                              <div className="notification-info">
                                <div className="notification-list-user-img">
                                  <img
                                    src="images/avatar-4.jpg"
                                    alt=""
                                    className="user-avatar-md rounded-circle"
                                  />
                                </div>
                                <div className="notification-list-user-block">
                                  <span className="notification-list-user-name">
                                    Jessica Caruso
                                  </span>
                                  accepted your invitation to join the team.
                                  <div className="notification-date">
                                    2 min ago
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list-footer">
                          {" "}
                          <a href="#">View all notifications</a>
                        </div>
                      </li>
                    </ul>
                  </li> */}
                  <li className="nav-item dropdown dropleft user-vendor ">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#4"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="user-icon">
                        {" "}
                        <img
                          src={`https://uditsolutions.in/mogachetest/storage/app/public/files/${props.singleVendor.photographs}`}
                          style={{ width: "45px", height: "30px" }}
                          alt=""
                          className="rounded-circle mb10"
                        />
                      </span>
                      <span className="user-vendor-name">
                        {props.vendorLogin?.vendorLogin?.vendor?.name}
                      </span>
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <Link className="dropdown-item" to="/dashboard">
                        Dashboard
                      </Link>
                      <Link className="dropdown-item" to="/mylisting">
                        {" "}
                        My Listed Item
                      </Link>
                      <Link className="dropdown-item" to="/mybooking">
                        My Booking
                      </Link>
                      <Link className="dropdown-item" to="/requests">
                        Request Quotes
                      </Link>
                      <Link className="dropdown-item" to="/reviews">
                        Reviews{" "}
                      </Link>
                      <Link className="dropdown-item" to="/myprofile">
                        My Profile{" "}
                      </Link>
                      <Link
                        onClick={() => handleLogout()}
                        className="dropdown-item"
                      >
                        Log Out
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(VendorHeader);
