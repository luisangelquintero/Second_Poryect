import React from "react";
import SearchContainer from "../containers/SearchContainer";
import NewsSections from "./NewsSections";
import { Switch, Route } from "react-router-dom";

const App = () => (
  <div>
    <SearchContainer />
    <Switch>
      <Route exact path="/">
        <NewsSections category={0} />
      </Route>
      <Route path="/Politica">
        <NewsSections category={1} />
      </Route>
      <Route path="/Internacionales">
        <NewsSections category={2} />
      </Route>
      <Route path="/Tecnologia">
        <NewsSections category={3} />
      </Route>

      <Route path="/Espectaculos">
        <NewsSections category={4} />
      </Route>
      <Route path="/Deportes">
        <NewsSections category={5} />
      </Route>
      <Route path="/Diseno">
        <NewsSections category={6} />
      </Route>
    </Switch>
  </div>
);

export default App;
