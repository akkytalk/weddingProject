import * as ActionTypes from "../actions/ActionType";

const VendorLogin = (
  state = { isLoading: false, errMess: null, vendorLogin: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_VENDOR_LOGIN:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        vendorLogin: action.vendorLogin,
      };

    case ActionTypes.VENDOR_LOGIN_LOADING:
      return {
        ...state,
        isLoading: true,
        errMess: null,
      };

    case ActionTypes.VENDOR_LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        vendorLogin: [],
      };

    case ActionTypes.REMOVE_VENDOR_LOGIN:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        vendorLogin: [],
      };

    default:
      return state;
  }
};

export default VendorLogin;
