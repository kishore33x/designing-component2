import React from "react";
import Productcard from "./components/Productcard";

const App = () => {
  const products = Array.from({ length: 10 });

  return (
    <div style={gridStyle}>
      {products.map((_, index) => (
        <Productcard key={index} />
      ))}
    </div>
  );
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "20px",
  padding: "20px",
  justifyContent: "center",
};

export default App;
