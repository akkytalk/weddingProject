/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import {
  removeVendorLogin,
  updateVendorData,
} from "../../../reduxStore/actions";
import mogache from "../../../Assets/Images/mogache.jpeg";
import "./MyProfile.css";

import { Button } from "reactstrap";
import {
  editVendorRow,
  VendorImageUpload,
} from "../../../reduxStore/actions/vendorCreator";
import axios from "../../../axios";
import VendorHeader from "../Layout/Header/VendorHeader";
import Sidebar from "../Layout/Sidebar/Sidebar";

const MyProfile = (props) => {
  const handleLogout = async () => {
    await props.removeVendorLogin();
  };

  const [progress, setProgress] = useState(0);
  const [image, setImage] = useState({});

  const [vendor, setVendor] = useState([]);

  useEffect(() => {
    let id = props.vendorLogin?.vendorLogin?.vendor?.id;
    props.editVendorRow(id);
  }, []);

  const handleChange = (e) => {
    let files = e.target.files || e.dataTransfer.files;
    if (!files.length) return;
    console.log("e.target.files[0]", files[0]);

    setImage(files[0]);
  };

  async function handleUpload(e) {
    e.preventDefault();

    console.log("images 60", image);
    const data = new FormData();

    const id = props.editVendor?.id;
    data.append("file", image);
    // data.append("id", id);

    console.log("data from myprofile", data);
    // return props.VendorImageUpload(data, progress, setProgress);

    return axios
      .post(`updateImage/${id}?_method=PUT`, data)
      .then((response) => {
        props.editVendorRow(id, vendor, setVendor);
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
  console.log("props.editVendor", props.editVendor?.photographs);

  if (props.vendorLogin?.vendorLogin.length === 0) {
    return <Redirect to={"/vendor"} />;
  } else if (!props.vendorLogin?.vendorLogin.access_token) {
    return (
      <Fragment>
        <div>
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
          <div className="dashboard-wrapper">
            <Sidebar />
            <div className="dashboard-content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xl-12 col-lg-10 col-md-9 col-sm-12 col-12">
                    <div className="dashboard-page-header">
                      <h3 className="dashboard-page-title">
                        Update your profile
                      </h3>
                      {/* <p className="d-block">Update your profile</p> */}
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="image-upload">
                    <img
                      src={`https://uditsolutions.in/mogachetest/storage/app/public/files/${props.editVendor?.photographs}`}
                      alt=""
                    />
                  </div>
                  <div className="imageupload">
                    <progress
                      value={progress}
                      className="imageupload-progress"
                      max="100"
                    />

                    <form onSubmit={handleUpload} encType="multipart/form-data">
                      <input
                        type="file"
                        name="file"
                        label="Profile Picture"
                        onChange={handleChange}
                        multiple
                      />
                      <Button type="submit">Upload</Button>
                    </form>
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
    editVendor: state.vendor.editVendor,
  };
};

const mapDispatchToProps = (dispatch) => ({
  removeVendorLogin: () => {
    dispatch(removeVendorLogin());
  },
  VendorImageUpload: (id, data, progress, setProgress) => {
    dispatch(VendorImageUpload(id, data, progress, setProgress));
  },
  editVendorRow: (id) => {
    dispatch(editVendorRow(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
