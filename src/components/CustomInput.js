import React from "react";

const CustomInput = (props) => {
  const { type, name, placeholder, classname } = props;
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`form-control ${classname}`}
      />
    </div>
  );
};
//Pit Confirm 9:30:35

export default CustomInput;
