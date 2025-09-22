import { FaShoppingCart } from "react-icons/fa";
import { Badge } from "react-bootstrap";

function CartWidget() {
  const cartCount = 4; // Simular cantidad de productos en el carrito

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      {/* Icono de carrito en blanco */}
       <FaShoppingCart size={28} color="white" />
      
      {/* Contador en rojo */}
      <Badge bg="danger" style={{ fontSize: "0.9rem" }}>
        {cartCount}
      </Badge>
    </div>
  );
}

export default CartWidget;
