import React from "react";

const DropDown = ({ label, name, val, onChange }) => (
  <div>
    <label>{label}</label>
    <select
      onChange={e => {
        onChange(e.target.value, name);
      }}
    >
      <option value="">Select an option.</option>
      {val.map(value => (
        <option value={value}>{value}</option>
      ))}
    </select>
  </div>
);

export default DropDown;
