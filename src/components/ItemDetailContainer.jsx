import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const getItem = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(p => p.id === parseInt(itemId)));
      }, 800);
    });

    getItem.then(res => setItem(res));
  }, [itemId]);

  return (
    <div className="container py-4">
      {item ? <ItemDetail item={item} /> : <p className="text-center">Cargando detalle...</p>}
    </div>
  );
}

export default ItemDetailContainer;
