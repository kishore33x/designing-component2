import React from "react";

const ViewProductButton = () => {
  return (
    <button style={buttonStyle}>View Product</button>
  );
};

const buttonStyle = {
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  padding: "8px 12px",
  cursor: "pointer",
  borderRadius: "5px",
  fontSize: "14px",
  marginTop: "10px",
};

export default ViewProductButton;
