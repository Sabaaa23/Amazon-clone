import React from "react";

export default function Input({
  type,
  placeholder,
  className,
  value,
  onChange,
  required,
  style,
  autocomplete,
  id,
  checked,
  name,
}) {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      style={style}
      autoComplete={autocomplete}
      id={id}
      checked={checked}
      name={name}
    />
  );
}
