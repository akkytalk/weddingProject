import * as actionType from "./ActionType";
import axios from "../../axios";
import swal from "sweetalert";

export const vendorSetData = (vendor) => {
  return {
    type: actionType.VENDOR_SET_DATA,
    vendor: vendor,
  };
};

export const vendorFailData = () => {
  return {
    type: actionType.VENDOR_FAIL_DATA,
  };
};

export const vendorGetData = () => {
  return (dispatch) => {
    axios
      .get("vendors")
      .then((res) => {
        console.log(res.data, "res");
        dispatch(vendorSetData(res.data));
      })

      .catch((error) => dispatch(vendorFailData()));
  };
};

export const deleteVendorFail = () => {
  return {
    type: actionType.DELETE_VENDOR_FAIL,
  };
};

export const deleteVendor = (id) => {
  return (dispatch) => {
    if (id) {
      axios
        .delete(`vendors/${id}`)
        .then(() => {
          console.log("swal");
          swal("Successfully Deleted Account Group!").then(() => {
            window.location.reload();
          });
        })
        .catch((error) => dispatch(deleteVendorFail()));
    }
  };
};

export const postVendorDataStart = () => {
  return {
    type: actionType.POST_VENDOR_DATA_START,
  };
};

export const postVendorDataFail = () => {
  return {
    type: actionType.POST_VENDOR_DATA_FAIL,
  };
};

export const postVendorData = (user) => {
  return (dispatch) => {
    if (!user.name) return;

    dispatch(postVendorDataStart());
    axios
      .post("vendors", user)
      .then(() => {
        console.log("swal");
        swal("Successfully Created Account Group!").then(() => {
          window.location.reload();
        });
      })
      .catch((error) => dispatch(postVendorDataFail()));
    // props.addUser(user);
    // setUser(initialFormState);
  };
};

export const editVendorRowStart = () => {
  return {
    type: actionType.EDIT_VENDOR_ROW_START,
  };
};

export const editVendorSetData = (editVendor) => {
  return {
    type: actionType.EDIT_VENDOR_SET_DATA,
    editVendor: editVendor,
  };
};

export const failEditVendor = () => {
  return {
    type: actionType.FAIL_EDIT_VENDOR,
  };
};

export const editVendorRow = (id, vendor, setVendor) => {
  return (dispatch) => {
    dispatch(editVendorRowStart());
    // setEditing(true);
    axios
      .get(`vendors/${id}`)
      .then((res) => {
        console.log(res.data, "editing data res");
        // setEditing(res.data);
        setVendor(res.data);
        dispatch(editVendorSetData(res.data));
      })
      .catch((error) => dispatch(failEditVendor()));
  };
};

export const updateVendorDataStart = () => {
  return {
    type: actionType.UPDATE_VENDOR_DATA_START,
  };
};

export const updateVendorData = (data) => {
  return (dispatch) => {
    dispatch(updateVendorDataStart());
    //setEditing(false);

    console.log("data", data);
    //const image = data.image;
    axios
      .put(`vendors/${data.id}`, data)
      .then(() => {
        console.log("swal");
        swal("Successfully Updated Vendor details!").then(() => {
          window.location.reload();
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const VendorImageUpload = (data, progress, setProgress) => {
  return (dispatch) => {
    dispatch(updateVendorDataStart());
    //setEditing(false);

    const file = data.file;
    console.log("file", file);
    axios
      .put(`updateImage/${data.id}`, file)
      .then((res) => {
        const progress = Math.round(
          (res.bytesTransferred / res.totalBytes) * 100
        );
        setProgress(progress);
        console.log("swal");
        swal("Successfully Updated Vendor Pic!").then(() => {
          window.location.reload();
        });
      })
      .then((data) => console.log("output", data.json()))
      .catch((error) => {
        console.log(error.response);
      });
  };
};
