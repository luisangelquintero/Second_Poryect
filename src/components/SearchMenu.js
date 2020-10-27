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
    <div>
      <ul className="">
        <li className="">
          <Link to="/Home">Inicio</Link>
        </li>

        {categories.map((category) => {
          return (
            <li key={category.id}>
              <Link to={`/${category.name}`}>
                {category.name}
                {category.number}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchMenu;
