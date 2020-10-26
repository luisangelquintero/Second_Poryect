import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const SearchMenu = ({ defaultUser, onGet, onClear, onSearch, value }) => {
  const categories = [
    { name: "Internacionales", id: uuidv4() },
    { name: "Tecnologia", id: uuidv4() },
    { name: "Espectaculos", id: uuidv4() },
    { name: "Deportes", id: uuidv4() },
    { name: "Diseno", id: uuidv4() }
  ];

  return (
    <div>
      <ul className="">
        <li className="">
          <Link to="/">
            <div className="nav-link">
              Home <span className="sr-only">(current)</span>
            </div>
          </Link>
        </li>

        {categories.map((category, i) => {
          return (
            <li className="nav-item" key={i}>
              <Link to={`/${category}`}>
                <div className="nav-link">{category}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchMenu;