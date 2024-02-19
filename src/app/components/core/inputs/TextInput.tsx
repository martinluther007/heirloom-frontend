import React from "react";

const TextInput = ({
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
  return (
    <div {...props} className="input__container">
      <input
        onChange={(e) => onChange(e.target.value)}
        id="maininp"
        placeholder=""
        className={`input__main ${className}`}
        value={value}
      />
      <label htmlFor="maininp" className="input__label">
        {placeholder}
      </label>
    </div>
  );
};

export default TextInput;
