/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { removeVendorLogin } from "../../../reduxStore/actions";
const Dash = (props) => {
  const handleLogout = async () => {
    await props.removeVendorLogin();
  };

  console.log("props.vendorLogin?.vendorLogin", props.vendorLogin?.vendorLogin);

  if (props.vendorLogin?.vendorLogin.length === 0) {
    return <Redirect to={"/vendor"} />;
  } else if (!props.vendorLogin?.vendorLogin.access_token) {
    return (
      <Fragment>
        <div>
          <div className="dashboard-header">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-10 col-lg-8 col-md-8 col-sm-6 col-6">
                  <div className="header-logo">
                    <a href="index.html">
                      <img src="images/logo.png" alt="Weddings" />
                    </a>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6">
                  <nav className="navbar navbar-expand-lg float-right db-nav-list">
                    <div>
                      <ul className="navbar-nav">
                        <li className="nav-item dropdown dropleft notification ">
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
                              <div className="notification-title">
                                {" "}
                                Notification
                              </div>
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
                                        accepted your invitation to join the
                                        team.
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
                                        accepted your invitation to join the
                                        team.
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
                        </li>
                        <li className="nav-item dropdown dropleft user-vendor ">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span className="user-icon">
                              {" "}
                              <img
                                src="images/dashboard-profile.jpg"
                                alt=""
                                className="rounded-circle mb10"
                              />
                            </span>
                            <span className="user-vendor-name">John Deo</span>
                          </a>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdownMenuLink"
                          >
                            <a
                              className="dropdown-item"
                              href="vendor-dashboard-overview.html"
                            >
                              Dashboard
                            </a>
                            <a
                              className="dropdown-item"
                              href="vendor-dashboard-listing.html"
                            >
                              {" "}
                              My Listed Item
                            </a>
                            <a
                              className="dropdown-item"
                              href="vendor-dashboard-pricing.html"
                            >
                              Pricing Plan
                            </a>
                            <a
                              className="dropdown-item"
                              href="vendor-dashboard-request-quote.html"
                            >
                              Request Quotes
                            </a>
                            <a
                              className="dropdown-item"
                              href="vendor-dashboard-reviews.html"
                            >
                              Reviews{" "}
                            </a>
                            <a
                              className="dropdown-item"
                              href="vendor-dashboard-profile.html"
                            >
                              My Profile{" "}
                            </a>
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
            <div className="dashboard-sidebar offcanvas-collapse">
              <div className="vendor-user-profile">
                <div className="vendor-profile-img">
                  <img
                    src="images/dashboard-profile.jpg"
                    alt=""
                    className="rounded-circle"
                  />
                </div>
                <h3 className="vendor-profile-name">John Deo</h3>
                <a href="#" className="edit-link">
                  edit profile
                </a>
              </div>
              <div className="dashboard-nav">
                <ul className="list-unstyled">
                  <li className="active">
                    <Link to="/dashboard">
                      <span className="dash-nav-icon">
                        <i className="fas fa-compass" />
                      </span>
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link to="/listing">
                      <span className="dash-nav-icon">
                        <i className="fas fa-list-alt" />{" "}
                      </span>{" "}
                      My Listed Item{" "}
                    </Link>
                  </li>
                  <li>
                    <a href="">
                      <span className="dash-nav-icon">
                        <i className="fas fa-calculator" />
                      </span>
                      Pricing Plan
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span className="dash-nav-icon">
                        <i className="fas fa-edit" />
                      </span>
                      Request Quotes
                    </a>
                  </li>
                  <li>
                    <a href="vendor-dashboard-reviews.html">
                      <span className="dash-nav-icon">
                        <i className="fas fa-comments" />
                      </span>
                      Reviews{" "}
                    </a>
                  </li>
                  <li>
                    <a href="vendor-dashboard-profile.html">
                      <span className="dash-nav-icon">
                        <i className="fas fa-user-circle" />
                      </span>
                      My Profile{" "}
                    </a>
                  </li>
                  <li>
                    <Link to="#">
                      <span className="dash-nav-icon">
                        <i className="fas fa-sign-out-alt" />
                      </span>
                      Logout{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="dashboard-content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xl-12 col-lg-10 col-md-9 col-sm-12 col-12">
                    <div className="dashboard-page-header">
                      <h3 className="dashboard-page-title">Hi, Vendor.</h3>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Dash);
