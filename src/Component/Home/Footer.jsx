/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import mogache from "../../Assets/Images/mogache.jpeg";

const Footer = () => {
  return (
    <Fragment>
      {/* /.social-media-section */}
      {/* footer-section */}
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
              {/* footer-widget */}
              <div
                className="footer-widget"
                style={{
                  display: "flex",
                  flexFlow: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <a href="#">
                  <img
                    src={mogache}
                    alt="logo"
                    className="mb20"
                    style={{
                      maxWidth: "50%",
                      borderRadius: "30px",
                    }}
                  />
                </a>
                <p className="mb10">
                  Vestibulum ante elit, convallis quis nibh in, vulputate
                  rhoncus massa. In hac habitasse platea dictumst.
                </p>
                <p>
                  In hac habitasse platea dictumst simple dummy content here.
                </p>
              </div>
            </div>
            {/* /.footer-widget */}
            {/* footer-widget */}
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="footer-widget">
                <h3 className="widget-title">Contact Address</h3>
                <p className="d-flex">
                  <i className="fas fa-fw fa-map-marker-alt text-default pr-3 pt-1" />
                  4998 Elk Creek Road Canton,
                  <br /> GA 30114
                </p>
                <p className="mb0 d-flex">
                  <i className="fas fa-fw fa-phone-volume text-default pr-3 pt-1" />
                  +0-800-1234-123
                </p>
                <p className="mb0 d-flex">
                  <i className="fas fa-fw fa-envelope text-default pr-3 pt-1 " />
                  info@xxx@.com
                </p>
              </div>
            </div>
            {/* /.footer-widget */}
            {/* footer-widget */}
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-12">
              <div className="footer-widget">
                <h3 className="widget-title">Vendor</h3>
                <ul className="listnone">
                  <li>
                    <Link to="/Vendor">Vendor Login</Link>
                  </li>
                  <li>
                    <Link to="#">City</Link>
                  </li>
                  <li>
                    <Link to="#">Faq</Link>
                  </li>
                  <li>
                    <Link to="#">Pricing Plan</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* /.footer-widget */}
            {/* /.footer-widget */}
            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-6 col-12">
              <div className="footer-widget newsletter-block">
                <h3 className="widget-title">Subscribe to newsletter</h3>
                <form>
                  <div className="form-group">
                    <label htmlFor="email" className="sr-only" />
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      aria-describedby="email"
                      placeholder="Enter Email Address"
                    />
                  </div>
                </form>
                <a href="#" className="btn btn-default">
                  Subscribe
                </a>
              </div>
            </div>
            {/* /.footer-widget */}
          </div>
        </div>
      </div>
      <div className="social-media-block">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-7 col-md-6 col-sm-6 col-12">
              <h3 className="text-white mb0 mt10">
                Would you like to connect with us
              </h3>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-6 col-sm-6 col-12 text-right">
              <div className="social-icons">
                <a href="#" className="icon-square">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#" className="icon-square">
                  <i className="fab fa-twitter" />{" "}
                </a>
                <a href="#" className="icon-square">
                  <i className="fab fa-google-plus-g" />
                </a>
                <a href="#" className="icon-square">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#" className="icon-square">
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
