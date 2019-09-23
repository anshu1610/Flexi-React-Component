import React from "react";

const TextField = ({ label, name, onChange }) => (
  <div>
    <label>{label}</label>
    <input
      type="text"
      //value={person_name}
      onChange={e => {
        onChange(e.target.value, name);
      }}
    />
  </div>
);

export default TextField;
