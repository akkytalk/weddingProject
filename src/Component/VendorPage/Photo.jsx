/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState } from "react";
import Footer from "../Home/Footer";
import Header from "../Home/Header";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../reduxStore/actions";
import { useEffect } from "react";

const Photo = (props) => {
  console.log("params", props.params);
  console.log("vendor type", props.vendortype);
  const [vendorType, setVendorType] = useState([]);
  //const [vendor, setVendor] = useState([]);

  useEffect(() => {
    props.vendortype.map((ventype) => {
      if (ventype.id == props.params) {
        console.log("hii successful");
        setVendorType(ventype);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //   useEffect(() => {
  //     props.vendor.map((ven) => {
  //       if (ven.vendor_type_id == props.params) {
  //         console.log("hii successful");
  //         setVendor(ven);
  //       }
  //     });
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [props.vendor]);

  console.log("vendor type", vendorType);
  // console.log("vendor", vendor);
  console.log("vendor", props.vendor);

  return (
    <Fragment>
      <Header />
      <div className="page-header">
        <div className="container">
          <div className="row">
            {/* page caption */}
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
              <div className="page-caption">
                <h1 className="page-title">{vendorType.name}</h1>
              </div>
            </div>
            {/* /.page caption */}
          </div>
        </div>
        {/* page caption */}
        <div className="page-breadcrumb">
          <div className="container">
            <div className="row">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/" className="breadcrumb-link">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/vendorprofile" className="breadcrumb-link">
                      Supplier List
                    </Link>
                  </li>
                  <li
                    className="breadcrumb-item active text-white"
                    aria-current="page"
                  >
                    {vendorType.name}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        {/* page breadcrumb */}
      </div>
      <div className="content">
        <div className="container">
          <div className="row">
            {props.vendor?.map((ven, index) => {
              if (ven.vendor_type_id == props.params) {
                return (
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="vendor-thumbnail">
                      {/* Vendor thumbnail */}
                      <div className="vendor-img">
                        {/* Vendor img */}
                        <Link to={`/cat/${ven.id}`}>
                          <img
                            src={
                              ven?.photographs
                                ? `https://uditsolutions.in/mogachetest/storage/app/public/files/${ven.photographs}`
                                : "https://icon-library.com/images/no-profile-picture-icon/no-profile-picture-icon-21.jpg"
                            }
                            alt=""
                            className="img-fluid"
                          />
                        </Link>
                        {/* <div className="wishlist-sign">
                          <Link to={`/cat/${ven.id}`} className="btn-wishlist">
                            <i className="fa fa-heart" />
                          </Link>
                        </div> */}
                      </div>
                      {/* /.Vendor img */}
                      <div className="vendor-content">
                        {/* Vendor Content */}
                        <h2 className="vendor-title">
                          <Link to={`/cat/${ven.id}`} className="title">
                            {ven.name}{" "}
                          </Link>
                        </h2>
                        <p className="vendor-address">{ven.address}</p>
                      </div>
                      {/* /.Vendor Content */}
                      <div className="vendor-meta">
                        <div className="vendor-meta-item vendor-meta-item-bordered">
                          <span className="vendor-price">
                            ${ven.package_price}
                          </span>
                          <span className="vendor-text">Start From</span>
                        </div>
                        <div className="vendor-meta-item vendor-meta-item-bordered">
                          <span className="rating-star">
                            <i className="fa fa-star rated" />
                            <i className="fa fa-star rated" />
                            <i className="fa fa-star rated" />
                            <i className="fa fa-star rated" />
                            <i className="fa fa-star rate-mute" />
                          </span>
                          <span className="rating-count vendor-text">(20)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
            {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="vendor-thumbnail">
                
                <div className="vendor-img">
                  
                  <Link to="/cat">
                    <img
                      src="images/supplier-photographer-1.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                  <div className="wishlist-sign">
                    <Link to="/cat" className="btn-wishlist">
                      <i className="fa fa-heart" />
                    </Link>
                  </div>
                </div>
                
                <div className="vendor-content">
                  
                  <h2 className="vendor-title">
                    <Link to="/cat" className="title">
                      Alex Doe Photographer{" "}
                    </Link>
                  </h2>
                  <p className="vendor-address">Baroda, Gujarat.</p>
                </div>
                
                <div className="vendor-meta">
                  <div className="vendor-meta-item vendor-meta-item-bordered">
                    <span className="vendor-price">$150</span>
                    <span className="vendor-text">Start From</span>
                  </div>
                  <div className="vendor-meta-item vendor-meta-item-bordered">
                    <span className="rating-star">
                      <i className="fa fa-star rated" />
                      <i className="fa fa-star rated" />
                      <i className="fa fa-star rated" />
                      <i className="fa fa-star rated" />
                      <i className="fa fa-star rate-mute" />
                    </span>
                    <span className="rating-count vendor-text">(20)</span>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="vendor-thumbnail">
               
                <div className="vendor-img">
                  
                  <Link to="/cat">
                    <img
                      src="images/supplier-photographer-2.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                  <div className="wishlist-sign">
                    <Link to="/cat" className="btn-wishlist">
                      <i className="fa fa-heart" />
                    </Link>
                  </div>
                </div>
             
                <div className="vendor-content">
                
                  <h2 className="vendor-title">
                    <Link to="/cat" className="title">
                      Mariano Photographer{" "}
                    </Link>
                  </h2>
                  <p className="vendor-address">Surat, India</p>
                </div>
              
                <div className="vendor-meta">
                  <div className="vendor-meta-item vendor-meta-item-bordered">
                    <span className="vendor-price">$150</span>
                    <span className="vendor-text">Start From</span>
                  </div>
                  <div className="vendor-meta-item vendor-meta-item-bordered">
                    <span className="rating-star">
                      <i className="fa fa-star rated" />
                      <i className="fa fa-star rated" />
                      <i className="fa fa-star rated" />
                      <i className="fa fa-star rated" />
                      <i className="fa fa-star rate-mute" />
                    </span>
                    <span className="rating-count vendor-text">(20)</span>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="vendor-thumbnail">
              
                <div className="vendor-img">
                 
                  <Link to="/cat">
                    <img
                      src="images/supplier-photographer-3.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                  <div className="wishlist-sign">
                    <Link to="/cat" className="btn-wishlist">
                      <i className="fa fa-heart" />
                    </Link>
                  </div>
                </div>
                
                <div className="vendor-content">
                 
                  <h2 className="vendor-title">
                    <Link to="/cat" className="title">
                      Kawin Photographer{" "}
                    </Link>
                  </h2>
                  <p className="vendor-address">Baroda, Gujarat.</p>
                </div>
                
                <div className="vendor-meta">
                  <div className="vendor-meta-item vendor-meta-item-bordered">
                    <span className="vendor-price">$150</span>
                    <span className="vendor-text">Start From</span>
                  </div>
                  <div className="vendor-meta-item vendor-meta-item-bordered">
                    <span className="rating-star">
                      <i className="fa fa-star rated" />
                      <i className="fa fa-star rated" />
                      <i className="fa fa-star rated" />
                      <i className="fa fa-star rated" />
                      <i className="fa fa-star rate-mute" />
                    </span>
                    <span className="rating-count vendor-text">(20)</span>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="vendor-thumbnail">
                
                <div className="vendor-img">
                  
                  <a href="#">
                    <img
                      src="images/supplier-photographer-4.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                  <div className="wishlist-sign">
                    <a href="#" className="btn-wishlist">
                      <i className="fa fa-heart" />
                    </a>
                  </div>
                </div>
                
                <div className="vendor-content">
                  
                  <h2 className="vendor-title">
                    <a href="#" className="title">
                      Coffman Studio
                    </a>
                  </h2>
                  <p className="vendor-address">Baroda, Gujarat.</p>
                </div>
                
                <div className="vendor-meta">
                  <div className="vendor-meta-item vendor-meta-item-bordered">
                    <span className="vendor-price">$150</span>
                    <span className="vendor-text">Start From</span>
                  </div>
                  <div className="vendor-meta-item vendor-meta-item-bordered">
                    <span className="rating-star">
                      <i className="fa fa-star rated" />
                      <i className="fa fa-star rated" />
                      <i className="fa fa-star rated" />
                      <i className="fa fa-star rated" />
                      <i className="fa fa-star rate-mute" />
                    </span>
                    <span className="rating-count vendor-text">(20)</span>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="vendor-thumbnail">
                
                <div className="vendor-img">
                 
                  <a href="#">
                    <img
                      src="images/supplier-photographer-5.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                  <div className="wishlist-sign">
                    <a href="#" className="btn-wishlist">
                      <i className="fa fa-heart" />
                    </a>
                  </div>
                </div>
               
                <div className="vendor-content">
              
                  <h2 className="vendor-title">
                    <a href="#" className="title">
                      Maddy Photographer{" "}
                    </a>
                  </h2>
                  <p className="vendor-address">Baroda, Gujarat.</p>
                </div>
   
                <div className="vendor-meta">
                  <div className="vendor-meta-item vendor-meta-item-bordered">
                    <span className="vendor-price">$150</span>
                    <span className="vendor-text">Start From</span>
                  </div>
                  <div className="vendor-meta-item vendor-meta-item-bordered">
                    <span className="rating-star">
                      <i className="fa fa-star rated" />
                      <i className="fa fa-star rated" />
                      <i className="fa fa-star rated" />
                      <i className="fa fa-star rated" />
                      <i className="fa fa-star rate-mute" />
                    </span>
                    <span className="rating-count vendor-text">(20)</span>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="vendor-thumbnail">
                
                <div className="vendor-img">
                  
                  <a href="#">
                    <img
                      src="images/supplier-photographer-6.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                  <div className="wishlist-sign">
                    <a href="#" className="btn-wishlist">
                      <i className="fa fa-heart" />
                    </a>
                  </div>
                </div>
                
                <div className="vendor-content">
                 
                  <h2 className="vendor-title">
                    <a href="#" className="title">
                      Annie Photographer{" "}
                    </a>
                  </h2>
                  <p className="vendor-address">Baroda, Gujarat.</p>
                </div>
                
                <div className="vendor-meta">
                  <div className="vendor-meta-item vendor-meta-item-bordered">
                    <span className="vendor-price">$150</span>
                    <span className="vendor-text">Start From</span>
                  </div>
                  <div className="vendor-meta-item vendor-meta-item-bordered">
                    <span className="rating-star">
                      <i className="fa fa-star rated" />
                      <i className="fa fa-star rated" />
                      <i className="fa fa-star rated" />
                      <i className="fa fa-star rated" />
                      <i className="fa fa-star rate-mute" />
                    </span>
                    <span className="rating-count vendor-text">(20)</span>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="vendor-thumbnail">
                
                <div className="vendor-img">
             
                  <a href="#">
                    <img
                      src="images/supplier-photographer-7.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                  <div className="wishlist-sign">
                    <a href="#" className="btn-wishlist">
                      <i className="fa fa-heart" />
                    </a>
                  </div>
                </div>
              
                <div className="vendor-content">
                
                  <h2 className="vendor-title">
                    <a href="#" className="title">
                      {" "}
                      Antionette Photographer
                    </a>
                  </h2>
                  <p className="vendor-address">Baroda, Gujarat.</p>
                </div>
             
                <div className="vendor-meta">
                  <div className="vendor-meta-item vendor-meta-item-bordered">
                    <span className="vendor-price">$150</span>
                    <span className="vendor-text">Start From</span>
                  </div>
                  <div className="vendor-meta-item vendor-meta-item-bordered">
                    <span className="rating-star">
                      <i className="fa fa-star rated" />
                      <i className="fa fa-star rated" />
                      <i className="fa fa-star rated" />
                      <i className="fa fa-star rated" />
                      <i className="fa fa-star rate-mute" />
                    </span>
                    <span className="rating-count vendor-text">(20)</span>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="vendor-thumbnail">
               
                <div className="vendor-img">
                 
                  <a href="#">
                    <img
                      src="images/supplier-photographer-8.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                  <div className="wishlist-sign">
                    <a href="#" className="btn-wishlist">
                      <i className="fa fa-heart" />
                    </a>
                  </div>
                </div>
                
                <div className="vendor-content">
                  
                  <h2 className="vendor-title">
                    <a href="#" className="title">
                      Levi Alvarez Studio
                    </a>
                  </h2>
                  <p className="vendor-address">Baroda, Gujarat.</p>
                </div>
            
                <div className="vendor-meta">
                  <div className="vendor-meta-item vendor-meta-item-bordered">
                    <span className="vendor-price">$150</span>
                    <span className="vendor-text">Start From</span>
                  </div>
                  <div className="vendor-meta-item vendor-meta-item-bordered">
                    <span className="rating-star">
                      <i className="fa fa-star rated" />
                      <i className="fa fa-star rated" />
                      <i className="fa fa-star rated" />
                      <i className="fa fa-star rated" />
                      <i className="fa fa-star rate-mute" />
                    </span>
                    <span className="rating-count vendor-text">(20)</span>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="vendor-thumbnail">
               
                <div className="vendor-img">
                  
                  <a href="#">
                    <img
                      src="images/supplier-photographer-9.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                  <div className="wishlist-sign">
                    <a href="#" className="btn-wishlist">
                      <i className="fa fa-heart" />
                    </a>
                  </div>
                </div>
               
                <div className="vendor-content">
                  
                  <h2 className="vendor-title">
                    <a href="#" className="title">
                      Lanty Wedding Studio
                    </a>
                  </h2>
                  <p className="vendor-address">Mumbai, India</p>
                </div>
                
                <div className="vendor-meta">
                  <div className="vendor-meta-item vendor-meta-item-bordered">
                    <span className="vendor-price">$150</span>
                    <span className="vendor-text">Start From</span>
                  </div>
                  <div className="vendor-meta-item vendor-meta-item-bordered">
                    <span className="rating-star">
                      <i className="fa fa-star rated" />
                      <i className="fa fa-star rated" />
                      <i className="fa fa-star rated" />
                      <i className="fa fa-star rated" />
                      <i className="fa fa-star rate-mute" />
                    </span>
                    <span className="rating-count vendor-text">(20)</span>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          {/* <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="pagination justify-content-center">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Previous
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link " href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    vendor: state.vendor.vendor,
    vendortype: state.vendortype.vendortype,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onVendorGetData: () => dispatch(actions.vendorGetData()),
  onVendortypeGetData: () => dispatch(actions.vendortypeGetData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Photo);
