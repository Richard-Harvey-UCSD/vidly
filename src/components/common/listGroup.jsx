import React, { Component } from "react";

const ListGroup = (props) => {
  const { items, textProperty, valueProperty } = props;
  //   console.log("items: ", items);

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li key={item[valueProperty]} className="list-group-item">
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
