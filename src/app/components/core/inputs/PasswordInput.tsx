"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = ({
  placeholder,
  className,
  onChange,
  value,
  ...props
}: {
  placeholder: string;
  className: string;
  onChange: Function;
  value: string;
}) => {
  const [type, setType] = useState<string>("password");

  const handleChangeType = (value: string) => {
    setType(value);
  };
  return (
    <div {...props} className="input__container">
      <input
        type={type}
        id="inppass"
        placeholder=""
        className={`input__main ${className}`}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
      <label htmlFor="inppass" className="input__label">
        {placeholder}
      </label>
      <div className="input__passwordbox">
        {type === "password" ? (
          <FaEye
            onClick={() => handleChangeType("text")}
            className="input__password"
            size={14}
          />
        ) : (
          <FaEyeSlash
            onClick={() => handleChangeType("password")}
            className="input__password"
            size={14}
          />
        )}
      </div>
    </div>
  );
};

export default PasswordInput;
