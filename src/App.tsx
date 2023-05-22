import './App.css';
import 'antd/dist/antd.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ProfileScreen from "./views/ProfileScreen";
import AddProductScreen from "./views/AddProductScreen";
import ResellScreen from "./views/ResellScreen";
import TrackingScreen from "./views/TrackingScreen";
import BuyScreen from "./views/BuyScreen";
function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path={"/buy"} exact>
            <BuyScreen />
            
          </Route>
          <Route path={"/tracking"} exact>
            <TrackingScreen />
          </Route>
          <Route path={"/"} exact>
            <ResellScreen />
          </Route>
          <Route path={"/add_product"} exact>
            <AddProductScreen />
          </Route>
          <Route path={"/profile"} exact>
              <ProfileScreen />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
