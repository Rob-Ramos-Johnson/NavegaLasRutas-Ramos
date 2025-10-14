import React from "react";

function ItemDetail({ product, onAddToCart }) {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>{product.name}</h2>
      <img
        src={product.image}
        alt={product.name}
        style={{
          maxWidth: "300px",
          borderRadius: "10px",
          transition: "transform 0.2s ease-in-out",
          userSelect: "none",
          WebkitUserDrag: "none"
        }}
      />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>

      {/* Botón para agregar al carrito */}
      <button
        onClick={() => onAddToCart(product)}
        style={{
          background: "#007bff",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default React.memo(ItemDetail);
