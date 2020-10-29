import React from "react";
import SearchContainer from "../containers/SearchContainer";
import { Switch, Route } from "react-router-dom";
import viewContainer from "../containers/viewContainer";

const App = () => (
  <div>
    <SearchContainer />
    <Switch>
      <Route exact path="/" component={viewContainer} />
      <Route path="/Internacionales" component={viewContainer} />
      <Route path="/Tecnologia" component={viewContainer} />
      <Route path="/Espectaculos" component={viewContainer} />
      <Route path="/Deportes" component={viewContainer} />
      <Route path="/Diseno" component={viewContainer} />
      <Route path="/Politica" component={viewContainer} />
      <Route path="/search/" component={viewContainer} />
    </Switch>
  </div>
);

export default App;
