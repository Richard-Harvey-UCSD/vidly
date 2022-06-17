import React, { Component } from "react";

// Input: liked: boolean
// Output: onClick

const Like = (props) => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <i
      className={classes}
      style={{ cursor: "pointer" }}
      onClick={props.onClick}
      aria-hidden="true"
    />
  );
};

export default Like;
