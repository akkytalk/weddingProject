import * as ActionTypes from "./ActionType";
import { baseUrl } from "../../shared/baseUrl";
import { toast } from "react-toastify";
// import axios from "../../axios";
// import swal from "sweetalert";

const myheader = new Headers({
  Accept: "application/json",
  "Content-Type": "application/json",
});

// export const postVendorLogin = (data) => {
//   return (dispatch) => {
//     dispatch(vendorLoginLoading(true));
//     axios
//       .post("userVendorLogin", data, {
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//       })
//       .then((vendorLogin) => {
//         console.log(vendorLogin);
//         dispatch(addVendorLogin(vendorLogin));
//         window.location.reload();
//       })
//       .catch((error) => dispatch(vendorLoginFailed(error)));
//   };
// };

export const postVendorLogin = (data) => (dispatch) => {
  dispatch(vendorLoginLoading(true));
  console.log(data, myheader);
  return fetch(baseUrl + "vendorLogin", {
    method: "post",
    headers: myheader,
    body: JSON.stringify(data),
  })
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response;
      }
      let error = new Error(
        "Error:" + response.status + " " + response.statusText
      );
      error.response = response;
      throw error;
    })
    .then((response) => response.json())
    .then((vendorLogin) => {
      console.log(vendorLogin);
      if (vendorLogin.error) {
        toast.error("UnAuthorized");
        dispatch(vendorLoginFailed(vendorLogin.error));
      } else {
        toast.success("VendorLogin Successfull!");
        dispatch(addVendorLogin(vendorLogin));
        // window.location.reload();
      }
    })
    .catch((error) => {
      dispatch(vendorLoginFailed(error));
    });
};

export const addVendorLogin = (vendorLogin) => ({
  type: ActionTypes.ADD_VENDOR_LOGIN,
  vendorLogin: vendorLogin,
});

export const vendorLoginLoading = () => ({
  type: ActionTypes.VENDOR_LOGIN_LOADING,
});

export const vendorLoginFailed = (errMess) => ({
  type: ActionTypes.VENDOR_LOGIN_FAILED,
  payload: errMess,
});

export const removeVendorLogin = () => ({
  type: ActionTypes.REMOVE_VENDOR_LOGIN,
  vendorLogin: [],
});
