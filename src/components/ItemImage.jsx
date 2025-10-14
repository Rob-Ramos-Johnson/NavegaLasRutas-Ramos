// src/components/ItemImage.jsx
import React from "react";

function ItemImage({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: "100%",
        maxHeight: "400px",
        objectFit: "cover",
        marginBottom: "1rem",
        border: "none",
        outline: "none",
        userSelect: "none",
        WebkitUserDrag: "none",
        backfaceVisibility: "hidden",
        transform: "translateZ(0)",
        transition: "none",
      }}
    />
  );
}

export default React.memo(ItemImage);
