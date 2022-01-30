import React from "react";
import { Persons } from "../file";

interface ListItemProps extends Persons {

}

export const ListItem = ({
  avatar,
  name,
  description,
}: ListItemProps) => {
  return (
    <li className="list-item">
      <div className="search-info">
        <div className="list-image">
          <img src={avatar} alt={name} />
        </div>
        <div className="list-content">
          <h5>{name}</h5>
          <p>{description}</p>
        </div>
      </div>
    </li>
  );
};
