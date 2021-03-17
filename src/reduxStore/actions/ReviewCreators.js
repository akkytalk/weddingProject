import * as actionType from "./ActionType";
import axios from "../../axios";
import swal from "sweetalert";

export const reviewSetData = (review) => {
  return {
    type: actionType.REVIEW_SET_DATA,
    review: review,
  };
};

export const reviewFailData = (error) => {
  return {
    type: actionType.REVIEW_FAIL_DATA,
    error:error
  };
};

export const reviewGetData = () => {
  return (dispatch) => {
    axios
      .get("feedbacks")
      .then((res) => {
        console.log(res.data, "res");
        dispatch(reviewSetData(res.data));
      })

      .catch((error) => dispatch(reviewFailData(error)));
  };
};

export const deleteReviewFail = () => {
  return {
    type: actionType.DELETE_REVIEW_FAIL,
  };
};

export const deleteReview = (id) => {
  return (dispatch) => {
    if (id) {
      axios
        .delete(`feedbacks/${id}`)
        .then(() => {
          console.log("swal");
          swal("Successfully Deleted Booking!").then(() => {
            window.location.reload();
          });
        })
        .catch((error) => dispatch(deleteReviewFail()));
    }
  };
};

export const postReviewDataStart = () => {
  return {
    type: actionType.POST_REVIEW_DATA_START,
  };
};

export const postReviewDataFail = (error) => {
  return {
    type: actionType.POST_REVIEW_DATA_FAIL,
    error: error
  };
};

export const postReviewData = (user) => {
  return (dispatch) => {
    //if (!user.name) return;

    dispatch(postReviewDataStart());
    axios
      .post("feedbacks", user)
      .then(() => {
        console.log("swal");
        swal("Successfully Created My Booking!").then(() => {
          window.location.reload();
        });
      })
      .catch((error) => dispatch(postReviewDataFail()));
    // props.addUser(user);
    // setUser(initialFormState);
  };
};

export const editReviewRowStart = () => {
  return {
    type: actionType.EDIT_REVIEW_ROW_START,
  };
};

export const failEditReview = () => {
  return {
    type: actionType.FAIL_EDIT_REVIEW,
  };
};

export const editReviewRow = (
  id,
  editing,
  setEditing,
  currentUser,
  setCurrentUser
) => {
  return (dispatch) => {
    dispatch(editReviewRowStart());
    setEditing(true);
    axios
      .get(`feedbacks/${id}`)
      .then((res) => {
        console.log(res.data, "editing data res");
        setEditing(res.data);
        setCurrentUser({
          id: res.data.id,
          vendor_name: res.data.vendor.name,
          vendor_type_name: res.data.vendor_type.name,
          user_name: res.data.user.name,
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
      .catch((error) => dispatch(failEditReview(error)));
  };
};

export const updateReviewDataStart = () => {
  return {
    type: actionType.UPDATE_REVIEW_DATA_START,
  };
};

export const updateReviewData = (
  id,
  editing,
  setEditing,
  currentUser,
  setCurrentUser
) => {
  return (dispatch) => {
    dispatch(updateReviewDataStart());
    setEditing(false);
    console.log("Id", id);
    console.log("currentUser", currentUser);
    axios
      .put(`feedbacks/${id}`, currentUser)
      .then(() => {
        console.log("swal");
        swal("Successfully Updated Review details!").then(() => {
          window.location.reload();
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
