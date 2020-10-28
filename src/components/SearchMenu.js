import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const SearchMenu = ({ getHomeNews, searchNews, onGetNews, repos }) => {
  const categories = [
    { name: "Internacionales", id: uuidv4(), number: 1 },
    { name: "Tecnologia", id: uuidv4(), number: 2 },
    { name: "Espectaculos", id: uuidv4(), number: 3 },
    { name: "Politica", id: uuidv4(), number: 4 },
    { name: "Deportes", id: uuidv4(), number: 5 },
    { name: "Diseno", id: uuidv4(), number: 6 }
  ];

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/">
          <div className="navbar-brand">
            <i className="fab fa-cloudversify"></i> Rain News
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/">
                <div
                  className="nav-link"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  Inicio
                </div>
              </Link>
            </li>

            {categories.map((category) => {
              return (
                <li
                  key={category.id}
                  className="nav-item"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  <Link to={`/${category.name}`}>
                    <div className="nav-link">{category.name}</div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default SearchMenu;
