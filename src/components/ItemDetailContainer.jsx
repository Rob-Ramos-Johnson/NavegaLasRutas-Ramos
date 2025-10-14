// src/components/ItemDetailContainer.jsx
import { useEffect, useState, useContext, useCallback } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { CartContext } from "../context/CartContext";
import { Button, Spinner, Form } from "react-bootstrap";
import ItemImage from "./ItemImage";

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cantidad, setCantidad] = useState(1);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);
    const fetchItem = new Promise((resolve) => {
      setTimeout(() => {
        const found = products.find((p) => p.id === parseInt(itemId));
        resolve(found);
      }, 300); // hice más corto para pruebas
    });

    fetchItem.then((product) => {
      setItem(product);
      setLoading(false);
    });
  }, [itemId]);

  // useCallback mantiene estable la función que se pasa a botones
  const handleAddToCart = useCallback(() => {
    const cant = Math.max(1, Number.isFinite(+cantidad) ? +cantidad : 1);
    addToCart(item, cant);
  }, [addToCart, item, cantidad]);

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <Spinner animation="border" /> Cargando producto...
      </div>
    );
  }

  if (!item) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "2rem" }}>
        Producto no encontrado
      </h2>
    );
  }

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "600px",
        margin: "0 auto",
        textAlign: "center",
        /* estilos para reducir repintados */
        willChange: "transform",
        backfaceVisibility: "hidden",
        transform: "translateZ(0)",
      }}
    >
      {/* componente memoizado - NO recibirá props cambiantes */}
      <ItemImage src={item.imagen} alt={item.nombre} />

      <h2>{item.nombre}</h2>
      <p>{item.descripcion}</p>
      <h4>${item.precio}</h4>

      <Form.Group style={{ marginBottom: "1rem" }}>
        <Form.Label>Cantidad:</Form.Label>
        <Form.Control
          type="number"
          min="1"
          value={cantidad}
          onChange={(e) =>
            setCantidad(Math.max(1, parseInt(e.target.value || "1", 10)))
          }
          style={{ width: "100px", margin: "0 auto" }}
        />
      </Form.Group>

      <Button
        variant="primary"
        onClick={handleAddToCart}
        style={{
          outline: "none",
          border: "none",
          WebkitTapHighlightColor: "transparent",
          userSelect: "none",
        }}
      >
        Agregar al carrito
      </Button>
    </div>
  );
}

export default ItemDetailContainer;
