import { baseUrl } from "../../shared/baseUrl";
import { toast } from "react-toastify";

import { addLogin, loginFailed, loginLoading } from "./UserLoginCreators";

const myheader = new Headers({
  Accept: "application/json",
  "Content-Type": "application/json",
});

export const postSignup = (data) => (dispatch) => {
  dispatch(loginLoading(true));
  console.log(data, myheader);
  return fetch(baseUrl + "userRegister", {
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
    .then((login) => {
      console.log(login);
      if (login.error) {
        toast.error("UnAuthorized");
        dispatch(loginFailed(login.error));
      } else {
        toast.success("Login Successfull!");
        dispatch(addLogin(login));
        window.location.reload();
      }
    })
    .catch((error) => {
      dispatch(loginFailed(error));
    });
};
