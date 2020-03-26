import React from "react";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import UlamDetailsPage from "./pages/UlamDetailsPage";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./App.scss";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MainPage} exact={true} />
        <Route
          path="/ulam-for-today/:id"
          component={UlamDetailsPage}
          exact={true}
        />
        <Route path="/" render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  );
};

export default App;

// eslint-disable-next-line no-lone-blocks
{
  /*
  <IonApp className="main-container">
  <IonReactRouter>
    
    <IonRouterOutlet>
      <Route path="/ulam-for-today" component={MainPage} exact={true} />
      <Route
        path="/ulam-for-today/ulam-details/:id"
        component={UlamDetailsPage}
      />
      <Route
        path="/"
        render={() => <Redirect to="/ulam-for-today" />}
        exact={true}
      />
    </IonRouterOutlet>
  </IonReactRouter>
</IonApp>
*/
}
