import React from "react";

// get the rest of the properties using rest operator
const input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        // autoFocus
        // ref={this.username}
        // value={value}
        // onChange={onChange}
        // type={type}
        {...rest}
        name={name}
        id={name}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default input;
