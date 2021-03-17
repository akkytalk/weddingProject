import * as actionType from "../actions/ActionType";

const initialState = {
  review: [],
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.REVIEW_SET_DATA:
      return {
        ...state,
        review: action.review,
        error: false,
      };

    case actionType.REVIEW_FAIL_DATA:
      return {
        ...state,
        error: action.error,
      };

    case actionType.POST_REVIEW_DATA_FAIL:
      return {
        ...state,
        error: action.error,
      };

    case actionType.EDIT_REVIEW_ROW_START:
      return {
        ...state,
      };

    case actionType.UPDATE_REVIEW_DATA_START:
      return {
        ...state,
      };

    case actionType.CURRENT_USER_EDIT_REVIEW:
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
