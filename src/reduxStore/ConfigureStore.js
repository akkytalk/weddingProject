import { createStore, applyMiddleware } from "redux";
import { persistStore, persistCombineReducers } from "redux-persist";
import thunk from "redux-thunk";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import Login from "./reducers/login";
import RVendor from "./reducers/RVendor";
import RVendortype from "./reducers/RVendortype";
import VendorLogin from "./reducers/VendorLogin";
import RMyBooking from "./reducers/RMybooking";

const config = {
  key: "root",
  storage,
  debug: true,
};

export const configureStore = () => {
  const store = createStore(
    persistCombineReducers(config, {
      login: Login,
      vendorLogin: VendorLogin,
      vendor: RVendor,
      vendortype: RVendortype,
      myBooking: RMyBooking,
    }),
    applyMiddleware(thunk, logger)
  );

  const persistor = persistStore(store);

  return { persistor, store };
};
