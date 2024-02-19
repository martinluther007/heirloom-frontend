import React from "react";

const Button = ({
  text,
  icon,
  className,
  ...props
}: {
  text: string;
  icon: JSX.Element;
  className: string;
}) => {
  return (
    <button {...props} className={`button__main ${className}`}>
      {text}
      {icon}
    </button>
  );
};

export default Button;
