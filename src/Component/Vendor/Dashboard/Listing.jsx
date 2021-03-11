/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";

const Listing = () => {
  return (
    <Fragment>
      <div>
        <div className="dashboard-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-10 col-lg-8 col-md-8 col-sm-6 col-6">
                <div className="header-logo">
                  <a href="index.html">
                    <img
                      src="images/logo.png"
                      alt="Weddings | Find A Wedding Venue & Supplier WordPress Theme"
                    />
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
                            My Listed Item{" "}
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
                          <a className="dropdown-item" href="index.html">
                            Log Out
                          </a>
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
                <li>
                  <a href="vendor-dashboard-overview.html">
                    <span className="dash-nav-icon">
                      <i className="fas fa-compass" />
                    </span>
                    Dashboard
                  </a>
                </li>
                <li className="active">
                  <a href="vendor-dashboard-listing.html">
                    <span className="dash-nav-icon">
                      <i className="fas fa-list-alt" />{" "}
                    </span>{" "}
                    My Listed Item{" "}
                  </a>
                </li>
                <li>
                  <a href="vendor-dashboard-pricing.html">
                    <span className="dash-nav-icon">
                      <i className="fas fa-calculator" />
                    </span>
                    Pricing Plan
                  </a>
                </li>
                <li>
                  <a href="vendor-dashboard-request-quote.html">
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
                  <a href="index.html">
                    <span className="dash-nav-icon">
                      <i className="fas fa-sign-out-alt" />
                    </span>
                    Logout{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="dashboard-content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="dashboard-page-header">
                    <h3 className="dashboard-page-title">My Listing</h3>
                    <p>
                      Lists present multiple line items vertically as a single
                      continuous element.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-right mb20">
                  <a
                    href="vendor-dashboard-add-listing.html"
                    className="btn btn-default btn-sm"
                  >
                    add new Listing
                  </a>
                </div>
              </div>
              <div className="dashboard-vendor-list">
                <ul className="list-unstyled">
                  <li>
                    <div className="dashboard-list-block">
                      <div className="row">
                        <div className="col-xl-2 col-lg-4 col-md-12 col-sm-12 col-12">
                          <div className="dashboard-list-img">
                            <a href="#">
                              <img
                                src="images/dashboard-list-img-1.jpg"
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="col-xl-7 col-lg-5 col-md-6 col-sm-12 col-12 ">
                          <div className="dashboard-list-content">
                            <h3 className="mb0">
                              <a href="#" className="title">
                                Wedding Venue Heading Title
                              </a>
                            </h3>
                            <p>1006 Fantages Way Norway, ME 04268</p>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                          <div className="dashboard-list-btn">
                            <a
                              href="#"
                              className="btn btn-outline-violate btn-xs mr10"
                            >
                              edit
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-pink btn-xs "
                            >
                              delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dashboard-list-block">
                      <div className="row">
                        <div className="col-xl-2 col-lg-4 col-md-12 col-sm-12 col-12">
                          <div className="dashboard-list-img">
                            <a href="#">
                              <img
                                src="images/dashboard-list-img-2.jpg"
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="col-xl-7 col-lg-5 col-md-6 col-sm-12 col-12">
                          <div className="dashboard-list-content">
                            <h3 className="mb0">
                              <a href="#" className="title">
                                Wedding Venue Heading Title
                              </a>
                            </h3>
                            <p>4098 Robinson Court Lachine, MI 49753</p>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 ">
                          <div className="dashboard-list-btn">
                            <a
                              href="#"
                              className="btn btn-outline-violate btn-xs mr10"
                            >
                              edit
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-pink btn-xs "
                            >
                              delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dashboard-list-block">
                      <div className="row">
                        <div className="col-xl-2 col-lg-4 col-md-12 col-sm-12 col-12">
                          <div className="dashboard-list-img">
                            <a href="#">
                              <img
                                src="images/dashboard-list-img-3.jpg"
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="col-xl-7 col-lg-5 col-md-7 col-sm-12 col-12">
                          <div className="dashboard-list-content">
                            <h3 className="mb0">
                              <a href="#" className="title">
                                Wedding Venue Heading Title
                              </a>
                            </h3>
                            <p>3316 Java Lane Orangeburg, SC 29115</p>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                          <div className="dashboard-list-btn">
                            <a
                              href="#"
                              className="btn btn-outline-violate btn-xs mr10"
                            >
                              edit
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-pink btn-xs "
                            >
                              delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dashboard-list-block">
                      <div className="row">
                        <div className="col-xl-2 col-lg-4 col-md-12 col-sm-12 col-12">
                          <div className="dashboard-list-img">
                            <a href="#">
                              <img
                                src="images/dashboard-list-img-4.jpg"
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="col-xl-7 col-lg-5 col-md-6 col-sm-12 col-12">
                          <div className="dashboard-list-content">
                            <h3 className="mb0">
                              <a href="#" className="title">
                                Wedding Venue Heading Title
                              </a>
                            </h3>
                            <p>1006 Fantages Way Norway, ME 04268</p>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                          <div className="dashboard-list-btn">
                            <a
                              href="#"
                              className="btn btn-outline-violate btn-xs mr10"
                            >
                              edit
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-pink btn-xs "
                            >
                              delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dashboard-list-block">
                      <div className="row">
                        <div className="col-xl-2 col-lg-4 col-md-12 col-sm-12 col-12">
                          <div className="dashboard-list-img">
                            <a href="#">
                              <img
                                src="images/dashboard-list-img-5.jpg"
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="col-xl-7 col-lg-5 col-md-6 col-sm-12 col-12">
                          <div className="dashboard-list-content">
                            <h3 className="mb0">
                              <a href="#" className="title">
                                Wedding Venue Heading Title
                              </a>
                            </h3>
                            <p>4098 Robinson Court Lachine, MI 49753</p>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                          <div className="dashboard-list-btn">
                            <a
                              href="#"
                              className="btn btn-outline-violate btn-xs mr10"
                            >
                              edit
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-pink btn-xs "
                            >
                              delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dashboard-list-block">
                      <div className="row">
                        <div className="col-xl-2 col-lg-4 col-md-12 col-sm-12 col-12">
                          <div className="dashboard-list-img">
                            <a href="#">
                              <img
                                src="images/dashboard-list-img-6.jpg"
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="col-xl-7 col-lg-5 col-md-6 col-sm-12 col-12">
                          <div className="dashboard-list-content">
                            <h3 className="mb0">
                              <a href="#" className="title">
                                Wedding Venue Heading Title
                              </a>
                            </h3>
                            <p>3316 Java Lane Orangeburg, SC 29115</p>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                          <div className="dashboard-list-btn">
                            <a
                              href="#"
                              className="btn btn-outline-violate btn-xs mr10"
                            >
                              edit
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-pink btn-xs "
                            >
                              delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dashboard-list-block">
                      <div className="row">
                        <div className="col-xl-2 col-lg-4 col-md-12 col-sm-12 col-12">
                          <div className="dashboard-list-img">
                            <a href="#">
                              <img
                                src="images/dashboard-list-img-4.jpg"
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="col-xl-7 col-lg-5 col-md-6 col-sm-12 col-12">
                          <div className="dashboard-list-content">
                            <h3 className="mb0">
                              <a href="#" className="title">
                                Wedding Venue Heading Title
                              </a>
                            </h3>
                            <p>3316 Java Lane Orangeburg, SC 29115</p>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                          <div className="dashboard-list-btn">
                            <a
                              href="#"
                              className="btn btn-outline-violate btn-xs mr10"
                            >
                              edit
                            </a>
                            <a href="#" className="btn btn-outline-pink btn-xs">
                              delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Listing;
