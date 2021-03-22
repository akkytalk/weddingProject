/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../reduxStore/actions/index";

const Testimonial = (props) => {
  useEffect(() => {
    props.onVendorGetData();
    props.onVendortypeGetData();
    console.log("vendor data", props.vendor);
    console.log("vendor type data", props.vendortype);
  }, []);
  return (
    <Fragment>
      <div className="space-medium bg-white">
        <div className="container">
          <div className="row">
            <div className="offset-xl-2 col-xl-8 offset-lg-2 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="section-title text-center">
                <h2 className="mb10">Couple Talking About us</h2>
                <p>
                  Our biggest clients. Here's a list of some of our couples
                  testimonials.{" "}
                </p>
              </div>
              {/* /.section title start*/}
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div
                className="op-section op-eight-section section"
                id="section5"
              >
                <div className="ocean-2">
                  <div className="wave-2" />
                  <div className="wave-2" />
                </div>
                <div className="section-eight">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-3 col-sm-3">
                        <div className="container-pe-quote left">
                          <div className="pp-quote li-quote-1">
                            <img src="images/testi-img-1.jpg" alt="" />
                          </div>
                          <div className="pp-quote li-quote-2">
                            <img src="images/testi-img-2.jpg" alt="" />
                          </div>
                          <div className="pp-quote li-quote-3">
                            <img src="images/testi-img-3.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div className="sec-eight-text-area">
                          {/* <img class="" src="assets/images/website/Nana-4.png" alt="">
                                 <h1>MADGE JENNINGS</h1> */}
                          <div className="container-dp-name">
                            <div className="box-dpname dp-name-1 hide-dp-top">
                              <img
                                className
                                src="images/testi-img-1.jpg"
                                alt=""
                              />
                              <h1>Alice McGhee</h1>
                            </div>
                            <div className="box-dpname dp-name-2 hide-dp-top">
                              <img
                                className
                                src="images/testi-img-2.jpg"
                                alt=""
                              />
                              <h1>Josh Hewitt</h1>
                            </div>
                            <div className="box-dpname dp-name-3 hide-dp-top">
                              <img
                                className
                                src="images/testi-img-3.jpg"
                                alt=""
                              />
                              <h1>Victoria Brady</h1>
                            </div>
                            <div className="box-dpname dp-name-4 hide-dp-bottom">
                              <img
                                className
                                src="images/testi-img-4.jpg"
                                alt=""
                              />
                              <h1>Ewan Sanderson</h1>
                            </div>
                            <div className="box-dpname dp-name-5 hide-dp-top">
                              <img
                                className
                                src="images/testi-img-5.jpg"
                                alt=""
                              />
                              <h1>Alice Owens</h1>
                            </div>
                            <div className="box-dpname dp-name-6 hide-dp-top">
                              <img
                                className
                                src="images/testi-img-6.jpg"
                                alt=""
                              />
                              <h1>William Pratt</h1>
                            </div>
                            <div className="box-dpname dp-name-7 look">
                              <img
                                className
                                src="images/testi-img-2.jpg"
                                alt=""
                              />
                              <h1>James Henry</h1>
                            </div>
                          </div>
                          {/* <img class="" src="assets/images/website/quote.png" alt="">                                        
                                 <p>Whether you enjoy city breaks or extended holidays in the sun, you
                                     can always improve your travel experiences by staying in a small,
                                     charming hotel, where the atmosphere is welcoming and friendly and
                                 </p> */}
                          <div className="container-quote">
                            <div className="quote quote-text-1 hide-top">
                              <i className="fas fa-quote-left fa-2x" />
                              <p>
                                Duis mauris justo, fringilla eget malesuada non,
                                dapibus et nisi. Sed id est vitae leo imperdiet
                                dignissim tristique ac nisi. Donec a est sed
                                augue vehicula faucibus. Nullam elementum
                                pretium turpis vel dapibus. Donec malesuada
                                neque eget neque ornare efficitur.
                              </p>
                            </div>
                            <div className="quote quote-text-2 hide-top">
                              <i className="fas fa-quote-left fa-2x" />
                              <p>
                                Interdum et malesuada fames ac ante ipsum primis
                                in faucibus. Fusce convallis condimentum nunc.
                                Sed in imperdiet mi. Phasellus rhoncus, velit
                                vitae varius varius, diam orci tincidunt eros,
                                id scelerisque ante urna ac lacus.
                              </p>
                            </div>
                            <div className="quote quote-text-3 hide-top">
                              <i className="fas fa-quote-left fa-2x" />
                              <p>
                                Vivamus iaculis luctus condimentum. Donec ex
                                tellus, condimentum non aliquam ultricies,
                                condimentum a ligula. Vestibulum orci lorem,
                                vulputate ac elit vel, ornare vestibulum velit.
                              </p>
                            </div>
                            <div className="quote quote-text-4 hide-bottom">
                              <i className="fas fa-quote-left fa-2x" />
                              <p>
                                Nulla malesuada, lorem sit amet ultricies
                                scelerisque, purus arcu iaculis augue, a
                                pellentesque risus mauris finibus hendrerit
                                molestie, ipsum nisl consequat lectus, et
                                aliquamnibh consequat mauried pulvinar maximus
                                nunc.
                              </p>
                            </div>
                            <div className="quote quote-text-5 hide-top">
                              <i className="fas fa-quote-left fa-2x" />
                              <p>
                                {" "}
                                Sed pulvinar maximus nunc. Maecenas vestibulum
                                suscipit rhoncus. Integer dignissim facilisis
                                pellentesque. Vestibulum ante ipsum primis in
                                faucibus orci luctus et ultrices posuere cubilia
                                Curae; Vivamus at ultricfacilisis lorem interdum
                                porttitor.
                              </p>
                            </div>
                            <div className="quote quote-text-6 hide-top">
                              <i className="fas fa-quote-left fa-2x" />
                              <p>
                                {" "}
                                Proin ut neque in lectus ultrices aliquam nec
                                facilisis lacus. Curabitur vel pulvinar tellus,
                                auctor interdum ligula. Vivamus finibus magna
                                nec dignissim finibus. Fusce fringilla velit
                                massa, vitae fermentum erat viverra at.
                              </p>
                            </div>
                            <div className="quote quote-text-7 show">
                              <i className="fas fa-quote-left fa-2x" />
                              <p>
                                Mauris vulputate orci enim, quis aliquet est
                                semper at. Nullam id enim ut felis ultrices
                                vulputate eget mollis felis. Etiam egestas
                                facilisis nunc eget pulvinar. Vestibulum ornare
                                iaculis sem ut aliquet.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-3">
                        <div className="container-pe-quote right">
                          <div className="pp-quote li-quote-4">
                            <img src="images/testi-img-4.jpg" alt="" />
                          </div>
                          <div className="pp-quote li-quote-5">
                            <img src="images/testi-img-5.jpg" alt="" />
                          </div>
                          <div className="pp-quote li-quote-6">
                            <img src="images/testi-img-6.jpg" alt="" />
                          </div>
                          <div className="pp-quote li-quote-7 active">
                            <img src="images/testi-img-2.jpg" alt="" />
                          </div>
                        </div>
                      </div>
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
};

const mapStateToProps = (state) => {
  return {
    vendor: state.vendor.vendor,
    vendortype: state.vendortype.vendortype,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onVendorGetData: () => dispatch(actions.vendorGetData()),
    onVendortypeGetData: () => dispatch(actions.vendortypeGetData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Testimonial);
