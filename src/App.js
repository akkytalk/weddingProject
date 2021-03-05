import React, { Fragment } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import About from "./Component/About/About";
import Home from "./Component/Home/Home";
import Contact from "./Component/Contact/Contact";
import Form from "./Component/Vendor/Form";
import Dashboard from "./Component/Vendor/Dashboard/Dashboard";
import Listing from "./Component/Vendor/Dashboard/Listing";
import Cat from "./Component/Vendor/Catergory/Cat";
import Cat2 from "./Component/Vendor/Catergory/Cat2";
import SamplePage from "./Samplepage";
import Photo from "./Component/VendorPage/Photo";
import Florist from "./Component/VendorPage/Flower";
import Cakes from "./Component/VendorPage/Cakes";
import WeddingDress from "./Component/VendorPage/WeddingDress";
import Dj from "./Component/VendorPage/dj/Dj";
import Food from "./Component/VendorPage/Food";
import MakeUp from "./Component/VendorPage/Makeup";
import WeddingPlan from "./Component/VendorPage/WeddingPlan";
import Jewellery from "./Component/VendorPage/Jewllery";
import Pandit from "./Component/VendorPage/Pandit";
import Mendhi from "./Component/VendorPage/Mendhi";
import Category from "./Component/Home/Category";
import Gallery from "./Component/Gallery/Gallery";
import UserLogin from "./Component/User/UserLogin";

import { configureStore } from "./reduxStore/ConfigureStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";

const { persistor, store } = configureStore();

const App = () => {
  return (
    <Fragment>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <HashRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/aboutus" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/vendor" component={Form} />
              <Route path="/vendorprofile" component={Cat} />
              <Route path="/samplepage" component={SamplePage} />
              <Route path="/login" component={UserLogin} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/vendorlist" component={Listing} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/category" component={Cat2} />
              <Route path="/photos" component={Photo} />
              <Route path="/florist" component={Florist} />
              <Route path="/cakes" component={Cakes} />
              <Route path="/weddingdress" component={WeddingDress} />
              <Route path="/dj" component={Dj} />
              <Route path="/food" component={Food} />
              <Route path="/Makeup" component={MakeUp} />
              <Route path="/weddingplanner" component={WeddingPlan} />
              <Route path="/jewles" component={Jewellery} />
              <Route path="/pandit" component={Pandit} />
              <Route path="/mendhi" component={Mendhi} />

              <Route path="/cat" component={Category} />
            </Switch>
          </HashRouter>
        </PersistGate>
      </Provider>
    </Fragment>
  );
};

export default App;
