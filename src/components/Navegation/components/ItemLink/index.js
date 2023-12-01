import React from "react";
import { NavLink } from "react-router-dom";

const ItemLink = ({ title, url, key }) => {
  return (
    <li key={key}>
      <NavLink to={url} activeClassName="active" exact>
        {title}
      </NavLink>
    </li>
  );
};

export default ItemLink;
