import React from "react";
import { v4 as uuidv4 } from "uuid";
import Page from "./Page";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

const SearchMenu = ({ getHomeNews, searchNews, onGetNews }) => {
  const categories = [
    { name: "Internacionales", id: uuidv4(), number: 1 },
    { name: "Tecnologia", id: uuidv4(), number: 2 },
    { name: "Espectaculos", id: uuidv4(), number: 3 },
    { name: "Politica", id: uuidv4(), number: 4 },
    { name: "Deportes", id: uuidv4(), number: 5 },
    { name: "Diseno", id: uuidv4(), number: 6 }
  ];

  return (
    <div>
      <Router>
        <ul className="">
          <li className="">
            <NavLink to="/" onClick={() => getHomeNews()}>
              Inicio
            </NavLink>
          </li>

          {categories.map((category) => {
            return (
              <li key={category.id}>
                <NavLink
                  to={`/${category.name}`}
                  onClick={() => onGetNews(category.number)}
                >
                  {category.name}
                  {category.number}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <Switch>
          <Route exact path="/">
            <Page category={0} />
          </Route>
          <Route path="/Politica">
            <Page category={1} />
          </Route>
          <Route path="/Internacionales">
            <Page category={2} />
          </Route>
          <Route path="/Tecnologia">
            <Page category={3} />
          </Route>

          <Route path="/Espectaculos">
            <Page category={4} />
          </Route>
          <Route path="/Deportes">
            <Page category={5} />
          </Route>
          <Route path="/Diseno">
            <Page category={6} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default SearchMenu;
