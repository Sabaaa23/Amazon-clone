import React from "react";

export default function Button({ onClick, className, title, type }) {
  return (
    <button onClick={onClick} className={className} type={type}>
      {title}
    </button>
  );
}
