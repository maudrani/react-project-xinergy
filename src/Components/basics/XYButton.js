import React from "react";

const XYButton = ({
  content,
  color = "blue",
  outline = false,
  fontColor,
  fontWeight = "4",
  fontSize,
  className,
  onClick,
  type,
  disabled = false,
  form,
}) => {
  return (
    <button
      form={form}
      type={type}
      onClick={onClick}
      className={`btn-${color}-${outline ? "outline" : "normal"} ${className}`}
      disabled={disabled}
    >
      <span className={`fw-${fontWeight} fs-${fontSize} fc-${fontColor}`}>
        {content}
      </span>
    </button>
  );
};

export default XYButton;
