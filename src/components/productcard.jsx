import React from "react";
import ViewProductButton from "./Button";

const Productcard = () => {
  const productImage =
    "https://ptron.in/cdn/shop/products/01_7ee9bca0-b18f-473c-9e3c-3eb4be5468e5.jpg?v=1601549618"; // Dummy image
  const productName = "Sample Product";
  const price = "$99.99";

  return (
    <div style={styles.card}>
      <img src={productImage} alt={productName} style={styles.image} />
      <h3 style={styles.name}>{productName}</h3>
      <p style={styles.price}>{price}</p>
      <ViewProductButton />
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "16px",
    textAlign: "center",
    width: "200px",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "5px",
  },
  name: {
    fontSize: "18px",
    margin: "10px 0",
  },
  price: {
    color: "#28a745",
    fontSize: "16px",
    fontWeight: "bold",
  },
};

export default Productcard;
