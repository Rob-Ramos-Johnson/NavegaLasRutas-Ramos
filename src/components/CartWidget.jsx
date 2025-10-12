import { FaShoppingCart } from "react-icons/fa";
import { Badge } from "react-bootstrap";

function CartWidget() {
  const cartCount = 3;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <FaShoppingCart size={24} color="white" />
      <Badge bg="danger">{cartCount}</Badge>
    </div>
  );
}

export default CartWidget;
