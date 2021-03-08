/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import UserLogin from "../User/UserLogin";
import mogache from "../../Assets/Images/mogache.jpeg";
import { connect } from "react-redux";

import * as actions from "../../reduxStore/actions/index";
//import { Button } from "reactstrap";

const Header = (props) => {
  useEffect(() => {
    props.onVendorGetData();
    props.onVendortypeGetData();
    console.log("vendor data", props.vendor);
    console.log("vendor type data", props.vendortype);
  }, []);

  console.log("login data from header", props.login?.login.data);

  // const [isDisabled, setIsDisabled] = useState(false);

  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     setIsDisabled(false);
  //   }, 2000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  //const [viewCount, setViewCount] = useState(6);

  function refreshPage() {
    window.location.href = "/";
  }

  async function handleLogout() {
    await props.removeLogin();
    //refreshPage();
  }
  return (
    <Fragment>
      <div className="header-transparent">
        {/* navigation start */}
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <nav className="navbar navbar-expand-lg navbar-transparent">
                <Link className="navbar-brand" to="/">
                  {" "}
                  <img
                    src={mogache}
                    style={{
                      height: "50px",
                      borderRadius: "20px",
                      borderBlockStartColor: "black",
                    }}
                    alt="WEDDING Mogache"
                  />
                </Link>
                <button
                  className="navbar-toggler collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbar-transparent"
                  aria-controls="navbar-transparent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar top-bar mt-0" />
                  <span className="icon-bar middle-bar" />
                  <span className="icon-bar bottom-bar" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbar-transparent"
                >
                  <ul className="navbar-nav ml-auto mt-2 mt-lg-0 mr-lg-auto">
                    <li className="nav-item dropdown ">
                      <Link
                        className="nav-link mr-5"
                        to="/"
                        id="menu-1"
                        onClick={refreshPage}
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Homepage
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link mr-5"
                        to="/gallery"
                        id="menu-2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Gallery
                      </Link>
                    </li>
                    {/* <li className="nav-item dropdown">
                                            <Link className="nav-link mr-5" to="/vendorprofile" id="menu-3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Vendors
                                            </Link>
                                        </li> */}
                    <li className="nav-item dropdown mega-dropdown">
                      <Link
                        className="nav-link mr-5"
                        to="/vendorprofile"
                        id="menu-6"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Vendors
                      </Link>
                      <ul
                        className="dropdown-menu mega-dropdown-menu"
                        aria-labelledby="menu-6"
                      >
                        <li className="row">
                          <ul className="col">
                            {props.vendortype?.slice(0, 5).map((ven, index) => (
                              <li key={index}>
                                <Link
                                  className="dropdown-item"
                                  to={`/category/${ven.id}`}
                                >
                                  {ven.name}
                                </Link>
                              </li>
                            ))}
                          </ul>

                          <ul className="col">
                            {props.vendortype
                              ?.slice(5, 10)
                              .map((ven, index) => (
                                <li key={index}>
                                  <Link
                                    className="dropdown-item"
                                    to={`/category/${ven.id}`}
                                  >
                                    {ven.name}
                                  </Link>
                                </li>
                              ))}
                          </ul>

                          {/* <ul className="col">
                            <li>
                              <Link className="dropdown-item" to="/category">
                                Venue
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="/photos">
                                Photographer
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="/florist">
                                Florist
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="/cakes">
                                Wedding Cakes
                              </Link>
                            </li>
                          </ul>
                          <ul className="col">
                            <li>
                              <Link
                                className="dropdown-item"
                                to="/weddingdress"
                              >
                                Bridal & Groom Dresses
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="/dj">
                                Dj
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="/food">
                                Food And Services
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="/Makeup">
                                Make up
                              </Link>
                            </li>
                          </ul>
                          <ul className="col">
                            <li>
                              <Link
                                className="dropdown-item"
                                to="/weddingplanner"
                              >
                                Weddng Planner
                              </Link>
                            </li>

                            <li>
                              <Link className="dropdown-item" to="/pandit">
                                Pandits & More
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="/mendhi">
                                Mehndi
                              </Link>
                            </li>
                          </ul> */}
                        </li>

                        <li>
                          <Link className="dropdown-item" to="/vendorprofile">
                            All Wedding vendors
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link mr-5"
                        to="/contact"
                        id="menu-4"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Contact
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link mr-5"
                        to="/aboutus"
                        id="menu-5"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        About
                      </Link>
                    </li>

                    {props.login?.login?.length === 0 ? (
                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link mr-5"
                          // to=""
                          id="menu-7"
                          data-toggle="modal"
                          data-target="#exampleModal"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Login
                        </Link>
                      </li>
                    ) : (
                      <li className="nav-item dropdown" onClick={handleLogout}>
                        <Link className="nav-link mr-5"> Logout </Link>{" "}
                      </li>
                    )}
                  </ul>
                  <Link to="/" className="btn btn-default btn-sm">
                    Get Started Now
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
        {/* navigation close */}
      </div>
      {/* modal */}

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content" style={{ backgroundColor: "#ebabac" }}>
            <div className="modal-body">
              <UserLogin />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    login: state.login,
    vendor: state.vendor.vendor,
    vendortype: state.vendortype.vendortype,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeLogin: () => {
      dispatch(actions.removeLogin());
    },
    onVendorGetData: () => dispatch(actions.vendorGetData()),
    onVendortypeGetData: () => dispatch(actions.vendortypeGetData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
