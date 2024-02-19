import React, { SetStateAction } from "react";
import Select from "react-select";

const SelectInput = ({
  placeholder,
  error,
  width,
  padding,
  border,
  backgroundColor,
  maxHeight,
  options,
  handleChange,
  selected,
  isClearable = true,
  isDisabled = false,
  className,
}: {
  placeholder: string;
  width?: string;
  error?: string;
  padding?: string;
  border?: string;
  backgroundColor?: string;
  maxHeight?: string;
  selected: string;
  isClearable?: boolean;
  isDisabled?: boolean;
  options: {}[];
  handleChange: SetStateAction<any>;
  className?: string;
}) => {
  const styles = {
    control: (base: any) => ({
      ...base,
      lineHeight: "20px",
      borderRadius: "7px",
      fontSize: "1.4rem",
      cursor: "pointer",
      fontWeight: "200",
      borderColor: error ? "#F87171" : "#D2D7DF",
      maxWidth: width || undefined,
      padding,
      backgroundColor: backgroundColor || "#EEF2F8",
      border: border ? "border" : "none",
      "&:hover": {
        borderColor: "#38bdf8",
        boxShadow: "0px 0px 2px #E5E7EB",
      },
    }),
    singleValue: (provided: any) => ({
      ...provided,
      fontWeight: "400",
    }),
    menu: (provided: any) => ({
      ...provided,
      fontSize: "14px",
    }),
    menuList: (styles: any) => ({
      ...styles,
      maxHeight,
    }),
    option: (
      styles: any,
      { isFocused, isSelected }: { isFocused: Boolean; isSelected: Boolean }
    ) => {
      let backgroundColor = null;
      if (isSelected) {
        backgroundColor = "#EEF2F8";
      } else if (isFocused) {
        backgroundColor = "#eee";
      }
      return {
        ...styles,
        backgroundColor,
        color: "#33415c",
        fontSize: "14px",
        fontWeight: "300",
      };
    },
  };
  return (
    <div>
      <Select
        placeholder={placeholder}
        defaultValue={options[0]}
        closeMenuOnSelect
        options={options}
        styles={styles}
        onChange={handleChange}
        value={selected}
        isClearable={isClearable}
        isDisabled={isDisabled}
        classNamePrefix="react_select"
        className={className}
      />
    </div>
  );
};

export default SelectInput;
