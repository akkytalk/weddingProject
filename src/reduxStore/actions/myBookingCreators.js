import * as actionType from "./ActionType";
import axios from "../../axios";
import swal from "sweetalert";

export const myBookingSetData = (myBooking) => {
  return {
    type: actionType.MYBOOKING_SET_DATA,
    myBooking: myBooking,
  };
};

export const myBookingFailData = (error) => {
  return {
    type: actionType.MYBOOKING_FAIL_DATA,
    error: error,
  };
};

export const myBookingGetData = () => {
  return (dispatch) => {
    axios
      .get("transactions")
      .then((res) => {
        console.log(res.data, "res");
        dispatch(myBookingSetData(res.data));
      })

      .catch((error) => dispatch(myBookingFailData(error)));
  };
};

export const deleteMyBookingFail = () => {
  return {
    type: actionType.DELETE_MYBOOKING_FAIL,
  };
};

export const deleteMyBooking = (id) => {
  return (dispatch) => {
    if (id) {
      axios
        .delete(`transactions/${id}`)
        .then(() => {
          console.log("swal");
          swal("Successfully Deleted Booking!").then(() => {
            window.location.reload();
          });
        })
        .catch((error) => dispatch(deleteMyBookingFail()));
    }
  };
};

export const postMyBookingDataStart = () => {
  return {
    type: actionType.POST_MYBOOKING_DATA_START,
  };
};

export const postMyBookingDataFail = (error) => {
  return {
    type: actionType.POST_MYBOOKING_DATA_FAIL,
    error: error,
  };
};

export const postMyBookingData = (user) => {
  return (dispatch) => {
    //if (!user.name) return;

    dispatch(postMyBookingDataStart());
    axios
      .post("transactions", user)
      .then(() => {
        console.log("swal");
        swal("Successfully Added Booking!").then(() => {
          window.location.reload();
        });
      })
      .catch((error) => dispatch(postMyBookingDataFail(error)));
    // props.addUser(user);
    // setUser(initialFormState);
  };
};

export const editMyBookingRowStart = () => {
  return {
    type: actionType.EDIT_MYBOOKING_ROW_START,
  };
};

export const failEditMyBooking = () => {
  return {
    type: actionType.FAIL_EDIT_MYBOOKING,
  };
};

export const editMyBookingRow = (
  id,
  editing,
  setEditing,
  currentUser,
  setCurrentUser
) => {
  return (dispatch) => {
    dispatch(editMyBookingRowStart());
    setEditing(true);
    axios
      .get(`transactions/${id}`)
      .then((res) => {
        console.log(res.data, "editing data res");
        setEditing(res.data);
        setCurrentUser({
          id: res.data.id,
          vendor_name: res.data.vendor.name,
          vendor_type_name: res.data.vendor_type.name,
          user_name: res.data.user.name,
          customer_name: res.data.customer_name,
          booking_date: res.data.booking_date,
          booking_amount: res.data.booking_amount,
          advance_amount: res.data.advance_amount,
          remarks: res.data.remarks,
          reference: res.data.reference,
          menu: res.data.menu,
          morning_status: res.data.morning_status,
          night_status: res.data.night_status,
        });
      })
      .catch((error) => dispatch(failEditMyBooking(error)));
  };
};

export const updateMyBookingDataStart = () => {
  return {
    type: actionType.UPDATE_MYBOOKING_DATA_START,
  };
};

export const updateMyBookingData = (
  id,
  editing,
  setEditing,
  currentUser,
  setCurrentUser
) => {
  return (dispatch) => {
    dispatch(updateMyBookingDataStart());
    setEditing(false);
    console.log("Id", id);
    console.log("currentUser", currentUser);
    axios
      .put(`transactions/${id}`, currentUser)
      .then(() => {
        console.log("swal");
        swal("Successfully Updated MyBooking details!").then(() => {
          window.location.reload();
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
