import * as actionType from "./ActionType";
import axios from "../../axios";
import swal from "sweetalert";

export const vendortypeSetData = (vendortype) => {
  return {
    type: actionType.VENDORTYPE_SET_DATA,
    vendortype: vendortype,
  };
};

export const vendortypeFailData = () => {
  return {
    type: actionType.VENDORTYPE_FAIL_DATA,
  };
};

export const vendortypeGetData = () => {
  return (dispatch) => {
    axios
      .get("vendortypes")
      .then((res) => {
        console.log(res.data, "res");
        dispatch(vendortypeSetData(res.data));
      })

      .catch((error) => dispatch(vendortypeFailData()));
  };
};

export const deleteVendortypeFail = () => {
  return {
    type: actionType.DELETE_VENDORTYPE_FAIL,
  };
};

export const deleteVendortype = (id) => {
  return (dispatch) => {
    if (id) {
      axios
        .delete(`vendortypes/${id}`)
        .then(() => {
          console.log("swal");
          swal("Successfully Deleted Account Group!").then(() => {
            window.location.reload();
          });
        })
        .catch((error) => dispatch(deleteVendortypeFail()));
    }
  };
};

export const postVendortypeDataStart = () => {
  return {
    type: actionType.POST_VENDORTYPE_DATA_START,
  };
};

export const postVendortypeDataFail = () => {
  return {
    type: actionType.POST_VENDORTYPE_DATA_FAIL,
  };
};

export const postVendortypeData = (user) => {
  return (dispatch) => {
    if (!user.name) return;

    dispatch(postVendortypeDataStart());
    axios
      .post("vendortypes", user)
      .then(() => {
        console.log("swal");
        swal("Successfully Created Account Group!").then(() => {
          window.location.reload();
        });
      })
      .catch((error) => dispatch(postVendortypeDataFail()));
    // props.addUser(user);
    // setUser(initialFormState);
  };
};

export const editVendortypeRowStart = () => {
  return {
    type: actionType.EDIT_VENDORTYPE_ROW_START,
  };
};

export const failEditVendortype = () => {
  return {
    type: actionType.FAIL_EDIT_VENDORTYPE,
  };
};

export const editVendortypeRow = (
  id,
  editing,
  setEditing,
  currentUser,
  setCurrentUser
) => {
  return (dispatch) => {
    dispatch(editVendortypeRowStart());
    setEditing(true);
    axios
      .get(`vendortypes/${id}`)
      .then((res) => {
        console.log(res.data, "editing data res");
        setEditing(res.data);
        setCurrentUser({
          id: res.data.id,
          name: res.data.name,
          under_group_name: res.data.under_group_name,
        });
      })
      .catch((error) => dispatch(failEditVendortype()));
  };
};

export const updateVendortypeDataStart = () => {
  return {
    type: actionType.UPDATE_VENDORTYPE_DATA_START,
  };
};

export const updateVendortypeData = (
  id,
  editing,
  setEditing,
  currentUser,
  setCurrentUser
) => {
  return (dispatch) => {
    dispatch(updateVendortypeDataStart());
    setEditing(false);

    axios
      .put(`vendortypes/${id}`, currentUser)
      .then(() => {
        console.log("swal");
        swal("Successfully Updated Account Group!").then(() => {
          window.location.reload();
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
