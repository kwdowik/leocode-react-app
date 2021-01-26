import React from "react";

function ListItem(props) {
  return (
    <li key={props.id}>
      <span>{props.name}</span> @{props.username}
    </li>
  );
}

export default ListItem;
