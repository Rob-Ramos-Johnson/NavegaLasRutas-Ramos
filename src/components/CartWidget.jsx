// src/components/CartWidget.jsx
import { FaShoppingCart } from "react-icons/fa";
import { Badge } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartWidget() {
  const { cartCount } = useContext(CartContext);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <FaShoppingCart size={28} color="white" />
      <Badge bg="danger">{cartCount}</Badge>
    </div>
  );
}

export default CartWidget;
