import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

const SearchMenu = ({
  getNewsDispacth,
  getNewsByCategoryDispacth,
  getNewsByWordDispacth
}) => {
  const categories = [
    { name: "Internacionales", id: uuidv4() },
    { name: "Tecnologia", id: uuidv4() },
    { name: "Espectaculos", id: uuidv4() },
    { name: "Politica", id: uuidv4() },
    { name: "Deportes", id: uuidv4() },
    { name: "Diseno", id: uuidv4() }
  ];

  return (
    <div>
      <ul className="">
        <li className="">
          <NavLink to="/" onClick={() => getNewsDispacth()}>
            Inicio
          </NavLink>
        </li>

        {categories.map((category) => {
          return (
            <li key={category.id}>
              <NavLink
                to={`/${category.name}`}
                className="nav-link"
                activeClassName="active"
              >
                {category.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchMenu;
