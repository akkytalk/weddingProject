/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../../reduxStore/actions";

const Cat1 = (props) => {
  useEffect(() => {
    props.onVendorGetData();
    props.onVendortypeGetData();
    console.log("vendor data", props.vendor);
    console.log("vendor type data", props.vendortype);
  }, []);

  console.log(props);

  // const [viewCount, setViewCount] = useState(6);
  return (
    <Fragment>
      <div>
        <div className="page-header">
          <div className="container">
            <div className="row">
              {/* page caption */}
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                <div className="page-caption">
                  <h1 className="page-title">Vendor Categories</h1>
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
                      <Link to="" className="breadcrumb-link">
                        Home
                      </Link>
                    </li>
                    <li
                      className="breadcrumb-item active text-white"
                      aria-current="page"
                    >
                      Vendor Categories
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          {/* page breadcrumb */}
        </div>
        {/* /.page-header */}
        <div
          className="content"
          style={{
            background:
              "linear-gradient(to bottom right, #33ccff 0%, #ff99cc 100%)",
          }}
        >
          <div className="container">
            <div className="row">
              {props.vendortype.map((ven, index) => (
                <div
                  key={index}
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
                >
                  <div className="card-category">
                    <div className="category-image zoomimg">
                      <Link to={`/category/${ven.id}`}>
                        <img
                          src={ven.image_url}
                          // src={`https://source.unsplash.com/1600x900/?${ven.name}`}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="category-content">
                      <h3 className="cateogry-title">
                        {" "}
                        <Link to={`/category/${ven.id}`}>{ven.name}</Link>{" "}
                        <span className="category-count">
                          ({ven.name.length})
                        </span>
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="card-category">
                  <div className="category-image zoomimg">
                    <Link to="/category">
                      <img src="images/catergory-venue.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="category-content">
                    <h3 className="cateogry-title">
                      {" "}
                      <Link to="/category">Venue</Link>{" "}
                      <span className="category-count">(12)</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="card-category">
                  <div className="category-image zoomimg">
                    <Link to="/photos">
                      <img src="images/catergory-photographer.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="category-content">
                    <h3 className="cateogry-title">
                      {" "}
                      <Link to="photos">Photographer</Link>{" "}
                      <span className="category-count">(2)</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="card-category">
                  <div className="category-image zoomimg">
                    <Link to="/florist">
                      <img src="images/catergory-florist.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="category-content">
                    <h3 className="cateogry-title">
                      <Link to="/florist">Florist</Link>{" "}
                      <span className="category-count">(3)</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="card-category">
                  <div className="category-image zoomimg">
                    <Link to="/cakes">
                      <img src="images/wedding-cake-small.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="category-content">
                    <h3 className="cateogry-title">
                      {" "}
                      <Link to="/cakes">Wedding Cakes</Link>{" "}
                      <span className="category-count">(4)</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="card-category">
                  <div className="category-image zoomimg">
                    <Link to="/weddingdress">
                      <img src="images/wedding-dresses-small.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="category-content">
                    <h3 className="cateogry-title">
                      {" "}
                      <Link to="/weddingdress">
                        Bridal & Groom Dresses
                      </Link>{" "}
                      <span className="category-count">(8)</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="card-category">
                  <div className="category-image zoomimg">
                    <Link to="/dj">
                      <img src="images/wedding-dj-small.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="category-content">
                    <h3 className="cateogry-title">
                      <Link to="/dj">Dj</Link>{" "}
                      <span className="category-count">(6)</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div> */}
            {/*  */}

            {/* <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="card-category">
                  <div className="category-image zoomimg">
                    <Link to="/food">
                      <img
                        src="https://cdn.shopify.com/s/files/1/0115/1578/9369/articles/wedding-buffet-menu-ideas_512x.png?v=1571263706"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="category-content">
                    <h3 className="cateogry-title">
                      {" "}
                      <Link to="/food">Food And Services</Link>{" "}
                      <span className="category-count">(12)</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="card-category">
                  <div className="category-image zoomimg">
                    <Link to="/Makeup">
                      <img
                        src="https://lh3.googleusercontent.com/sMvYUcc8N9i6SFTIqU6xbzwFA8mqDQa8iazJhuu2s1VJ1xfBkv3yd-uvW-HmbKbQAgh6Yzntzg8vSbiZ=w1080-h608-p-no-v0"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="category-content">
                    <h3 className="cateogry-title">
                      {" "}
                      <Link to="/Makeup">Make up</Link>{" "}
                      <span className="category-count">(2)</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="card-category">
                  <div className="category-image zoomimg">
                    <Link to="/weddingplanner">
                      <img
                        src="https://asset2.zankyou.com/images/mag-post/3f0/c85f/685//-/in/wp-content/uploads/2016/11/Bharti-Siddharth-Delhi.png"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="category-content">
                    <h3 className="cateogry-title">
                      <Link to="/category">Weddng Planner</Link>{" "}
                      <span className="category-count">(3)</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="card-category">
                  <div className="category-image zoomimg">
                    <Link to="/jewles">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5jFqfhMDP5-vM4ERhhjH-4D_poExfLBaFfA&usqp=CAU"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="category-content">
                    <h3 className="cateogry-title">
                      {" "}
                      <Link to="/category">Jewellery</Link>{" "}
                      <span className="category-count">(4)</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="card-category">
                  <div className="category-image zoomimg">
                    <Link to="/pandit">
                      <img
                        src="https://media.weddingsonly.in/vendor/pandit.rajesh.mishra.delhi/Featured.jpg"
                        style={{ height: "180px" }}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="category-content">
                    <h3 className="cateogry-title">
                      {" "}
                      <Link to="">Pandits & More</Link>{" "}
                      <span className="category-count">(8)</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="card-category">
                  <div className="category-image zoomimg">
                    <Link to="/mendhi">
                      <img
                        src="https://i.pinimg.com/736x/e8/da/53/e8da53fcef1a754cf7061857cdc59e2e.jpg"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="category-content">
                    <h3 className="cateogry-title">
                      <Link to="">Mehndi</Link>{" "}
                      <span className="category-count">(6)</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Cat1);
