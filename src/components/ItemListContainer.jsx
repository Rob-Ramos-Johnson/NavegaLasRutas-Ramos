import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products"; // ✅ ruta correcta
import ItemList from "./ItemList";

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(categoryId ? products.filter(p => p.categoria === categoryId) : products);
      }, 800);
    });

    getProducts.then((res) => setItems(res));
  }, [categoryId]);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>{greeting}</h2>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;
