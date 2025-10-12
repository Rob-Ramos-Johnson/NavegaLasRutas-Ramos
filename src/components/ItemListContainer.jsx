import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
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

    getProducts.then(res => setItems(res));
  }, [categoryId]);

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">{greeting}</h2>
      {items.length > 0 ? <ItemList items={items} /> : <p className="text-center">Cargando productos...</p>}
    </div>
  );
}

export default ItemListContainer;
