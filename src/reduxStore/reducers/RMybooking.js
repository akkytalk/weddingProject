import * as actionType from "../actions/ActionType";

const initialState = {
  myBooking: [],
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.MYBOOKING_SET_DATA:
      return {
        ...state,
        myBooking: action.myBooking,
        error: false,
      };

    case actionType.MYBOOKING_FAIL_DATA:
      return {
        ...state,
        error: true,
      };

    case actionType.POST_MYBOOKING_DATA_FAIL:
      return {
        ...state,
        error: true,
      };

    case actionType.EDIT_MYBOOKING_ROW_START:
      return {
        ...state,
      };

    case actionType.UPDATE_MYBOOKING_DATA_START:
      return {
        ...state,
      };

    case actionType.CURRENT_USER_EDIT_MYBOOKING:
      return {
        ...state,
        editing: true,
        currentUser: [
          {
            id: action.id,
            name: action.name,
          },
        ],
      };
    default:
      return state;
  }
};

export default reducer;
